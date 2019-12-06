var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../../config/database');
require('../../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var User = require('../../../models/User');
var Organization = require('../../../models/Organization');
var Project = require('../../../models/Project');

// Utils functions
const utils = require('../../../_helpers/utils');

// User permissions class
let _userPermissions = require('../../../_helpers/user-permissions');
let userPermissionsClass = _userPermissions.UserPermissions;
let UserPermissions = new userPermissionsClass();

//////////////////////////////

// Get all roles for a specific model id
router.get('/:roleModelType/:roleModelId', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {

    // Required input data
    if (req.params.roleModelType == null || !req.params.roleModelType
        || req.params.roleModelId == null || !req.params.roleModelId)
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Input model data
    var roleModelType = req.params.roleModelType;
    var roleModelId = req.params.roleModelId;

    // If the current model is an organization
    if (roleModelType == 'org')
    {
        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, roleModelId, function(userRole){

            // Allow superadmins
            if (isSuperAdmin){}

            // Unauthorized
            else if ( !UserPermissions.roleCanReadOrganization(userRole, 'org') )
                return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

            // >> Authorized

            // Get the roles
            Organization.findById(roleModelId)
            .populate('roles.user')
            .exec(function (err, post) {

                // Error
                if (err)
                    return res.json({ success: false, msg: 'Error', errorCode: 3 });

                // No roles
                else if (post == null || post.roles == null )
                    return res.json({ success: false, msg: 'Error', errorCode: 4 });

                // Success
                return res.json({ success: true, data: post.roles });
            });
        });
    }

    // If the current model is a project
    else{

        // Get the organization which the project belongs to
        Project.findById(roleModelId, function(err, queryResult){
            
            // Project not found or error
            if (err || !queryResult)
                return res.json({ success: false, errorCode: 5 });

            // Project was found

            // The organization
            var organizationId = queryResult.organization;

            //////////////////////////
            // Role Permissions
            //////////////////////////

            // Get user's role in the organization
            UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

                // Get user's role in the project
                UserPermissions.getUserRole(req.user, Project, roleModelId, function(userRoleProj){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanReadProject(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanReadProject(userRoleProj, 'project')
                    )
                        return res.json({ success: false, errorCode: 6, msg: 'Unauthorized' });

                    // >> Authorized

                    // Get the roles for the queried project
                    Project.findById(roleModelId)
                    .populate('roles.user')
                    .exec(function (err, queryResult) {

                        // Error or no results
                        if (err || !queryResult || !queryResult.roles.length)
                            return res.json({ success: false, msg: 'Error', errorCode: 7 });

                        // Ok
                        return res.json({ success: true, data: queryResult.roles });
                    });
                });
            });

        });
    }
});

// Get role's details
router.get('/:id/:roleModelType/:roleModelId', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input data
    if (req.params.roleModelType == null || !req.params.roleModelType
        || req.params.roleModelId == null || !req.params.roleModelId
        || req.params.id == null || !req.params.id )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Input model data
    var roleModelType = req.params.roleModelType;
    var roleModelId = req.params.roleModelId;

    // The role to get
    var roleId = req.params.id;

    // If the current model is an organization
    if (roleModelType == 'org'){

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, roleModelId, function(userRole){

            // Allow superadmins
            if (isSuperAdmin){}

            // Unauthorized
            else if ( !UserPermissions.roleCanReadOrganization(userRole, 'org') )
                return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

            // >> Authorized

            // The role
            var queryFilters = {
                _id: roleModelId,
                'roles._id': roleId
            };

            // Get the user roles of this model
            Organization.findOne(queryFilters,
            {
                'roles.$': 1
            })
            .populate('roles.user')
            .exec(function (err, queryResult) {
                if (err || !queryResult || queryResult['roles'] == null)
                    return res.json({ success: false, msg: 'Error', errorCode: 3 })
                
                var queriedRole = '';
                if (  queryResult['roles'][0] !== null ){
                    queriedRole = queryResult['roles'][0];
                }

                // Fail
                if (!queriedRole)
                    return res.json({ success: false, msg: 'Error', errorCode: 4 });
                
                // Ok
                return res.json({ success: true, data: queriedRole });
            });
        });
    }

    // If the current model is a project
    else{

        // Get the organization which the project belongs to
        Project.findById(roleModelId, function(err, queryResult){
            
            // Project not found or error
            if (err || !queryResult)
                return res.json({ success: false, errorCode: 5 });

            // Project was found

            // The organization
            var organizationId = queryResult.organization;

            //////////////////////////
            // Role Permissions
            //////////////////////////

            // Get user's role in the organization
            UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

                // Get user's role in the project
                UserPermissions.getUserRole(req.user, Project, roleModelId, function(userRoleProj){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanReadProject(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanReadProject(userRoleProj, 'project')
                    )
                        return res.json({ success: false, errorCode: 6, msg: 'Unauthorized' });

                    // >> Authorized

                    // The role
                    var queryFilters = {
                        _id: roleModelId,
                        'roles._id': roleId
                    };

                    // Get the user roles of this model
                    Project.findOne(queryFilters, {
                        'roles.$': 1
                    })
                    .populate('roles.user')
                    .exec(function (err, queryResult) {
                        var queriedRole = '';
                        if ( queryResult['roles'][0] !== null ){
                            queriedRole = queryResult['roles'][0];
                        }

                        // Fail
                        if (err || !queriedRole)
                            return res.json({ success: false, msg: 'Error', errorCode: 7 });
                        
                        // Ok
                        return res.json({ success: true, data: queriedRole });
                    });
                });
            });
        });
    }
});

// Update
router.put('/:id/:roleModelType/:roleModelId', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.params.roleModelType == null || !req.params.roleModelType
        || req.params.roleModelId == null || !req.params.roleModelId
        || req.params.id == null || !req.params.id
        || !UserPermissions.isRoleValid(req.body.role))
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Input model data
    var roleModelType = req.params.roleModelType;
    var roleModelId = req.params.roleModelId;

    // The role id to delete
    var roleId = req.params.id;

    // If the current model is an organization
    if (roleModelType == 'org'){

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, roleModelId, function(userRole){

            // Allow superadmins
            if (isSuperAdmin){}

            // Unauthorized
            else if ( !UserPermissions.roleCanManageOrganizationRoles(userRole, 'org') )
                return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

            // >> Authorized

            // Query filters
            var queryFilters = {
                'roles._id': roleId
            };
        
            // Update the user's role
            Organization.findOneAndUpdate(queryFilters,
            {
                '$set': {
                    'roles.$.role': req.body.role
                }
            },
            function (err) {
                // Fail
                if (err)
                    return res.json({ success: false, msg: 'Error', errorCode: 3 });
                
                // Ok
                return res.json({ success: true, msg: 'Updated' });
            });
        });
    }

    // If the current model is a project
    else{

        // Get the organization which the project belongs to
        Project.findById(roleModelId, function(err, queryResult){

            // Project not found or error
            if (err || !queryResult)
                return res.json({ success: false, errorCode: 4 });

            // Project was found
            var organizationId = queryResult.organization;

            // The organization
            var organizationId = queryResult.organization;

            //////////////////////////
            // Role Permissions
            //////////////////////////

            // Get user's role in the organization
            UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

                // Get user's role in the project
                UserPermissions.getUserRole(req.user, Project, roleModelId, function(userRoleProj){

                    // Allow superadmins
                    if (isSuperAdmin){}
                        
                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanManageProjectRoles(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanManageProjectRoles(userRoleProj, 'project')
                    )
                        return res.json({ success: false, errorCode: 5, msg: 'Unauthorized' });

                    // >> Authorized

                    // The role to update
                    var queryFilters = {
                        _id: roleModelId,
                        'roles._id': roleId
                    };

                    // Additional filters for non-superadmins
                    if (!isSuperAdmin){
                        // The user sending the request cannot update their own role
                        queryFilters['roles.user'] = {$ne: req.user._id};
                    }
                
                    // Update the user's role
                    Project.findOneAndUpdate(queryFilters,
                    {
                        '$set': {
                            'roles.$.role': req.body.role
                        }
                    },
                    function (err, numAffected) {

                        // Fail
                        if (err || !numAffected)
                            return res.json({ success: false, msg: 'Error', errorCode: 6 });
                        
                        // Ok
                        return res.json({ success: true, msg: 'Updated' });
                    });

                });
            });
        });
    }
});

// Delete
// todo
router.delete('/:id/:roleModelType/:roleModelId', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input data
    if (req.params.roleModelType == null || !req.params.roleModelType
        || req.params.roleModelId == null || !req.params.roleModelId
        || req.params.id == null || !req.params.id )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Input model data
    var roleModelType = req.params.roleModelType;
    var roleModelId = req.params.roleModelId;

    // The role to delete
    var roleId = req.params.id;

    // If the current model is an organization
    if (roleModelType == 'org')
    {
        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, roleModelId, function(userRole){

            // Allow superadmins
            if (isSuperAdmin){}

            // Unauthorized
            else if ( !UserPermissions.roleCanManageOrganizationRoles(userRole, 'org') )
                return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

            // >> Authorized

            // Query filters

            // The role to delete
            var queryFilters = {
                _id: roleModelId
            };

            var roleFilters = {
                _id: roleId
            };

            if (!isSuperAdmin){
                // Cannot delete own role
                roleFilters['user'] = { $ne: req.user._id };
            }

            // Delete the role from the organization
            Organization.findOneAndUpdate(
            queryFilters,
            { $pull:
                { roles: roleFilters }
            },
            function(err, numAffected) {
                // Fail
                if (err)
                    return res.json({ success: false, msg: 'Error', errorCode: 3 });

                // Ok
                return res.json({ success: true, msg: 'Role successfully deleted' });
            });
        });
    }

    // If the current model is a project
    else{

        // Get the organization which the project belongs to
        Project.findById(roleModelId, function(err, queryResult){
            
            // Project not found or error
            if (err || !queryResult)
                return res.json({ success: false, errorCode: 5 });

            // Project was found

            // The organization
            var organizationId = queryResult.organization;

            //////////////////////////
            // Role Permissions
            //////////////////////////

            // Get user's role in the organization
            UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

                // Get user's role in the project
                UserPermissions.getUserRole(req.user, Project, roleModelId, function(userRoleProj){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanManageProjectRoles(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanManageProjectRoles(userRoleProj, 'project')
                    )
                        return res.json({ success: false, errorCode: 6, msg: 'Unauthorized' });

                    // >> Authorized

                    // Query filters

                    // The role to delete
                    var queryFilters = {
                        _id: roleModelId
                    };

                    // Additional filters for non-superadmins
                    if (!isSuperAdmin){
                        // The user sending the request cannot delete their own role
                        queryFilters['roles.user'] = {$ne: req.user._id};
                    }
                    /////////////

                    // Delete the role from the project
                    Project.findOneAndUpdate(
                    queryFilters,
                    { $pull: { roles: { '_id' : roleId } } }, // remove the role
                    function(err, numAffected) {
                        // Fail
                        if (err || !numAffected)
                            return res.json({ success: false, msg: 'Error', errorCode: 7 });

                        // Ok
                        return res.json({ success: true, msg: 'Role successfully deleted' });
                    });
                });
            });
        });
    }
});

// Add a role to a user
router.post('/:roleModelType/:roleModelId', passport.authenticate('jwt', { session: false }), function(req, res) {

    // Required input data
    if (req.params.roleModelType == null || !req.params.roleModelType
        || req.params.roleModelId == null || !req.params.roleModelId
        || !UserPermissions.isRoleValid(req.body.role)
    )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // User to add a role for
    var userId = mongoose.Types.ObjectId(req.body.user);

    // Don't allow the logged-in user to add himself a role
    if (userId == req.user._id){
        return res.json({ success: false, msg: 'Error', errorCode: 2 });
    }

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Input model
    var roleModelType = req.params.roleModelType;
    var roleModelId = req.params.roleModelId;

    // If the current model is an organization
    if (roleModelType == 'org'){

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, roleModelId, function(userRole){

            // Allow superadmins
            if (isSuperAdmin){}

            // Unauthorized
            else if ( !UserPermissions.roleCanManageOrganizationRoles(userRole, 'org') )
                return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

            // >> Authorized

            // Query filters
            // > Prevent duplicates on user id
            var queryFilters = {
                _id: roleModelId,
                'roles.user': { $ne: userId } 
            };
            
            // The user role to add
            var userRole = {
                'user': userId,
                'role': req.body.role
            };

            Organization.findOneAndUpdate(
            queryFilters,
            { $push: { roles: userRole } },
            function(err2, numAffected) {
                // Fail
                if (err2 || !numAffected)
                    return res.json({ success: false, msg: 'Error', errorCode: 3 });

                // Ok
                return res.json({ success: true, msg: 'Role successfully added' });
            });
        });
    }

    // If the current model is a project
    else{

        // Get the organization which the project belongs to
        Project.findById(roleModelId, function(err, queryResult){
            
            // Project not found or error
            if (err || !queryResult)
                return res.json({ success: false, errorCode: 4 });

            // The organization
            var organizationId = queryResult.organization;

            //////////////////////////
            // Role Permissions
            //////////////////////////

            // Get user's role in the organization
            UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

                // Get user's role in the project
                UserPermissions.getUserRole(req.user, Project, roleModelId, function(userRoleProj){

                    // Allow superadmins
                    if (isSuperAdmin){}
                        
                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanManageProjectRoles(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanManageProjectRoles(userRoleProj, 'project')
                    )
                        return res.json({ success: false, errorCode: 5, msg: 'Unauthorized' });

                    // >> Authorized

                    // Query filters
                    // > Prevent duplicates on user id
                    var queryFilters = {
                        _id: roleModelId,
                        'roles.user': { $ne: userId } 
                    };
                    
                    // The user role to add
                    var userRole = {
                        'user': userId,
                        'role': req.body.role
                    };

                    Project.findOneAndUpdate(
                    queryFilters,
                    { $push: { roles: userRole } },
                    function(err2, numAffected) {
                        // Fail
                        if (err2 || !numAffected)
                            return res.json({ success: false, msg: 'Error', errorCode: 6 });

                        // Ok
                        return res.json({ success: true, msg: 'Role successfully added' });
                    });
                });
            });
        });
    }
});

module.exports = router;