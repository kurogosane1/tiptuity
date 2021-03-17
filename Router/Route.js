// const express = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const Users = require("../Models/User");
const qrcode = require("../Models/EmpQr");
const bcrypt = require("bcryptjs");
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
const passport = require("passport");
const tip_sample = require("../Data_samples/Tip_Samples");
const { isLoggedIn, checkNotAuthenticated } = require("../Middleware/auth");
const User = require("../Models/User");

//This is for Login
router.route("/Login").post((req, res, next) => {
  passport.authenticate(
    "local",
    {
      successRedirect: "/api",
      failureRedirect: "/Login",
      failureFlash: true,
    },
    // (err, user, info, req) => {
    //   console.log("Yay This ran");
    //   // console.log(user.id);
    //   // console.log(req);
    //   console.log(info);
    // }
    (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    }
  )(req, res, next);
});

//General Route
router.route("/api").get(isLoggedIn, GetAll);
//Creating a route to check for authentication
router.route("/api/isAuthenticated").get(isLoggedIn).post(isLoggedIn);

router.route("/api/post").get(async (req, res) => {
  const samples = await tip_sample
    .then((data) => data)
    .catch((err) => console.log(err));
  const result = await Tip.bulkCreate(samples, {
    returning: true,
  });
  res.json(result);
});
//This is just to add the user data
router.route("/api/getinfo").get(async (req, res) => {
  const Salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync("password", Salt);
  const something = {
    email: "jdoe@email.com",
    password: hashPassword,
    isAdmin: true,
  };

  const result = await User.create(something);
  console.log(result);
});
//This is just to add sample Tip post data
router.route("/api/post/api").get(async (req, res) => {
  const post = await Tip.findAll({ include: [Clients, Employee] });
  res.json(post);
});
//Getting the data with Tips and Employee information
router.route("/api/Employees").get(isLoggedIn, GetTipEmpCli);
//Adding and getting employees
router.route("/api/AddEmployee").post(isLoggedIn, AddEmp);
//Adding,Deleting and Updating Client
router
  .route("/api/Client")
  .delete(isLoggedIn, DeleteClient)
  .post(isLoggedIn, AddClient);
//Getting,Updating Client
router
  .route("/api/Client/:id")
  .get(isLoggedIn, FindClient)
  .put(isLoggedIn, UpdateIndClient);
//Getting the individual Employee information for payment
router.route("/api/Employee/:id").get(isLoggedIn, GetEmployeeInfo);
//Getting the data for employee information
router.route("/api/EmpOverview/:id").get(isLoggedIn, GetEmp_Tip);

module.exports = router;
