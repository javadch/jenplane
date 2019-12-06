var express = require('express');
var router = express.Router();
 
// All the API routes
router.use('/admin', require('./admin'));
router.use('/user', require('./user'));
router.use('/organization', require('./organization'));
router.use('/project', require('./project'));
router.use('/resource', require('./resource'));
router.use('/role', require('./role'));

module.exports = router;