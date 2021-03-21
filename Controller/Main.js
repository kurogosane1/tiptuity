const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");
const Users = require("../Models/User");
const stripe = require("stripe")(process.env.SECRET_KEY);
require("dotenv").config();
//Making sure to add the Employee to the list of employees
module.exports.AddEmp = async (req, res) => {
  const {
    firstname,
    lastname,
    streetaddress,
    email,
    isAdmin,
    image,
  } = req.body;

  //First to check if the user already exists
  const check = await Employee.findAll({ where: { firstname, lastname } });

  if (check.length === 0) {
    //If we don't have the Employee then we add it to the user
    const Person = await Employee.create(
      {
        firstname,
        lastname,
        streetaddress,
        email,
        isAdmin,
        image,
      },
      { response: true }
    ).catch((err) => {
      res
        .status(500)
        .json({ message: error.message, isAuth: req.isAuthenticated() });
    });
    res.json({
      message: "Successfully Added User",
      data: Person,
      id: Person,
      isAuth: req.isAuthenticated(),
    });
  } else {
    res.json({
      message: "Employee already exists",
      isAuth: req.isAuthenticated(),
    });
  }
};
//Adding Clients to the list
module.exports.AddClient = async (req, res) => {
  //First to de-structure the body
  const { businessname, businessAddress, businessImage } = req.body;

  //Check to see if the Client already exists;
  const check = await Clients.findOne({
    where: { businessname, businessAddress },
  });

  //Take action to the result
  if (!check) {
    const result = await Clients.create(
      { businessname, businessAddress, businessImage },
      { response: true }
    );

    res.json({
      message: "Successfully added Client",
      data: result,
      isAuth: req.isAuthenticated(),
    });
  } else {
    res.status(500).json({
      message: "Client already exists",
      isAuth: req.isAuthenticated(),
    });
  }
};
//Getting everything to present in the front end
module.exports.GetAll = async (req, res) => {
  //Getting all the data and storing them to variables
  const Emp = await Employee.findAll();
  const clients = await Clients.findAll();
  const tips = await Tip.findAll();
  const TipsEmp = await Tip.findAll({ include: [Clients, Employee] });

  res.status(200).json({
    Employees: Emp,
    clients,
    tips,
    TipsEmp,
    isAuth: req.isAuthenticated(),
  });
};
//Delete the Client from the database
module.exports.DeleteClient = async (req, res) => {
  const { id, tip_id } = req.body;
  //Check if the id was given to you or not
  if (id) {
    await Tip.destroy({ where: { id: tip_id } });
    // await other.destroy();
    await Clients.destroy({ where: { id } });

    res.json({
      message: "Client has been destroyed",
      isAuth: req.isAuthenticated(),
    });
  } else {
    res.json({ message: "No Identifier found", isAuth: req.isAuthenticated() });
  }
};
//Updating the Client Information
module.exports.FindClient = async (req, res) => {
  const { id } = req.params;
  const result = await Clients.findAll({ where: { id } });
  if (result.length > 0) {
    res.json({
      data: result,
      message: "Successfully found information",
      isAuth: req.isAuthenticated(),
    });
  } else {
    res.json({ message: "Client is not found", isAuth: req.isAuthenticated() });
  }
};
//Updaing Individual Client
module.exports.UpdateIndClient = async (req, res) => {
  const { id } = req.params;
  const { businessname, businessAddress, businessImage } = req.body;

  const result = await Clients.update(
    { businessname, businessAddress, businessImage },
    { where: { id } }
  );

  const results = await Clients.findAll({ where: { id } });

  if (result.length > 0) {
    res.json({
      message: "Successfully Updated the Client",
      data: results,
      isAuth: req.isAuthenticated(),
    });
  }
};
//Getting the tips information with the employees and clients related to them
module.exports.GetTipEmpCli = async (req, res) => {
  //This is to get all the tips with Employee and Client information
  const result = await Tip.findAll({ include: [Employee, Clients] });

  res.json({ data: result, isAuth: req.isAuthenticated() });
};
//Getting the single employee information for payment
module.exports.GetEmployeeInfo = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (id) {
    const result = await Employee.findAll({ where: { id } }).then(
      (response) => response
    );

    res.status(200).json({ data: result, isAuth: req.isAuthenticated() });
  } else {
    res.json({ message: "No User Found", isAuth: req.isAuthenticated() });
  }
};
//Getting the single information of Employee and tips information in case there is one
module.exports.GetEmp_Tip = async (req, res) => {
  const { id } = req.params;
  const result = await Tip.findAll({
    include: [{ model: Employee, where: { id } }, { model: Clients }],
  });
  if (result.length === 0) {
    const data = await Employee.findAll({ where: { id } });
    console.log("No tip found and so individual data");
    console.log(`Line 58 ${data}`);
    res.json({ message: "No Tip found", data });
  } else {
    res.json({
      message: "Tip found ",
      data: result,
      isAuth: req.isAuthenticated(),
    });
  }
};
//This is to Log Users out of the database section
module.exports.LogUserOut = (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie(process.env.SESSION_KEY);
  res.json({ isAuth: false });
};
//This is for Payment Processing
module.exports.PaymentProcessing = async (req, res) => {
  console.log(process.env.SECRET_KEY);
  const { amount, client_id, emp_id } = req.body;
  console.log(typeof amount);
  console.log(req.body);
  let total = (amount * 100).toFixed();
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ["card"],
    });

    console.log(paymentIntent);
    res.status(200).send(paymentIntent.client_secret);

    //Create Tips
    await Tip.create({
      client_id,
      emp_id,
      tip_amount: amount,
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => res.status(500).json({ message: error.message }));
  } catch (err) {
    console.log(err);
  }
};
