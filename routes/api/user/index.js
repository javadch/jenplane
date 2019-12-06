var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../../../config/database');
require('../../../config/passport')(passport);
var User = require('../../../models/User');

// Utils functions
const utils = require('../../../_helpers/utils');

// Find all users
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);
    
    //////////////////
    // Query filters

    // Hide superadmins and the logged-in user
    var queryFilters = {
        superadmin: { $in: [false, null] }, // not an admin
        _id: {$ne: req.user._id} // don't show the logged-in user
    };

    // Only approved and non-blocked users
    if ( !isSuperAdmin ){
        queryFilters['approved'] = true;
        queryFilters['blocked'] = false;
    }

    // Query
    User.find(queryFilters)
    .select(utils.getUserFieldsList())
    .exec(function(err, queryResult) {
        // Fail
        if (err)
            return res.json({ success: false, msg: 'Error', errorCode: 1 });

        // Success
        return res.json({ success: true, data: queryResult });
    });
});

// Register user
router.post('/register', function(req, res) {
    if (!req.body.email || !req.body.password)
        return res.json({ success: false, msg: 'Missing email / password', errorCode: 1 });
    
    // Prepare the user data
    var newUser = new User ({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    // Save the user
    newUser.save(function(err) {
        if (err){
            return res.json({
                success: false,
                errorCode: 2,
                error: {
                    'code': err['code'],
                    'field': err['keyValue']
                }
            });
        }

        // Success
        return res.json({ success: true });
    });
});

// Login user
router.post('/login', function(req, res) {

    // Query
    User.findOne({
        email: req.body.email
    },
    function(err, user) {
        if (err || !user)
            return res.json({ success: false, msg: 'Invalid login credentials', errorCode: 1 });

        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {

            if (isMatch && !err) {
                // Create the JWT token
                var userToken = jwt.sign(user.toJSON(), config.secret, {expiresIn: 86400});
                
                return res.json({ success: true, token: userToken, msg: 'Welcome' });
            }

            return res.json({ success: false, msg: 'Invalid login credentials', errorCode: 2 });
        });
    });
});

// Get the data of the logged-in user
router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res) {

    // Query
    User.findById(req.user.id)
    .select(utils.getUserFieldsProfile())
    .exec(function(err, queryResult) {
        // Fail
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 1 });

        // Success
        return res.json({ success: true, data: queryResult });
    });
});

// Check if a user is a superadmin
router.get('/superadmin', passport.authenticate('jwt', {session: false}), function(req, res) {
    User.findOne({
        _id: req.user._id,
        superadmin: true
    },
    function(err, queryResult){
        if (err || !queryResult)
            return res.json({ success: false });

        return res.json({ success: true });
    });
});

// Update profile of loggedin user
router.put('/profile', passport.authenticate('jwt', {session: false}), function(req, res) {
    var updateFields = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    // If a new password was set, add it to the fields to update
    var newPassword = (req.body.password !== null && req.body.password != '') ? req.body.password : '';
    if (newPassword){
        updateFields['password'] = newPassword;
    }

    // Query
    User.findByIdAndUpdate(
        req.user._id,
        updateFields,
        function (err, queryResult) {
            // Fail
            if (err || !queryResult)
                return res.json({ success: false, msg: 'Update failed', errorCode: 1 });

            // Success
            return res.json({ success: true, msg: 'Updated' });
        }
        );
});

// Logout user
router.get('/logout', passport.authenticate('jwt', { session: false}), function(req, res) {
    req.logout();
    return res.json({ success: true, msg: 'Logged out successfully' });
});

module.exports = router;