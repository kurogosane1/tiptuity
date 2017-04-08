// dependencies//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var keys = require("./controller/keys");
var stripe = require('stripe')(keys.testSecretKey);
// Sets an initial port. We"ll use this later in our listener//
var PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/views/layout"));

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// deploy the public folder
app.use(express.static(process.cwd() + "/views"));

// allow PUT and DELETE methods.
// app.use(methodOverride("_method"));

// initialize handlebars
var exphbs = require("express-handlebars");

// setup the handle bars
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the routes
// var routes = require("./controllers/burger_controller.js");
// app.use("/", routes);
require("./controller/controller.js")(app);
// require("./models/burgerdat.js")(app);
 

 stripe.customers.create(
  { email: 'customer@example.com' },
  function(err, customer) {
    err; // null if no error occurred 
    customer; // the created customer object 
  }
);


app.listen(5000, function(){
    console.log("listening at port:"+ PORT);
});