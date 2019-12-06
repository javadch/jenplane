var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
var passport = require('passport');
require('../../../config/passport')(passport);

var User = require('../../../models/User');
var Project = require('../../../models/Project.js');
var Organization = require('../../../models/Organization.js');

// Utils functions
const utils = require('../../../_helpers/utils');

// User permissions class
let _userPermissions = require('../../../_helpers/user-permissions');
let userPermissionsClass = _userPermissions.UserPermissions;
let UserPermissions = new userPermissionsClass();

//////////////////////////////

// Find all projects of an organization
router.get('/org/:orgId', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input
    if (req.params.orgId === undefined || !req.params.orgId)
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // User issuing the request
    var userId = req.user._id;

    // The organization
    var organizationId = mongoose.Types.ObjectId(req.params.orgId);

    // Query for all users except superadmins
    if (!isSuperAdmin)
    {
        // The query
        Project.aggregate([
        {
            $lookup: {
                from: 'organizations',
                localField: 'organization',
                foreignField: '_id',
                as: 'organizationData'
            }
        },
        {
            $match: {
                $and: [
                    { organization: organizationId },  
                    {
                        $or: [
                            {
                                'roles.user': userId
                            },
                            {
                                'organizationData.roles.user': userId
                            }
                        ]
                    }
                ]
            }
        }
        ])
        .exec(function(err, queryResult){

            // No results or error
            if (err)
                return res.json({ success: false, msg: 'Error', errorCode: 2 });

            // Ok
            return res.json({ success: true, data: queryResult });
        });

    }
    else{
        // Superadmins can see all projects of the queried organization

        // The query
        Project.find({
            organization: organizationId
        })
        .populate('organization')
        .exec(function(err, queryResult){

            // No results or error
            if (err || !queryResult.length)
                return res.json({ success: false, msg: 'Error', errorCode: 2 })

            // Ok
            return res.json({ success: true, data: queryResult });
        });

    }
});

// Find one
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input data
    if ( req.params.id === undefined || !req.params.id )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // The project to get
    var projectId = req.params.id;

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the project
    Project.findById(projectId)
    .populate('organization')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the organization which the project is assigned to
        var organizationId = queryResult.organization._id;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){

                // Allow superadmins
                if (isSuperAdmin){}

                // Unauthorized
                else if (
                    !UserPermissions.roleCanReadProject(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanReadProject(userRoleProj, 'project')
                )
                return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                return res.json({ success: true, data: queryResult });
            });
        });
    });
});

// Create
router.post('/org/:orgId', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.body.shortname === undefined || !req.body.shortname
        || req.body.fullname === undefined || !req.body.fullname
        || req.params.orgId === undefined || !req.params.orgId
        )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Organization to assign the project to
    var organizationId = mongoose.Types.ObjectId(req.params.orgId);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    //////////////////////////
    // Role Permissions
    //////////////////////////

    // Get user's role
    UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){

        // Allow superadmins
        if (isSuperAdmin){}

        // Unauthorized
        else if ( !UserPermissions.roleCanEditOrganization(userRoleOrg, 'org') )
           return res.json({ success: false, errorCode: 2, msg: 'Unauthorized' });

        // >> Authorized

        // Save project

        // The new project data
        var newProject = new Project ({
            shortname: req.body.shortname,
            fullname: req.body.fullname,
            organization: organizationId,
            description: req.body.description
        });

        // If the user is not a superadmin, give them a role in the project
        if ( !isSuperAdmin ){
            newProject['roles'] = [
            {
                user: req.user._id,
                role: UserPermissions.defaultRoleAfterCreating()
            }
            ];
        }

        // Save query
        newProject.save(function (err, post) {
            // Fail
            if (err){
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
});

// Update
router.put('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.body.shortname === undefined || !req.body.shortname
        || req.body.fullname === undefined || !req.body.fullname
        || req.params.id === undefined || !req.params.id
        )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Project to update
    var projectId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the project
    Project.findById(projectId)
    .populate('organization')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the organization which the project is assigned to
        var organizationId = queryResult.organization._id;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){

                // Allow superadmins
                if (isSuperAdmin){}

                // Unauthorized
                else if (
                    !UserPermissions.roleCanEditProject(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanEditProject(userRoleProj, 'project')
                )
                    return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                // Update project

                // The new project data
                var newData = {
                    shortname: req.body.shortname,
                    fullname: req.body.fullname,
                    description: req.body.description
                };

                // Update query
                Project.findByIdAndUpdate(
                    projectId,
                    newData,
                    function(err, numAffected){
                    // Fail
                    if (err)
                        return res.json({
                            success: false,
                            errorCode: 4,
                            error: {
                                'code': err['code'],
                                'field': err['keyValue']
                            }
                        });
                
                    // Ok
                    return res.json({ success: true, msg: 'Updated' });
                });
            });
        });
    });
});

// Delete
router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input data
    if ( req.params.id === undefined || !req.params.id )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Project to delete
    var projectId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Validate the project
    Project.findById(projectId)
    .populate('organization')
    .exec(function (err, queryProject) {

        // Not found or error
        if (err || !queryProject)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Project is valid
        
        // Get the organization which the project is assigned to
        var organizationId = queryProject.organization._id;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){

                // Allow superadmins
                if (isSuperAdmin){}

                // Unauthorized
                else if (
                    !UserPermissions.roleCanDeleteLockProject(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanDeleteLockProject(userRoleProj, 'project')
                )
                return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                // Delete the project
                Project.findByIdAndRemove(projectId, function (err) {
                    // Fail
                    if (err)
                        return res.json({ success: false, msg: 'Error', errorCode: 4 });
                    
                    // Ok
                    return res.json({ success: true, msg: 'Deleted' });
                });
            });
        });
    });
});

// Lock a project
router.get('/:id/lock', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.params.id === undefined || !req.params.id)
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Project to update
    var projectId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the project
    Project.findById(projectId)
    .populate('organization')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the organization which the project is assigned to
        var organizationId = queryResult.organization._id;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){

                // Allow superadmins
                if (isSuperAdmin){}

                // Unauthorized
                else if (
                    !UserPermissions.roleCanDeleteLockProject(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanDeleteLockProject(userRoleProj, 'project')
                )
                    return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                // Lock
                var newData = {
                    locked: true
                };

                // Update query
                Project.findByIdAndUpdate(
                    projectId,
                    newData,
                    function(err, numAffected){
                    // Fail
                    if (err)
                        return res.json({
                            success: false,
                            errorCode: 4,
                            error: {
                                'code': err['code'],
                                'field': err['keyValue']
                            }
                        });
                
                    // Ok
                    return res.json({ success: true, msg: 'Locked' });
                });
            });
        });
    });
});

// UnLock a project
router.get('/:id/unlock', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.params.id === undefined || !req.params.id)
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Project to update
    var projectId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the project
    Project.findById(projectId)
    .populate('organization')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the organization which the project is assigned to
        var organizationId = queryResult.organization._id;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){

                // Allow superadmins
                if (isSuperAdmin){}

                // Unauthorized
                else if (
                    !UserPermissions.roleCanDeleteLockProject(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanDeleteLockProject(userRoleProj, 'project')
                )
                    return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                // Unlock
                var newData = {
                    locked: false
                };

                // Update query
                Project.findByIdAndUpdate(
                    projectId,
                    newData,
                    function(err, numAffected){
                    // Fail
                    if (err)
                        return res.json({
                            success: false,
                            errorCode: 4,
                            error: {
                                'code': err['code'],
                                'field': err['keyValue']
                            }
                        });
                
                    // Ok
                    return res.json({ success: true, msg: 'Unlocked' });
                });
            });
        });
    });
});

module.exports = router;    