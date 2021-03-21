const { Sequelize } = require("sequelize");
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const sequelize = new Sequelize(
  //This is when working in development environment
  // process.env.DATABASE_NAME,
  // process.env.USERNAME,
  // process.env.PASSWORD,
  // { host: "localhost", dialect: "mysql", logging: false }
  process.env.DB_HOST,
  { dialect: "mysql" }
);

console.log(sequelize);
sequelize.sync({ logging: false });

module.exports = sequelize;
module.exports = session({
  store: new SequelizeStore({
    db: sequelize,
  }),
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
