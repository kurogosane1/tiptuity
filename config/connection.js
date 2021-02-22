const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  { host: "localhost", dialect: "mysql", logging: false }
);

sequelize.sync({ logging: false });

module.exports = sequelize;
