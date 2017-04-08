var keys = require("./keys");
var express = require("express");
var app = express();

module.exports = function(app){
app.get("/", function(req, res){

    res.render("charge");
    // res.redirect("layouts/main");
});

// //this is once the payment is a success//
// app.get("/paysuccess", function(req, res){

//     res.render("layouts/main", {
        
//     });
// });
app.get("/:charge", function(req, res){
    console.log(req.body);
    var data = req.body;
    console.log(data);


});

//this is the function that would run the charge//
// app.post("/charge/:charges", function(req, res){
//     // src:  "https://checkout.stripe.com/checkout.js",
//     // class: "stripe-button",
//     // data-key : keys.testPublishableKey,
//     // data-
//     res.render("charge",
//     {

//     })

// });
};
