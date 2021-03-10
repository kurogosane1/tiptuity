const sequelize = require("../Config/Connection");
const { DataTypes } = require("sequelize");
// const Tip = require("./Tip");
//import sample to process
const Sample = require("../Data_samples/Employee");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  streetaddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const sample = Sample();

Employee.sync({ force: true, logging: false })
  .then(() => {
    Employee.bulkCreate(sample);
  })
  .catch((err) => err.message);

module.exports = Employee;
