const LocalStrategy = require("passport-local").Strategy;
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

module.exports = (passport) => {
  //serialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // deserializeUser
  passport.deserializeUser((user, done) => {
    User.findOne({ where: { id: user } }).then((user) => {
      if (user) {
        console.log(`Ran at the deserial section ${user.get()}`);
        return done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  //For Authentication Purpose
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        User.findOne({ where: { email } })
          .then((resp) => {
            if (resp.password) {
              bcrypt.compare(password, resp.password, async (err, result) => {
                if (err) {
                  console.log(
                    "This ran inside the error of passwords not matching"
                  );
                  return done(null, false, {
                    message: "Passwords are Incorrect",
                  });
                }
                if (result === true) {
                  console.log(`This is coming from bcrypt side ${resp.email}`);

                  return done(null, resp, req);
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
            return done(null, err);
          });
      }
    )
  );
};
