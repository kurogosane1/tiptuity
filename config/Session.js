const session = require("express-session");
// const options = require("./MySQLSession");
const MySQLStore = require("express-mysql-session")(session);
require("dotenv").config();

const options = {
  host: process.env.DB_HOST,
  // port: 3306,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  // process.env.DB_HOST
};

const sessionStore = new MySQLStore(options);
//below if connecting to heroku
// const sessionStore = new MySQLStore(process.env.DB_HOST);

module.exports = session({
  store: sessionStore,
  key: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: true,
    secure: false,
  },
});
