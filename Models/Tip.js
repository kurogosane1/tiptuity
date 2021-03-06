const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize");
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Sample = require("../Data_samples/Tip_Samples");

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
    // allowNull: false,
    defaultValue: 0,
  },
});

// const Sample = Data();
// const check = Sample.then((Data) => Data);
Tip.sync();

Tip.belongsTo(Clients, { foreignKey: { name: "client_id" } });
Tip.belongsTo(Employee, { foreignKey: { name: "emp_id" } });
// Employee.hasMany(Tip);

module.exports = Tip;
