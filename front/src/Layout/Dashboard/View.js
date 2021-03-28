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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Ind_Emp } from "../../Pages/Payment/Ind_Emp";

export default function View() {
  return (
    <div className="views">
      <Switch>
        <Protect exact path="/api" component={Stats} />
        <Protect path="/api/Clients" component={Clients} />
        {/* <Route path="/api/Clients">
          <Clients />
        </Route> */}
        <Protect path="/api/Clients" component={UpdateClient} />
        {/* <Route path="/api/UpdateClient">
          <UpdateClient />
        </Route> */}
        <Protect path="/api/Employees" component={Employees} />
        {/* <Route path="/api/Employees">
          <Employees />
        </Route> */}
        <Protect path="/api/EmpOverview" component={EmpOverview} />
        {/* <Route path="/api/EmpOverview">
          <EmpOverview />
        </Route> */}
        <Protect path="/api/tips" component={Tips} />
        {/* <Route path="/api/tips">
          <Tips />
        </Route> */}
        {window.innerWidth <= 600 ? (
          <Protect path="/api/Employee" component={Employee} />
        ) : // <Route path="/api/Employee">
        //   <Employee />
        // </Route>
        null}
        {window.innerWidth <= 600 ? (
          <Protect path="/api/Client" component={IndClient} />
        ) : // <Route path="/api/Client">
        //   <IndClient />
        // </Route>
        null}
        <Route path={"/api/Employee/:id"}>
          <Elements stripe={stripePromise}>
            <Ind_Emp />
          </Elements>
        </Route>
      </Switch>
    </div>
  );
}
