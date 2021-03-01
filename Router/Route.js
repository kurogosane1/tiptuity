// const express = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const qrcode = require("../Models/EmpQr");
const { GetAll, AddClient, DeleteClient } = require("../Controller/Main");
const tip_sample = require("../Data_samples/Tip_Samples");
const { response } = require("express");

//General Route
router.route("/").get(GetAll);
router
  .route("/post")
  .post(async (req, res) => {
    const samples = await tip_sample.then((data) => data);
    const data = await Tip.bulkCreate(samples, { returning: true });
    res.json(data);
  })
  .get(async (req, res) => {
    const samples = await tip_sample.then((data) => data);
    const result = await Tip.bulkCreate(samples, { returning: true });
    res.json(result);
  });

//Adding and getting employees
router.route("/AddEmployee").post(async (req, res) => {
  const { firstname, lastname, streetaddress, email, isAdmin } = req.body;

  console.log(req.body);

  //Check if they are actually already registered
  const Check = await Employee.findAll({
    where: { firstname, lastname, streetaddress, email },
  });
  console.log(Check);
  if (Check.length === 0) {
    const Person = await Employee.create({
      firstname,
      lastname,
      streetaddress,
      email,
      isAdmin,
    });

    res.json({
      message: "Successfully added user",
      data: Person,
      id: Person,
    });
  } else {
    res.json({ message: "Employee already exists" });
  }
});

router.route("/Client").delete(DeleteClient).post(AddClient);

module.exports = router;


// const Sorted = () => {
//   let Employees = tipped.map((data) => {
//     //get out all the variables
//     const { id, client_id, emp_id, tip_amount, createdAt } = data;
//     //Get the employee data
//     const Emp_data = employee
//       .filter((info) => info.id === emp_id)
//       .map((data) => data);
//     //Destructure employee data
//     const {
//       firstname,
//       lastname,
//       streetaddress,
//       email,
//       isAdmin,
//       image,
//     } = Emp_data;

//     const Client_info = client
//       .filter((info) => info.id === client_id)
//       .map((data) => {
//         return {
//           name: data.businessname,
//           address: data.businessAddress,
//           Bus_image: data.businessImage,
//         };
//       });

//     const tip_id = id;
//     const Client_id = client_id;
//     const ids = emp_id;
//     const tip = tip_amount;
//     const date = createdAt;
//     const Client = Client_info[0].name;
//     const Client_Address = Client_info[0].address;
//     const Client_Img = Client_info[0].Bus_image;

//     return {
//       ids,
//       firstname,
//       lastname,
//       streetaddress,
//       email,
//       isAdmin,
//       image,
//       tip_id,
//       Client_id,
//       tip,
//       date,
//       Client,
//       Client_Address,
//       Client_Img,
//     };
//   });
//   //Sort the data by largest tips
//   const LargestClient = Employees.sort((a, b) => b.tip - a.tip);
//   //Get the Client information along with tips
//   setEmployee([...LargestClient]);
// };