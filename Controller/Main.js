const Clients = require("../Models/Client");
const Employee = require("../Models/Employee");
const Tip = require("../Models/Tip");

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
    res.json({ message: "Employee already exists" });
  } else {
    //If we don't have the Employee then we add it to the user
    const Person = await Employee.create({
      firstname,
      lastname,
      streetaddress,
      email,
      isAdmin,
      image,
    }).catch((err) => {
      res.status(500).json({ message: error.message });
    });
    res.json({ message: "Successfully Added User", data: Person, id: Person });
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

    res.json({ message: "Successfully added Client", data: result });
  } else {
    res.status(500).json({ message: "Client already exists" });
  }
};
//Adding new tips for the user
module.exports.AddTip = async (req, res) => {
  //destructuing the data
  const { client_id, emp_id, tip_amount } = req.body;
  await Tip.create({ client_id, emp_id, tip_amount }).then((response) => {
    let id = response.id;
    //Sending a confirmation response to get the response
    res.status(200).json({
      message: "Success",
      payment_number: id,
      success_message: "Thank you for the Tip Payment",
    });
  });
};
//Sending all the users information
module.exports.Getuser = async () => {
  //Save the data to send to the front end
  const data = await Employee.findAll();
  return data;
};
//Getting all the Tips information
module.exports.GetTips = async () => {
  //Save the send data to send to the front end
  const data = await Tip.findAll();
  return data;
};
//Getting all the Client information
module.exports.GetClients = async () => {
  //Save and send the data to send to the front end;
  const data = await Clients.findAll();
  return data;
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
  });
};
//Delete the Client from the database
module.exports.DeleteClient = async (req, res) => {
  console.log(req.body);
  const { id, tip_id } = req.body;
  //Check if the id was given to you or not
  if (id) {
    await Tip.destroy({ where: { id: tip_id } });
    // await other.destroy();
    await Clients.destroy({ where: { id } });

    res.json({ message: "Client has been destroyed" });
  } else {
    res.json({ message: "No Identifier found" });
  }
};
//Updating the Client Information
module.exports.FindClient = async (req, res) => {
  const { id } = req.params;
  const result = await Clients.findAll({ where: { id } });
  if (result.length > 0) {
    res.json({ data: result, message: "Successfully found information" });
  } else {
    res.json({ message: "Client is not found" });
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
    res.json({ message: "Successfully Updated the Client", data: results });
  }
};
//Getting the tips information with the employees and clients related to them
module.exports.GetTipEmpCli = async (req, res) => {
  //This is to get all the tips with Employee and Client information
  const result = await Tip.findAll({ include: [Employee, Clients] });

  res.json({ data: result });
};
//Getting the single employee information for payment
module.exports.GetEmployeeInfo = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (id) {
    const result = await Employee.findAll({ where: { id } }).then(
      (response) => response
    );

    res.status(200).json({ data: result });
  } else {
    res.json({ message: "No User Found" });
  }
};
