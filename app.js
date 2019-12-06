var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var config = require('./config/database');

var app = express();

// DB
mongoose.connect(config.database)
.then(() => console.log('connection succesful'))
.catch((err) => console.error(err));
//
app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/dashboard', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/user/register', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/user/login', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/user/profile', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/organizations', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/organizations/:id/detail/', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/projects', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/projects/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/projects/create/:orgId', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/projects/org/:orgId', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/resources', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/resources/project/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/resources/create/project/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/resources/:id/projects/:projectId', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/roles', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/org/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/project/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/create/org/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/create/project/:id', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/:id/org/:roleModelId', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/roles/:id/projects/:roleModelId', express.static(path.join(__dirname, 'dist/jenplane')));

app.use('/admin', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/admin/users', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/admin/users/create', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/admin/users/:id/detail', express.static(path.join(__dirname, 'dist/jenplane')));
app.use('/admin/org/create', express.static(path.join(__dirname, 'dist/jenplane')));

// Routes
require('./routes')(app);

// 404
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status >= 100 && err.status < 600 ? err.code : 500);
});

module.exports = app;