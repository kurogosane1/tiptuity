const session = require("express-session");
const sequelize = require("./connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const myStore = new SequelizeStore({ db: sequelize });

module.exports = myStore;
