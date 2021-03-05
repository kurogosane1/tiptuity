import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddEmployee } from "../../Pages/AddEmployee";
import { Front } from "../../Pages/Front_Page/Front";
import { Login } from "../../Pages/Front_Page/Login/Login";
import { Ind_Emp } from "../../Pages/Payment/Ind_Emp";
import Index from "../Dashboard/Index";
export function Emp_Switch() {
  return (
    <div className="views_payment">
      <Switch>
        <Route exact path="/">
          <Front />
        </Route>
        <Route exact path="/Login">
          <Login style={{ minHeight: "100vh" }} />
        </Route>
        <Route path={"/api/Employee/:id"}>
          <Ind_Emp />
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
