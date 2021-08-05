const passport = require("passport");
const Users = require("../Models/User");

// Different Strategies
const SignupStrategy = require("./Signupstrategy");
const Signinstrategy = require("./Signinstrategy");

passport.use("local-signup", SignupStrategy);
passport.use("local-signin", Signinstrategy);

// Importing passport package

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  Users.findOne({ where: { id } })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done({ message: "No user" }, null);
    })
    .catch((err) => {
      done(err, null);
    });
});

module.exports = passport;
