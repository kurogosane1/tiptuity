const { Sequelize } = require("sequelize");
// TODO: Once there is a host server connection then you can use the sequelize store below for storing the connection service below
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const sequelize = new Sequelize(
  //   This is when working in development environment
  // process.env.DATABASE_NAME,
  // process.env.USERNAME,
  // process.env.PASSWORD,
  // { host: "localhost", dialect: "mysql", logging: false }
  process.env.DB_HOST
);

sequelize.sync({ logging: true });
module.exports = sequelize;
