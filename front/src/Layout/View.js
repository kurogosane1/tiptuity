import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Employees from "../Pages/Employees";
import Clients from "../Pages/Clients";
import More from "../Pages/More";

export default function View() {
  return (
    <Switch>
      <Route exact path="/">
        <Home style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Employees">
        <Employees style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Clients">
        <Clients style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/More">
        <More style={{ minheight: "100vh" }} />
      </Route>
    </Switch>
  );
}
