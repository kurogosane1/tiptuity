// create dependencies//
var keys = require("./keys");
var express = require("express");
var app = express();
// var token = require.body.stripeToken; //using express
const stripe = require('stripe')(keys.testSecretKey);

// var stripe = Stripe(keys.testPublishableKey); var elements =
// stripe.elements();

module.exports = function (app) {



    // this will load the main page using handle bars// the form is located in the
    // indexedDB.handlebars //
    app.get("/", function (req, res) {

      res.render("index");

    }),

    //This is where the charges would take place//
    app.post("/charge", function (req, res) {
      var data = req.body;
      var charges = parseInt(data.amount)*100;// for some reason sprite does not see in digits//
     
      //card details stored is sent to stripe//
      var cardDetail = {
        name: data.cardholderName,
        number: parseInt(data.cardNum),
        exp_month: parseInt(data.cardExpMonth),
        exp_year: parseInt(data.cardExpYear),
        cvc: data.cardCvc,
        currency: "USD",
        zipcode: data.cardZip
      }


      //The token is created//
      var token = stripe.tokens.create({
        "card": {
          number: cardDetail.number,
          cvc: cardDetail.cvc,
          exp_month: cardDetail.exp_month,
          exp_year: cardDetail.exp_year,
        },
        "customer": cardDetail.cardholderName



      }, function (err, token) {
        if (err) {
          console.log(err);
        } else {
          return stripe.customers.create({ //If there is no error, the customer is created//
            customer: {
              email: "paying.user@example.com",
              name: cardDetail.cardholderName,
              source: token,
              "card": token.card.id
            }
          }).then(function (customer) {
           
            return stripe.charges.create({//the charge would then direct it based on the token//
              amount: charges,
              currency: "usd",
              source: token.id,
              // customer: customer.id
              
            }), function(err, charge){
              if(err){
                console.log(err)
              }else{
                console.log(charge);
              }
            }
            
          })

        }

      });

      res.render("payment");

    })
};