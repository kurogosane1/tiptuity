const {sequelize} = require("../config/connection");
const { DataTypes } = require("sequelize");
const Employee = require("./Employee");

const qrcode = sequelize.define("QR", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  QRcode: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  emp_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

qrcode.sync();
qrcode.belongsTo(Employee, { foreignKey: { name: "emp_id" } });
module.exports = qrcode;
