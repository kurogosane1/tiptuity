const Clients = require("../models/Client");
const Employee = require("../models/Employee");
const faker = require("faker");

const Data = async () => {
  let Sample = [];
  //Getting the employee data
  const Emp = await Employee.findAll().catch((err) =>
    console.log(`This is when trying to find Employee in Sample ${err}`)
  );
  //   console.log(`This is Emp ${Emp[0].id}`);
  //Getting the Client data
  const Cl = await Clients.findAll();

  for (let i = 0; i < Emp.length; i++) {
    let client_id = Cl[i].id;
    let emp_id = Emp[i].id;
    let tip_amount = parseFloat(faker.finance.amount());
    let tip_date = faker.date.between("2019-01-01", "2021-07-15");
    Sample.push({
      client_id,
      emp_id,
      tip_amount,
      tip_date,
    });
  }
  return Sample;
};

const tip_sample = Data();

module.exports = tip_sample;
