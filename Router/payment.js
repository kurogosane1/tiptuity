const express = require("express");
const Employee = require("../models/Employee");
const Tip = require("../models/Tip");

// Creating the router
const useRouter = express.Router();

useRouter
  .route("/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    if (id) {
      const user = await Employee.findOne({ where: { id } })
        .then((emp) => {
          if (!emp) {
            return res.status(200).json({ message: "Person not found" });
          }
          return {
            firstname: emp.firstname,
            lastname: emp.lastname,
            id: emp.id,
            image: emp.image,
          };
        })
        .catch((err) => {
          console.log(err);
        });

      const Client_id = await Tip.findOne({ where: { emp_id: id } }).then(
        (res) => {
          return {
            id: res.client_id,
          };
        }
      );
    } else {
      return res.status(200).json({ message: "Person not found" });
    }
  })
  .post(async (req, res) => {
    // This is where the payment will be processed here
    const { amount, client_id, emp_id } = req.body;
    let total = (total = (amount * 100).toFixed());
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.status(200).send(paymentIntent.client_secret);

      // Creating Tips
      await Tip.create({
        client_id,
        emp_id,
        tip_amount: amount,
      })
        .then((response) => {
          console.log(response);
          return responese;
        })
        .catch((err) => res.status(500).json({ message: error }));
    } catch (err) {
      console.log(err);
    }
  });

module.exports = useRouter;
