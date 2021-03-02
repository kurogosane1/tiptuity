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

export default function View() {
  return (
    <div className="views">
      <Switch>
        <Route exact path="/api">
          <Stats />
        </Route>
        <Route path="/api/Clients">
          <Clients />
        </Route>
        <Route path="/api/UpdateClient">
          <UpdateClient />
        </Route>
        <Route path="/api/Employees">
          <Employees />
        </Route>
        <Route path="/api/EmpOverview">
          <EmpOverview />
        </Route>
        <Route path="/api/tips">
          <Tips />
        </Route>
        {window.innerWidth <= 600 ? (
          <Route path="/api/Employee">
            <Employee />
          </Route>
        ) : null}
        {window.innerWidth <= 600 ? (
          <Route path="/api/Client">
            <IndClient />
          </Route>
        ) : null}
      </Switch>
    </div>
  );
}
