import { get } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/Data";
import "../style/Employee.css";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

export default function Employees() {
  const { employee, getFaker } = useContext(DataContext);
  const [totTips, setTotalTips] = useState();
  const [totEmp, setTotEmp] = useState();

  //this is the tips collected in total;
  const totalTips = () => {
    if (employee) {
      let tips_data = employee.map((data) => data.tipsAmount);
      let tips_information = tips_data.map((data) => data);
      let tips_amount = tips_information.map((data, index) =>
        parseFloat(data[index].tip)
      );
      let total = tips_amount.reduce((acc, curr) => acc + curr, 0);
      let Num_employees = employee.length;
      setTotalTips(total);
      setTotEmp(Num_employees);
    } else {
      getFaker();
    }
  };

  useEffect(() => {
    totalTips();
  }, []);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="emp_container">
      <div className="emp_container_stats">
        <div className="emp_tips_collected one">
          <GrMoney size={45} style={{ color: "#5eb735" }} />
          <h1>{formatter.format(totTips)}</h1>
        </div>
        <div className="emp_tips_collected two">
          <IoPersonOutline
            size={45}
            color={"#5eb735"}
            style={{ color: "#5eb735" }}
          />
          <h1>{totEmp}</h1>
        </div>
        <div className="emp_tips_collected three">
          <GrMoney size={45} />
          <h1>{formatter.format(totTips)}</h1>
        </div>
      </div>
      <div className="emp_container_list">
        <div className="emp_top_five">
          <div className="emp">
            <div className="heading">
              <h2>Top 5 Employees</h2>
            </div>
            <div className="details">
              <ul>
                <li>Sam</li>
                <li>Sam</li>
                <li>Sam</li>
                <li>Sam</li>
                <li>Sam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="emp_tips">
        <h2>This is where the tips will go</h2>
      </div>
    </div>
  );
}


// grid-template-areas:
//     "statistics statistics statistics"
//     "topFiv topFiv tips";