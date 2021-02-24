import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddEmployee } from "../../Pages/AddEmployee";
import { Front } from "../../Pages/Front_Page/Front";
import { Login } from "../../Pages/Login/Login";
import Index from "../Dashboard/Index";
import { Emp_Payment } from "./Emp_Payment";

export function Emp_Switch() {
  return (
    <div className="views_payment">
      <Switch>
        <Route exact path="/">
          <Front />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route path={`/tiptuity/:id`}>
          <Emp_Payment />
        </Route>
        <Route path="/api">
          <Index />
        </Route>
        <Route path="/AddEmployee">
          <AddEmployee style={{ minHeight: "100vh" }} />
        </Route>
      </Switch>
    </div>
  );
}
