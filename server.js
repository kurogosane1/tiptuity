//Initialize dependencies//
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const keys = require("./controller/keys");
const stripe = require('stripe')(keys.testSecretKey);
const session =  require("express-session");
const PORT = process.env.PORT || 5000;
const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const flash = require("connect-flash");

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
require("./controller/controller.js")(app, passport);
require('./config/passport')(passport);

// setup the handle bars
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Passport//
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.listen(5000, function(){
    console.log("listening at port:"+ PORT);
});