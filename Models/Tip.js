const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize");
const Clients = require("./Client");
const Employee = require("./Employee");
const Sample = require("../Datasamples/Tip_Samples");

const Tip = sequelize.define("Tip", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  emp_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  tip_amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  tip_date: {
    type: DataTypes.STRING,
    defaultValue: Date.now(),
  },
});

Tip.sync();

Tip.belongsTo(Clients, { foreignKey: { name: "client_id" } });
Tip.belongsTo(Employee, { foreignKey: { name: "emp_id" } });

module.exports = Tip;
