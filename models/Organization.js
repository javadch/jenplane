var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserRoleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    role: {
        type: String
    }
});

var OrganizationSchema = new Schema(
{
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        maxlength: 256
    },
    shortname: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        maxlength: 20
    },
    fullname: {
        type: String,
        unique: true,
        required: true,
        maxlength: 256
    },
    locked:  {
        type: Boolean,
        default: false,
    },
    address: {
        type: String,
        maxlength: 500
    },
    country: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 500
    },
    phone: {
        type: String,
        maxlength: 50
    },
    roles: [UserRoleSchema]
},
{
    collection: "organizations"
}
);
OrganizationSchema.index({ shortname: 1, fullname: 1, email: 1 }, { unique: true});

module.exports = mongoose.model('Organization', OrganizationSchema);