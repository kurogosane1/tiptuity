const sequelize = require("../Config/Connection");
const { DataTypes } = require("sequelize");

const qrcode = sequelize.define("QR", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  QRcode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

qrcode.sync();

module.exports = qrcode;
