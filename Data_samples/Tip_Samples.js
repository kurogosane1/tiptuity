const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const faker = require("faker");
const Tip = require("../Models/Tip")

const Data = async () => {
  let Sample = [];
  //Getting the employee data
  const Emp = await Employee.findAll();
//   console.log(`This is Emp ${Emp[0].id}`);
  //Getting the Client data
  const Cl = await Clients.findAll();

  for (let i = 0; i < Emp.length; i++) {
    let client_id = Cl[i].id;
    let emp_id = Emp[i].id;
    let tip_amount = parseFloat(faker.finance.amount());

    Sample.push({
      client_id,
      emp_id,
      tip_amount,
    });
  }
  
  return Sample;
};
// console.log(Data());
const tip_sample = Data();
module.exports = tip_sample;
