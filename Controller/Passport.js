const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../Models/User");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//Local Strategy

