const { response } = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");

//General Route
router.route("/").get(async (req, res) => {
  const data = await Tip.findAll();
  // console.log(data);
  res.json(data);
});

module.exports = router;
