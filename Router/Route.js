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
} = require("../Controller/Main");
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

module.exports = router;
