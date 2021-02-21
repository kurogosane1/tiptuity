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
  const check = await Employee.findOne({ where: { firstname, lastname } });

  if (check) {
    res.send({ message: "Employee already exists" });
  } else {
    //If we don't have the Employee then we add it to the user
    await Employee.create({
      firstname,
      lastname,
      streetaddress,
      email,
      isAdmin: false,
      image:
        "https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png",
    }).catch((err) => {
      res.status(500).json({ message: error.message });
    });
  }
};
//Adding Clients to the list
module.exports.AddClient = async (req, res) => {
  //First to de-structure the body
  const { businessname, businessAddress, businessImage } = req.body;
  businessImage =
    "https://image.freepik.com/free-vector/business-logo-design_1057-540.jpg?4";

  //Check to see if the Client already exists;
  const check = await Clients.findOne({
    where: { businessname, businessAddress },
  });

  //Take action to the result
  if (!check) {
    Clients.create({ businessname, businessAddress, businessAddress }).catch(
      (err) => err.message
    );
  } else {
    res.status(500).json({ message: "Client already exists" });
  }
};
//Adding new tips for the user
module.exports.AddTip = async (req, res)=>{
    //destructuing the data
    const {client_id,emp_id,tip_amount} = req.body;
    Tip.create({client_id,emp_id,tip_amount});
    
}