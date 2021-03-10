const sequelize = require("../Config/Connection");
const { DataTypes } = require("sequelize");
const Samples = require("../Data_samples/Client_sample");

const Clients = sequelize.define("Clients", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  businessname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  businessAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  businessImage: {
    type: DataTypes.STRING,
  },
});

Clients.sync({ force: true, logging: false }).then(() => {
  Clients.bulkCreate(Samples);
});

module.exports = Clients;
