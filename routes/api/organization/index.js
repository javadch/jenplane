var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var jwt = require('jsonwebtoken');
var passport = require('passport');
require('../../../config/passport')(passport);
var Organization = require('../../../models/Organization.js');
var Project = require('../../../models/Project.js');

// Utils functions
const utils = require('../../../_helpers/utils');

// User permissions class
let _userPermissions = require('../../../_helpers/user-permissions');
let userPermissionsClass = _userPermissions.UserPermissions;
let UserPermissions = new userPermissionsClass();

//////////////////////////////

// Get all organizations 
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // User issuing the request
    var userId = req.user._id;

    //////////////////////////
    // Role Permissions
    //////////////////////////

    var queryFilters = {};

    // User must have a role in the organization to view it
    if (!isSuperAdmin){
        queryFilters['roles.user'] = userId;
    }

    Organization.find(queryFilters, function (err, queryResult) {

        // No results
        if (!queryResult.length)
            return res.json({ success: false, msg: 'No organizations found', errorCode: 1 })
        
        // Error
        else if (err)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Ok
        return res.json({ success: true, data: queryResult });
    });
});

// Get organization by id
router.get('/:id', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    // Required input
    if (req.params.id == null || !req.params.id)
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // The organization
    var organizationId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRole){
        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanReadOrganization(userRole, 'org') )
            return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // Organization filters
        var queryFilters = {
            _id: organizationId
        };

        // Query
        Organization.findById(queryFilters, function (err, queryResult) {

            // Error or no result
            if (err || !queryResult)
                return res.json({ success: false, msg: 'Error', errorCode: 3 });
            
            // Ok
            return res.json({ success: true, data: queryResult });
        });
    });
});

// Update organization by id
router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    // Required input data
    if (req.body.shortname == null || !req.body.shortname
        || req.body.fullname == null || !req.body.fullname
        || req.body.email == null || !req.body.email
        || req.params.id == null || !req.params.id
        )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Input data
    var organizationId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRole){
        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanEditOrganization(userRole, 'org') )
            return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // The new data
        var newData = {
            locked: (req.body.locked != null) ? req.body.locked : false,
            shortname: req.body.shortname,
            fullname: req.body.fullname,
            email: req.body.email,
            description: req.body.description,
            address: req.body.address,
            phone: req.body.phone,
            country: req.body.country
        };

        // Update query
        Organization.findByIdAndUpdate(
        organizationId,
        newData,
        function(err, numAffected){
            // Fail
            if (err || !numAffected)
                return res.json({ success: false, msg: 'Error', errorCode: 3 });
            
            // Ok
            return res.json({ success: true, msg: 'Updated' });
        });
    });
});

// Lock the organization
router.get('/:id/lock', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    // Required input data
    if (req.params.id === undefined || !req.params.id )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Input data
    var organizationId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRole){

        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanDeleteLockOrganization(userRole, 'org') )
            return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // Lock the organization
        var newData = {
            locked: true
        };

        // Update query
        Organization.findByIdAndUpdate(
        organizationId,
        newData,
        function(err, numAffected){
            // Fail
            if (err || !numAffected)
                return res.json({ success: false, msg: 'Error', errorCode: 3 });
            
            // Ok
            return res.json({ success: true, msg: 'Locked' });
        });
    });
});

// Unlock the organization
router.get('/:id/unlock', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    // Required input data
    if (req.params.id === undefined || !req.params.id )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Input data
    var organizationId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRole){

        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanDeleteLockOrganization(userRole, 'org') )
            return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // Lock the organization
        var newData = {
            locked: false
        };

        // Update query
        Organization.findByIdAndUpdate(
        organizationId,
        newData,
        function(err, numAffected){
            // Fail
            if (err || !numAffected)
                return res.json({ success: false, msg: 'Error', errorCode: 3 });
            
            // Ok
            return res.json({ success: true, msg: 'Unlocked' });
        });
    });
});

// Delete an organization by id
// IMPORTANT: Deletes an organization AND its projects
router.delete('/:id', passport.authenticate('jwt', {session: false}),  function(req, res, next) {
    // Required input data
    if (req.params.id == null)
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Organization to delete
    var organizationId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRole){

        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanDeleteLockOrganization(userRole, 'org') )
            return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // Delete the organization's projects
        Project.deleteMany({
            organization: organizationId
        }, function(err){

            // Error deleting the projects
            if (err)
                return res.json({
                    success: false,
                    msg: 'Error deleting the organization\'s projects',
                    errorCode: 3
                });

            // Deleting the projects was successful

            // Delete the organization itself
            Organization.findByIdAndRemove(organizationId, function (err) {
                // Fail
                if (err)
                    return res.json({
                        success: false,
                        msg: 'Error deleting organization',
                        errorCode: 4
                    });
                
                // Ok
                return res.json({ success: true, msg: 'Deleted' });
            });
        });
    });
});

module.exports = router;