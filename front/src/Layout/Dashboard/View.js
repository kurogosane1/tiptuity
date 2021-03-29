import React from "react";
import { Switch, Route } from "react-router-dom";
import Clients from "../../Pages/Clients/Clients";
import Employees from "../../Pages/Employees";
import EmpOverview from "../../Pages/EmpOverview";
import Stats from "../../Pages/Stats/Stats";
import Tips from "../../Pages/Tips/Tips";
import "../../style/View.css";
import "../../App.css";
import TopNavBar from "../../Layout/TopNavbar";
import Employee from "../../Pages/IndividualEmp/Employee";
import UpdateClient from "../../Pages/Dialog/UpdateClient";
import IndClient from "../../Pages/IndClient/IndClient";
import Protect from "../../Protected/Protect";
import Ind_Emp from "../../Pages/Payment/Ind_Emp";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function View() {
  //This is for stripe to work with this
  const stripePromise = loadStripe(
    process.env.REACT_APP_Stripe_PUBLISHIBLE_KEY
  );
  return (
    <div className="views">
      <Switch>
        <Protect exact path="/api" component={Stats} />
        <Protect path="/api/Clients" component={Clients} />
        <Protect path="/api/Clients" component={UpdateClient} />
        <Protect path="/api/Employees" component={Employees} />
        <Protect path="/api/EmpOverview" component={EmpOverview} />
        <Protect path="/api/tips" component={Tips} />
        {window.innerWidth <= 600 ? (
          <Protect path="/api/Employee" component={Employee} />
        ) : null}
        {window.innerWidth <= 600 ? (
          <Protect path="/api/Client" component={IndClient} />
        ) : null}
        {/* <Route path="/pay/:id">
          <Ind_Emp/>
        </Route> */}
        <Route path="/pay/00513b22-5614-4df2-8373-a5bf95f6546f">
          <Elements stripe={stripePromise}>
            <Ind_Emp />
          </Elements>
        </Route>
        <Route path={`/pay/:id`}>
          <Elements stripe={stripePromise}>
            <Ind_Emp />
          </Elements>
        </Route>
      </Switch>
    </div>
  );
}
