var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../../../config/database');
require('../../../config/passport')(passport);
var User = require('../../../models/User');
var Organization = require('../../../models/Organization');
var Project = require('../../../models/Project');

const utils = require('../../../_helpers/utils');

////////////////////////
/// Superadmins only
////////////////////////

// Get a user by id
router.get('/user/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Restrict non-superadmins
    if ( !isSuperAdmin )
        return res.json({ success: false, msg: 'Unauthorized', errorCode: 1 });

    // Query
    User.findById(req.params.id, function(err, queryResult) {
        // Fail
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Invalid user', errorCode: 2 });

        // Success
        return res.json({ success: true, data: queryResult });
    });
});

// Delete a user by id
router.delete('/user/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Restrict non-superadmins
    if ( !isSuperAdmin )
        return res.json({ success: false, msg: 'Unauthorized', errorCode: 1 });

    // Query
    User.findByIdAndRemove(req.params.id, function (err, queryResult) {
        // Fail
        if (err)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });
        
        // Success
        return res.json({ success: true, msg: 'Deleted' });
    });
});

// Update a user by id
router.put('/user/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Restrict non-superadmins
    if ( !isSuperAdmin )
        return res.json({ success: false, msg: 'Unauthorized', errorCode: 1 });
    
    var updateFields = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    };

    // If a new password was set, add it to the fields to update
    var newPassword = (req.body.password !== null && req.body.password != '') ? req.body.password : '';
    if (newPassword){
        updateFields['password'] = newPassword;
    }

    // Update blocked
    if (req.body.blocked !== undefined && req.body.blocked != null){
        updateFields['blocked'] = req.body.blocked;
    }
    // Update approved
    if (req.body.approved !== undefined && req.body.approved != null){
        updateFields['approved'] = req.body.approved;
    }

    User.findByIdAndUpdate(
        req.params.id,
        updateFields,
        function (err, queryResult) {
            // Fail
            if (err || !queryResult) return res.json({
                success: false,
                errorCode: 2,
                error: {
                    'code': err['code'],
                    'field': err['keyValue']
                }
            });

            // Success
            return res.json({ success: true, msg: 'Updated' });
        }
        );
});

// Create user
router.post('/user', passport.authenticate('jwt', { session: false}), function(req, res) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Restrict non-superadmins
    if ( !isSuperAdmin )
        return res.json({ success: false, msg: 'Unauthorized', errorCode: 1 });

    if (!req.body.email || !req.body.password)
        return res.json({ success: false, msg: 'Missing email / password', errorCode: 2 });

    // New User data
    var newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        blocked: (req.body.blocked !== undefined && req.body.blocked != null) ? req.body.blocked : false,
        approved: (req.body.approved !== undefined && req.body.approved != null) ? req.body.approved : true
    });

    // Query
    newUser.save(function (err, post) {

        // Fail
        if (err){
            if ('code' in error){
                return res.json({
                    success: false,
                    errorCode: 3,
                    error: {
                        'code': err['code'],
                        'field': err['keyValue']
                    }
                });
            }
            else if('_message' in error){
                return res.json({ success: false, msg: error['_message'], errorCode: 4 });
            }
            else{
                return res.json({ success: false, msg: 'Error', errorCode: 5 });
            }
        }
        
        // Success
        return res.json({ success: true, msg: 'Created' });
    });
});

// Create organization
router.post('/organization', passport.authenticate('jwt', {session: false}),  function(req, res, next) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Restrict non-superadmins
    if ( !isSuperAdmin )
        return res.json({ success: false, msg: 'Unauthorized', errorCode: 1 });

    // Required input data
    if (req.body.shortname == null || !req.body.shortname
        || req.body.fullname == null || !req.body.fullname
        || req.body.email == null || !req.body.email
        )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 2 });

    // Prepare organization data
    var newOrganization = new Organization({
        locked: (req.body.locked != null) ? req.body.locked : false,
        shortname: req.body.shortname,
        fullname: req.body.fullname,
        email: req.body.email,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        country: req.body.country
    });

    // If the user is not a superadmin, give them a role in the organization
    if ( !isSuperAdmin ){
        newOrganization['roles'] = [
        {
            user: req.user._id,
            role: 'contributor' // default role when creating an organization
        }
        ];
    }

    newOrganization.save(function (err, post) {
        if (err || post == null || !post){
            return res.json({
                success: false,
                errorCode: 3,
                error: {
                    'code': err['code'],
                    'field': err['keyValue']
                }
            });
        }

        // Ok
        return res.json({ success: true, msg: 'Created' });
    });
});

module.exports = router;