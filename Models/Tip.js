const sequelize = require("../Config/Connection");
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
    allowNull: false,
  },
});

const check = Sample.then((Data) => Data);
Tip.sync().then(() => {
  Tip.bulkCreate(check);
});
Tip.belongsTo(Clients, { foreignKey: { name: "client_id" } });
Tip.belongsTo(Employee, { foreignKey: { name: "emp_id" } });

module.exports = Tip;
