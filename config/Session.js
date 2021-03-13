const session = require("express-session");
const options = require("./MySQLSession");
const MySQLStore = require("express-mysql-session")(session);
require("dotenv").config();

const sessionStore = MySQLStore(options);

module.exports = session({
  store: sessionStore,
  key: "session",
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: true,
    secure: false,
  },
});
