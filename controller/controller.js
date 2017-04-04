var keys = require("./keys");
var express = require("express");
var app = express();

module.exports = function(app){
app.get("/", function(req, res){

    res.render("index",
    {

    });
});

//this is once the payment is a success//
app.get("/paysuccess", function(req, res){

    res.render("index", {
        
    });
});

//this is the function that would run the charge//
app.post("/charge", function(req, res){
    src:  "https://checkout.stripe.com/checkout.js";
    class : "stripe-button";
    data-key : keys.testPublishableKey,
    data-

});
};
