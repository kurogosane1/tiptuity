const LocalStrategy = require("passport-local");
const Users = require("../models/User");
const bcrypt = require("bcryptjs");

const Signupstrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    // Check if the email is in database
    Users.findOne({ where: { email: username } })
      .then((user) => {
        if (user.password) {
          bcrypt.compare(password, user.password, async (err, result) => {
            if (err) {
              return done(null, false, {
                message: "Passwords are Incorrect",
              });
            }
            if (result === true) {
              return done(null, user.id);
            }
            if (result === false) {
              return done(null, false, {
                message: "Password is incorrect",
              });
            }
          });
        } else {
          return done(null, false, { message: "No User Exists" });
        }
      })
      .catch((err) => {
        err.message;
        return done({ message: "No User Found" }, null);
      });
  }
);

module.exports = Signupstrategy;
