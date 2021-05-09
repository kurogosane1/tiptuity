import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddEmployee } from "../../Pages/AddEmployee";
import { Front } from "../../Pages/Front_Page/Front";
import { Login } from "../../Pages/Front_Page/Login/Login";
import Ind_Emp from "../../Pages/Payment/Ind_Emp";
import Success from "../../Pages/Payment/Success";
import Index from "../Dashboard/Index";
import Protect from "../../Protected/Protect";
import Failure from "../../Pages/Payment/Failure";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Demo from "../../Pages/IndividualEmp/Demo";
// import Test from "../../Pages/IndClient/test";
//

export function Emp_Switch() {
  // This is for stripe to work with this
  const stripePromise = loadStripe(
    process.env.REACT_APP_Stripe_PUBLISHIBLE_KEY
  );

  return (
    <div className="views_payment">
      <Switch>
        <Route exact path="/">
          <Front />
        </Route>
        <Route exact path="/Login">
          <Login style={{ minHeight: "100vh" }} />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
        <Route path="/Failure">
          <Failure />
        </Route>
        <Route path={`/pay/:id`}>
          <Elements stripe={stripePromise}>
            <Ind_Emp />
          </Elements>
        </Route>
        <Route path={`/Demo`}>
          <Elements stripe={stripePromise}>
            <Demo />
          </Elements>
        </Route>
        {/* <Route path="/tipss" component={Test} /> */}
        <Protect path="/api">
          <Index />
        </Protect>
        <Protect path="/AddEmployee">
          <AddEmployee style={{ minHeight: "100vh" }} />
        </Protect>
      </Switch>
    </div>
  );
}
