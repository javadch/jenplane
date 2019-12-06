/*
	Get the user fields shown in the profile
*/
const getUserFieldsProfile = function(){
	var fields = [
		'firstname',
		'lastname',
		'email',
		'password'
	];

	var result = '';
	fields.forEach(element => result += element + ' ');

	return result;
};

/*
	Get the user fields
*/
const getUserFieldsList = function(){
	var fields = [
		'firstname',
		'lastname',
		'email',
		'blocked',
		'approved'
	];

	var result = '';
	fields.forEach(element => result += element + ' ');

	return result;
};

/*
	Check if a user is a superadmin
	
	Parameters:
		user: the user object to check
*/
const isSuperAdmin = function(user){
	return (user.superadmin !== null && user.superadmin == true) ? true : false;
};

// Export
module.exports = {
	isSuperAdmin: isSuperAdmin,
	getUserFieldsProfile: getUserFieldsProfile,
	getUserFieldsList: getUserFieldsList
};