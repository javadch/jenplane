var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        maxlength: 16
    },
    firstname: {
        type: String,
        maxlength: 256
    },
    lastname: {
        type: String,
        maxlength: 256
    },
    approved: {
        type: Boolean,
        default: false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    superadmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.index({ email: 1 }, { unique: true});

// Pre-hook when adding a new user
// Hashes the user's password
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
        } else {
        return next();
    }
});

// Pre-hook when updating a user's password
// Hashes the user's password
UserSchema.pre('findOneAndUpdate', function (next) {
    var user = this;
    var fieldValuesToUpdate = this.getUpdate();

    if (fieldValuesToUpdate.password !== undefined && fieldValuesToUpdate.password != "") {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(fieldValuesToUpdate.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                fieldValuesToUpdate.password = hash;
                next();
            });
        });
        } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
