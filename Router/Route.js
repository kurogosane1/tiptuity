// const express = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const qrcode = require("../Models/EmpQr");
const {
  GetAll,
  AddClient,
  DeleteClient,
  AddEmp,
  FindClient,
  UpdateIndClient,
  GetTipEmpCli,
  GetEmployeeInfo,
  GetEmp_Tip,
} = require("../Controller/Main");
const tip_sample = require("../Data_samples/Tip_Samples");

//General Route
router.route("/").get(GetAll);
router
  .route("/post")
  // .post(async (req, res) => {
  //   const samples = await tip_sample
  //     .then((data) => data)
  //     .catch((err) => console.log(err));
  //   const data = await Tip.bulkCreate(samples, {
  //     returning: true,
  //   }).catch((err) => console.log(err));
  //   res.json(data);
  // })
  .get(async (req, res) => {
    console.log(await tip_sample);
    const samples = await tip_sample
      .then((data) => data)
      .catch((err) => console.log(err));
    console.log(samples);
    const result = await Tip.bulkCreate(samples, {
      returning: true,
    });
    // const tip_sample = Data();
    console.log(tip_sample);

    res.json(result);
  });

router.route("/post/api").get(async (req, res) => {
  const post = await Tip.findAll({ include: [Clients, Employee] });
  res.json(post);
});

//Getting the data with Tips and Employee information
router.route("/Employees").get(GetTipEmpCli);
//Adding and getting employees
router.route("/AddEmployee").post(AddEmp);
//Adding,Deleting and Updating Client
router.route("/Client").delete(DeleteClient).post(AddClient);
//Getting,Updating Client
router.route("/Client/:id").get(FindClient).put(UpdateIndClient);
//Getting the individual Employee information for payment
router.route("/Employee/:id").get(GetEmployeeInfo);
//Getting the data for employee information
router.route("/EmpOverview/:id").get(GetEmp_Tip);

module.exports = router;
