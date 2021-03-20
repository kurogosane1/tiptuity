const { Sequelize } = require("sequelize");
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
