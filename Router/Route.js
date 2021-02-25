// const express = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const qrcode = require("../Models/EmpQr");
const { GetAll } = require("../Controller/Main");
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
    }).then((data) => data.id);
    const Employees = await Employee.findAll();

    res.json({
      message: "Successfully added user",
      data: Employees,
      id: Person,
    });
  } else {
    res.json({ message: "Employee already exists" });
  }
});

router.route("/QRcodeCreate").post(async (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  console.log(req.body.id);
  const { id, QR } = req.body;

  const test = await qrcode.findAll();
  const result = await qrcode.create(
    {
      emp_id: id,
      QRcode: QR,
    },

    { response: true }
  );
  console.log(result);
  res.json({ message: result });
});

module.exports = router;
