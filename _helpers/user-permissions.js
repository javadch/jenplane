var Organization = require('../models/Organization.js');
var Project = require('../models/Project.js');
var User = require('../models/User.js');

function UserPermissions() {

	// Roles as variables
	this.roleAdmin = 'admin';
	this.roleContributor = 'contributor';
	this.roleMember = 'member';

	// Roles in a list
    this.roles = [
    	this.roleAdmin,
    	this.roleContributor,
    	this.roleMember
    ];
}
/*
	The default role assigned to users when creating anything (project or resource)
*/
UserPermissions.prototype.defaultRoleAfterCreating = function(){
	return this.roleAdmin;
}

/*
	Check if a user role can read an organization.
*/
UserPermissions.prototype.roleCanReadOrganization = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Any role in the organization can read it
	if (roleForModel == 'org'){
		if (role != '')
			result = true;
	}

	return result;
};

/*
	Check if a user role can edit an organization.
*/
UserPermissions.prototype.roleCanEditOrganization = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins and contributors of the organization can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin || role == this.roleContributor)
			result = true;
	}

	return result;
};

/*
	Check if a user role can add users to an organization.
*/
UserPermissions.prototype.roleCanManageOrganizationRoles = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of the organization containing this project can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can delete/lock an organization.
*/
UserPermissions.prototype.roleCanDeleteLockOrganization = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of the organization can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can read a project.
*/
UserPermissions.prototype.roleCanReadProject = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Any role in the project can read it
	if (roleForModel == 'project'){
		if (role != '')
			result = true;
	}

	// Any role in the organization containing the project can read it
	if (roleForModel == 'org'){
		if (role != '')
			result = true;
	}

	return result;
};

/*
	Check if a user role can edit a project.
*/
UserPermissions.prototype.roleCanEditProject = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins and contributors of the project can edit it
	if (roleForModel == 'project'){
		if (role == this.roleAdmin || role == this.roleContributor)
			result = true;
	}

	// Admins of the organization containing this project can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can add users to a project.
*/
UserPermissions.prototype.roleCanManageProjectRoles = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of the project can manage its roles
	if (roleForModel == 'project'){
		if (role == this.roleAdmin)
			result = true;
	}

	// Admins of the organization containing this project can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can delete/lock a project.
*/
UserPermissions.prototype.roleCanDeleteLockProject = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of the project can delete it
	if (roleForModel == 'project'){
		if (role == this.roleAdmin)
			result = true;
	}

	// Admins of the organization containing this project can delete it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can delete/lock a resource.
*/
UserPermissions.prototype.roleCanDeleteLockResource = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of this resource can delete it
	// if (roleForModel == 'resource'){
	// 	if (role == this.roleAdmin)
	// 		result = true;
	// }

	// Admins of the project containing this resource can delete it
	if (roleForModel == 'project'){
		if (role == this.roleAdmin || role == this.roleContributor)
			result = true;
	}

	// Admins of the organization of the project containing this resource can delete it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can add users to a resource.
*/
UserPermissions.prototype.roleCanManageResourceRoles = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins of this resource can assign roles to it
	if (roleForModel == 'resource'){
		if (role == this.roleAdmin)
			result = true;
	}

	// Admins of the project containing this resource can assign roles to it
	if (roleForModel == 'project'){
		if (role == this.roleAdmin)
			result = true;
	}

	// Admins of the organization of the project containing this resource can assign roles to it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can edit a resource.
*/
UserPermissions.prototype.roleCanEditResource = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// // Admins or contributors of this resource can edit it
	// if (roleForModel == 'resource'){
	// 	if (role == this.roleAdmin || role == this.roleContributor)
	// 		result = true;
	// }

	// Admins or contributors of the project containing this resource can edit it
	if (roleForModel == 'project'){
		if (role == this.roleAdmin || role == this.roleContributor)
			result = true;
	}

	// Admins of the organization of the project containing this resource can edit it
	if (roleForModel == 'org'){
		if (role == this.roleAdmin)
			result = true;
	}

	return result;
};

/*
	Check if a user role can read a resource.
*/
UserPermissions.prototype.roleCanReadResource = function(role, roleForModel){
    if (role == null) return false;
	var result = false;

	// Admins or contributors of this resource can read it
	// if (roleForModel == 'resource'){
	// 	if (role != '') // If the user has any role in this resource
	// 		result = true;
	// }

	// Admins of the project containing this resource can read it
	if (roleForModel == 'project'){
		if (role != '') // If the user has any role in this resource
			result = true;
	}

	// Admins of the organization of the project containing this resource can read it
	if (roleForModel == 'org'){
		if (role != '') // If the user has any role in this resource
			result = true;
	}

	return result;
};

/*
	Check if a role is allowed
	
	Parameters:
		role:
			the user role to check (ex: 'member')
*/
UserPermissions.prototype.isRoleValid = function(role){
	// Role is valid
	if (role != null && this.roles.includes(role))
		return true;

	// Not valid
	return false;
};


// Get the user's role for this model
UserPermissions.prototype.getUserRole = function(user, Model, modelId, callback){
	// Required fields
	if (user._id == null || Model == null || modelId == null || !modelId)
		return callback(null);

	// User validation filters
    var queryFilters = {
        _id: user._id,
        approved: true,
        blocked: false
    }

    // Find the user
    User.findOne(queryFilters, function(err1, queryResult1) {

    	// User not found or error
        if (err1 || !queryResult1) return callback(null);

        // User found
	    // Check user permissions
	    Model.findOne({
	    	_id: modelId,
	        'roles.user': user._id
	    },
	    {
	    	'roles.$': 1
	    },
	    function(err2, queryResult2){
	    	// Not allowed or error
            if (err2 || !queryResult2 || queryResult2['roles'] === undefined)
            	return callback(null);
			
            // Get the user's role
			var queriedRole = null;
            if ( queryResult2['roles'][0] !== undefined && queryResult2['roles'][0]['role'] !== undefined){
                queriedRole = queryResult2['roles'][0]['role'];
            }

	    	// User is allowed access
			return callback(queriedRole);
	    });
    });
}

// Export
module.exports = {
    UserPermissions: UserPermissions
}