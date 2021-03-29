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

export default function View() {
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
      </Switch>
    </div>
  );
}
