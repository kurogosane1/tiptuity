//Initialize dependencies//
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var keys = require("./controller/keys");
var stripe = require('stripe')(keys.testSecretKey);
var PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/views"));

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
require("./controller/controller.js")(app);

// setup the handle bars
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(5000, function(){
    console.log("listening at port:"+ PORT);
});