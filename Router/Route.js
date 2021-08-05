// Getting the Packages
const express = require("express");
const passport = require("../Passport");
const bcrypt = require("bcrypt");

// Importing from Databases
const Employee = require("../Models/Employee");
const Client = require("../Models/Client");
const Users = require("../Models/User");
const Tips = require("../Models/Tip");
const { Emp_Sample } = require("../data_samples/Employee_Sample");
const { Client_Sample } = require("../data_samples/Client_Sample");
const { User_Sample } = require("../data_samples/User_MockData");
const tip_sample = require("../data_samples/Tip_Samples");
const myStore = require("../config/Session");
const {
  VerifyLoggedIn,
  Authenticate,
} = require("../middleware/VerifyMiddleware");

// Creating the router
const router = express.Router();

// First initial router contact
router.route("/").get((req, res) => {
  res.send("Hello World I am new ");
});
// Sample generation route Client, Employees and Users
router.route("/Sample").get(async (req, res) => {
  const Emp = await Employee.findAll();
  const Clients = await Client.findAll();
  const User = await Users.findAll();

  res.status(200).json({
    Emp,
    Clients,
    User,
  });
});
// Sample Generation for Tips received
router.route("/TipSample").get(async (req, res) => {
  const tips = await tip_sample
    .then((data) => data)
    .catch((err) => console.log(err));

  const results = await Tips.bulkCreate(tips, { returning: true });
  res.status(200).json(results);
});
// Sample test to see if the relationships are working
router.route("/testings").get(async (req, res) => {
  // const data = await Employee.findAll({ include: [Tips] });
  const data = await Employee.findAll();
  res.status(200).json({ data });
});
// Sample Generation
router.route("/testing2").get(async (Req, res) => {
  const resultA = Employee.bulkCreate(Emp_Sample, { returning: true });
  const resultB = Client.bulkCreate(Client_Sample, { returning: true });

  res.status(200).json(resultA, resultB);
});
// To Verify if the user is Authenticated
router.route("/authenticate").get(VerifyLoggedIn);
// This is to add new users
router.route("/signup").post((req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err)
      return res.json({
        message: err.message || "Oops something is wrong",
      });
    if (user) {
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        res.json({ message: "success", id: user.id });
      });
    }
    if (info) return res.json({ message: info });
  })(req, res, next);
});
router.route("/Login").post((req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    if (err)
      return res.json({
        message: err.message || "Oops something is wrong",
      });
    if (user) {
      req.session.isAuthenticated = true;
      req.logIn(user, (err) => {
        if (err) {
          console.log(err);
          next(err);
        }

        return res.json({ message: "success", id: user });
      });
    }
    if (info) return res.json({ message: info });
  })(req, res, next);
});
// TO get the the main page sample data
router.route("/dash").get(Authenticate, async (req, res) => {
  console.log(req.sessionID);
  const Tipdata = await Tips.findAll({ include: [Employee, Client] });
  const EmpData = await Employee.findAll();
  const Clients = await Client.findAll();

  if (Tipdata && EmpData && Clients) {
    res.status(200).json({ emplo: EmpData, tipped: Tipdata, client: Clients });
  } else {
    res.status(400).json({ message: "data not found" });
  }
});
// To get for employee page
router.route("/dash/Employee").get(Authenticate, async (req, res) => {
  console.log(req.sessionID);
  const Tipdata = await Tips.findAll({ include: [Employee, Client] });
  const EmpData = await Employee.findAll();
  const Clients = await Client.findAll();

  if (Tipdata && EmpData && Clients) {
    res.status(200).json({ emplo: EmpData, tipped: Tipdata, client: Clients });
  } else {
    res.status(400).json({ message: "data not found" });
  }
});
// To Add new Employee
router.route("/dash/emp/details").post(Authenticate, async (req, res) => {
  console.log(req.sessionID);
  const result = await Employee.create(req.body, { returning: true });
  res.status(200).json(result);
});
// To get Tips data for tips section
router.route("/dash/Tips").get(Authenticate, async (req, res) => {
  console.log(req.sessionID);
  const data = await Tips.findAll({ include: [Employee, Client] });
  if (data) {
    res.status(200).json({ tipped: data });
  } else {
    res.status(400).json({ message: "data not found" });
  }
});
// To get Client Information
router.route("/dash/clients").get(Authenticate, async (req, res) => {
  console.log(req.sessionID);
  const clientData = await Client.findAll();
  const tipData = await Tips.findAll({ include: [Client] });
  if (!clientData && !tipData) {
    res.status(400).json({ message: "No Data Found" });
  } else {
    res.status(200).json({ tipped: tipData, client: clientData });
  }
});
// To Log Out User
router.route("/Logout").post((req, res) => {
  req.logOut();
  req.session.destroy();
  myStore.destroy(req.sessionID, (err) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json({ message: "LOG_OUT" });
  });
});

module.exports = router;
