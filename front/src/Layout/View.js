import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Employees from "../Pages/Employees";
import Clients from "../Pages/Clients";

export default function View({ data, setEmployeeData }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home style={{ minHeight: "100vh" }} />
      </Route>
      <Route path="/Employees">
        <Employees style={{ minheight: "100vh" }} data={data} setEmployeeData />
      </Route>
      <Route path="/Clients">
        <Clients style={{ minheight: "100vh" }} />
      </Route>
    </Switch>
  );
}
