const { Sequelize } = require("sequelize");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const sequelize = new Sequelize(
  //This is when working in development environment
  // process.env.DATABASE_NAME,
  // process.env.USERNAME,
  // process.env.PASSWORD,
  // { host: "localhost", dialect: "mysql", logging: false }
  process.env.DB_HOST,
  // { dialect: "mysql" }
);

sequelize.sync({ logging: false });
module.exports = sequelize;
