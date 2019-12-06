var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
var passport = require('passport');
require('../../../config/passport')(passport);

var User = require('../../../models/User');
var Project = require('../../../models/Project.js');
var Resource = require('../../../models/Resource.js');
var Organization = require('../../../models/Organization.js');

// Utils functions
const utils = require('../../../_helpers/utils');

// User permissions class
let _userPermissions = require('../../../_helpers/user-permissions');
let userPermissionsClass = _userPermissions.UserPermissions;
let UserPermissions = new userPermissionsClass();

//////////////////////////////

// Find all resources of an project
router.get('/project/:projectId', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
    // Required input
    if (req.params.projectId === undefined || !req.params.projectId)
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // User issuing the request
    var userId = req.user._id;

    // The project
    var projectId = mongoose.Types.ObjectId(req.params.projectId);

    // Query for all users except superadmins
    if (!isSuperAdmin)
    {
        // The query
        Resource.aggregate([
        {
            $lookup: {
                from: 'projects',
                localField: 'project',
                foreignField: '_id',
                as: 'projectData'
            }
        },
        {
            $match: {
                $and: [
                    { project: projectId },  
                    {
                        $or: [
                            {
                                'roles.user': userId
                            },
                            {
                                'projectData.roles.user': userId
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
        // Superadmins can see all resources of the queried project

        // The query
        Resource.find({
            project: projectId
        })
        .populate('project')
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

    // The resource to get
    var resourceId = req.params.id;

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the resource
    Resource.findById(resourceId)
    .populate('project')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the project which the resource is assigned to
        var projectId = queryResult.project._id;

        // Get the organization which the resource's project is assigned to
        var organizationId = queryResult.project.Organization;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){
                UserPermissions.getUserRole(req.user, Resource, resourceId, function(userRoleResource){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanReadResource(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanReadResource(userRoleProj, 'project')
                        &&
                        !UserPermissions.roleCanReadResource(userRoleResource, 'resource')
                    )
                        return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                    // >> Authorized
                    return res.json({ success: true, data: queryResult });
                });
            });
        });
    });
});

// Create
router.post('/project/:projectId', passport.authenticate('jwt', { session: false }), function(req, res, next) {

    // Required input data
    if (req.body.shortname === undefined || !req.body.shortname
        || req.body.fullname === undefined || !req.body.fullname
        || req.params.projectId === undefined || !req.params.projectId
        )
        return res.json({ success: false, msg: 'Missing required fields', errorCode: 1 });

    // Project to assign the resource to
    var projectId = mongoose.Types.ObjectId(req.params.projectId);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the organization that the project is assigned to
    Project.findById(projectId, function(err, queryResult){

        // Project not found
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 })

        // The organization that the project is assigned to
        var organizationId = queryResult.organization;

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
                    !UserPermissions.roleCanEditResource(userRoleOrg, 'org')
                    &&
                    !UserPermissions.roleCanEditResource(userRoleProj, 'project')
                )
                   return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                // >> Authorized

                // Save resource

                // The new resource data
                var newResource = new Resource ({
                    shortname: req.body.shortname,
                    fullname: req.body.fullname,
                    project: projectId,
                    description: req.body.description
                });

                // If the user is not a superadmin, give them a role in the resource
                if ( !isSuperAdmin ){
                    newResource['roles'] = [
                    {
                        user: req.user._id,
                        role: UserPermissions.defaultRoleAfterCreating()
                    }
                    ];
                }

                // Save query
                newResource.save(function (err, post) {
                    // Fail
                    if (err){
                        return res.json({
                            success: false,
                            errorCode: 4,
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

    // Resource to update
    var resourceId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Find the resource
    Resource.findById(resourceId)
    .populate('project')
    .exec(function (err, queryResult) {
        // Error or no results
        if (err || !queryResult)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Get the project which the resource is assigned to
        var projectId = queryResult.project._id;

        // Get the organization which the project is assigned to
        var organizationId = queryResult.project.organization;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){
                UserPermissions.getUserRole(req.user, Resource, resourceId, function(userRoleResource){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanEditResource(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanEditResource(userRoleProj, 'project')
                        &&
                        !UserPermissions.roleCanEditResource(userRoleResource, 'resource')
                    )
                        return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                    // >> Authorized

                    // Update resource

                    // The new resource data
                    var newData = {
                        shortname: req.body.shortname,
                        fullname: req.body.fullname,
                        description: req.body.description
                    };

                    // Update query
                    Resource.findByIdAndUpdate(
                        resourceId,
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
});

// Delete
router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    // Required input data
    if ( req.params.id === undefined || !req.params.id )
        return res.json({ success: false, msg: 'Error', errorCode: 1 });

    // Resource to delete
    var resourceId = mongoose.Types.ObjectId(req.params.id);

    // Superadmin check
    var isSuperAdmin = utils.isSuperAdmin(req.user);

    // Validate the resource
    Resource.findById(resourceId)
    .populate('project')
    .exec(function (err, queryResource) {

        // Not found or error
        if (err || !queryResource)
            return res.json({ success: false, msg: 'Error', errorCode: 2 });

        // Resource is valid
        
        // Get the project which the resource is assigned to
        var projectId = queryResource.project._id;

        // Get the organization which the project is assigned to
        var organizationId = queryResource.project.organization;

        //////////////////////////
        // Role Permissions
        //////////////////////////

        // Get user's role
        UserPermissions.getUserRole(req.user, Organization, organizationId, function(userRoleOrg){
            UserPermissions.getUserRole(req.user, Project, projectId, function(userRoleProj){
                UserPermissions.getUserRole(req.user, Resource, resourceId, function(userRoleResource){

                    // Allow superadmins
                    if (isSuperAdmin){}

                    // Unauthorized
                    else if (
                        !UserPermissions.roleCanDeleteLockResource(userRoleOrg, 'org')
                        &&
                        !UserPermissions.roleCanDeleteLockResource(userRoleProj, 'project')
                        &&
                        !UserPermissions.roleCanDeleteLockResource(userRoleResource, 'resource')
                    )
                    return res.json({ success: false, errorCode: 3, msg: 'Unauthorized' });

                    // >> Authorized

                    // Delete the resource
                    Resource.findByIdAndRemove(resourceId, function (err) {
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
});

module.exports = router;    