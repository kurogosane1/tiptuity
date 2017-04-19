// create dependencies//
const keys = require("./keys");
const express = require("express");
const app = express();
const tips = require("../models/tips");
// var token = require.body.stripeToken; //using express
const stripe = require('stripe')(keys.testSecretKey);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const func = require("../config/orm");
const flash = require("connect-flash");

// var stripe = Stripe(keys.testPublishableKey); var elements =
// stripe.elements();

module.exports = function (app) {



  // this will load the main page using handle bars// the form is located in the
  // indexedDB.handlebars //
  app.get("/", function (req, res) {

      res.render("index");

    }),

  app.get("/portal", function (req, res) {
      
      tips("all", res);
      // tips("sumTips", res);
      
    }),

  app.get("/empOne", function (req, res) {
      
      tips("empOne", res);
      // tips("sumTips", res);
      
    }),

  app.get("/empTwo", function (req, res) {
      
      tips("empTwo", res);
      // tips("sumTips", res);
      
    }),
  app.get("/empThree", function (req, res) {
      
      tips("empThree", res);
      // tips("sumTips", res);
      
    }),
    // app.get("/admin", function (req, res) {

    //   res.render("admin-login", {message: req.flash('loginMessage')});

    // }),

    // this is for the admin login//
    // app.post('/admin', passport.authenticate('local-login', {
    //   successRedirect: '/business',
    //   failuireRedirect: '/admin',
    //   failureFlash: true
    // })),

    // app.get("/business", isLoggedIn,  function (req, res) {

    //   res.render("business", {user: req.user});

    // }),

    // to redirect the user when they click logout//
    // app.get('/logout', function(req, res){
    //   req.logout();
    //   res.redirect('/admin');
    // })

  //This is where the charges would take place//
  app.post("/charge/:id", function (req, res) {
    var id= 1;
    console.log(id);
    var data = req.body;
    var tipped = data.amount;
    var charges = parseInt(data.amount) * 100; // for some reason sprite does not see in digits//

    //now we will insert into tips table//
    var tipFee = tipped *5.9% + 0.33;
    var tipFinal = tipped - tipFee;

    var tipp = {
      id: id,
      tipped:tipped,
      tipFee: tipFee,
      tipFinal : tipFinal
    }

    

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

          return stripe.charges.create({ //the charge would then direct it based on the token//
              amount: charges,
              currency: "usd",
              source: token.id,
              // customer: customer.id

            }),
            function (err, charge) {
              if (err) {
                console.log(err)
              } else {
                console.log(charge);
              }
            }

        })

      }
      
    });
    tips("insert", tipp);
    res.render("payment");

  })
};

// function isLoggedIn(req, res, next){
//   if (req.isAuthenticated()){
//     return next();
//   }
//   res.redirect('/business')
// }