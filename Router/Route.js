const { response } = require("express");
const express = require("express");
const router = express.Router();
const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const { GetAll } = require("../Controller/Main");

//General Route
router.route("/").get(GetAll);

module.exports = router;
