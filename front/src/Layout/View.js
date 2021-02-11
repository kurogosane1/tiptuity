import React from "react";
import { Switch, Route } from "react-router-dom";
import Clients from "../Pages/Clients";
import Employees from "../Pages/Employees";
import Stats from "../Pages/Stats";
import Tips from "../Pages/Tips";
import "../style/View.css";

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
        <Route path="/tips">
          <Tips />
        </Route>
      </Switch>
    </div>
  );
}
