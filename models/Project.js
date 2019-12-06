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

var ProjectSchema = new mongoose.Schema({
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
    description: {
        type: String,
        maxlength: 500
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    },
    roles: [UserRoleSchema]
},
{
    collection: "projects"
});
ProjectSchema.index({ shortname: 1, fullname: 1 }, { unique: true});

module.exports = mongoose.model('Project', ProjectSchema);    