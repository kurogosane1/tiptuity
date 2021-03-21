const session = require("express-session");
// // const options = require("./MySQLSession");
// const MySQLStore = require("express-mysql-session")(session);
const sequelize = require("./connection");
// // const mysql = require("mysql2");
// const { Sequelize } = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

// const options = {
//   host: process.env.DB_HOST,
//   // port: 3306,
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE_NAME,
// process.env.DB_HOST
// };

// const connection = mysql.createConnection(process.env.DB_HOST);

// const sessionStore = new MySQLStore(connection);
//below if connecting to heroku
// const sessionStore = new MySQLStore(process.env.DB_HOST);
console.log(process.env.DB_HOST);
// const sequelize = new Sequelize(process.env.DB_HOST, { dialect: "mysql" });
const myStore = new SequelizeStore({ db: sequelize });

module.exports = session({
  store: myStore,
  key: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  proxy: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: true,
    secure: false,
  },
});

myStore.sync();
