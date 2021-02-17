import React from "react";
import { Switch, Route } from "react-router-dom";
import Clients from "../Pages/Clients/Clients";
import Employees from "../Pages/Employees";
import EmpOverview from "../Pages/EmpOverview";
import Stats from "../Pages/Stats/Stats";
import Tips from "../Pages/Tips/Tips";
import "../style/View.css";
import "../App.css";
import TopNavBar from "../Layout/TopNavbar";

export default function View() {
  return (
    <div className="views">
      <Switch>
        <Route exact path="/">
          <Stats />
        </Route>
        <Route path="/Clients">
          <Clients />
        </Route>
        <Route path="/Employees">
          <Employees />
        </Route>
        <Route path="/EmpOverview">
          <EmpOverview />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
      </Switch>
    </div>
  );
}
