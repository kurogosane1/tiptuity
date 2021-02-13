import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/Data";
import "../style/EmpOverview.css";

export default function EmpOverview() {
  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //This is to get data from the server
  const { employee } = useContext(DataContext);
  //This is where we will see all the employees name to be received
  const [names, setNames] = useState();
  //This is where the total Tips received by ALL employees
  const [totalTips, setTotalTips] = useState();
  //This is where to save the individual data
  const [indEmp, setIndEmp] = useState();

  //Get data to be organized
  //Get the name of the employees
  const getOrganized = () => {
    //This will be getting the names alone for the layout
    const Names = employee.map((data) => {
      return {
        firstName: data.firstName,
        lastName: data.lastName,
      };
    });
    return setNames(Names);
  };

  //Get the tips totalTips Collected so Far by all employees
  const getTotalTips = () => {
    //Unfortunately JavaScript would not let me get the tips amount by one line code

    //This will be getting the total tips collected
    const tipsArray = employee.map((data) => data.tipsAmount);
    //This is then to get the total tips array
    const totalTips = tipsArray.map((info, index) =>
      parseFloat(info[index].tip)
    );
    const Totals = totalTips.reduce((acc, curr) => acc + curr, 0);
    //upload to state//
    setTotalTips(formatter.format(Totals));
  };

  useEffect(() => {
    getOrganized();
    getTotalTips();
  }, []);

  return <div>{totalTips}</div>;
}
