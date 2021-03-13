const sequelize = require("../Config/Connection");
const bcrypt = require("bcryptjs");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

const Salt = bcrypt.genSaltSync(10);
const hashPassword = bcrypt.hashSync("password", Salt);

User.sync({ logging: false, force: true })
  .then(() => {
    User.bulkCreate({
      email: "jdoe@email.com",
      password: hashPassword,
    });
  })
  .catch((err) => err.message);

module.exports = User;
