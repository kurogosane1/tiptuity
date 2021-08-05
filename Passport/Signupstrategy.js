const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const Users = require("../models/User");

const LoginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    Users.findOne({ where: { email: username } })
      .then((user) => {
        if (user) {
          return done({ message: "User Found" }, null);
        }

        // Hash Password for Security reasons
        let hashPassword = bcrypt.hashSync(password, salt);

        // Create user object for creation
        let newUser = {
          email: req.body.email,
          password: hashPassword,
          isAdmin: false,
        };

        // Create new user
        Users.create(newUser)
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err.message, null);
          });
      })
      .catch((err) => {
        return done({ message: "User not found" }, null);
      });
  }
);

module.exports = LoginStrategy;
