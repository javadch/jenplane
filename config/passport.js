var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../models/User');
var config = require('../config/database');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload['_id'], function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user != null) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};