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
  const [topfives, setTop5] = useState();
  const [clicked, setClicked] = useState();

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

  const findTopFive = () => {
    //First lets get the data sorted out
    let tips_data = employee.map((data) => {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const tipsArray = data.tipsAmount;
      const tipsTotal = tipsArray
        .map((data) => parseFloat(data.tip))
        .reduce((acc, curr) => acc + curr, 0);
      return {
        firstName,
        lastName,
        total_Tips: tipsTotal,
      };
    });

    //Now we are going to check who has the highest numbers
    const largest_tips = tips_data
      .sort((a, b) => {
        return b.total_Tips - a.total_Tips;
      })
      .filter((data, index) => index < 5);
    setTop5([...largest_tips]);
  };

  useEffect(() => {
    totalTips();
    findTopFive();
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
              <span>
                Employees with the largest collection of tips over the years
              </span>
            </div>
            <div className="details">
              <ul className="topFive_list">
                {topfives
                  ? topfives.map((data, index) => {
                      const { firstName, lastName, total_Tips } = data;
                      return (
                        <li className="topFive_emp" key={index}>
                          <div
                            className={
                              clicked === index
                                ? "topFive_emp_details_clicked"
                                : "topFive_emp_details"
                            }
                            onClick={() => setClicked(index)}>
                            <div className="topFive_emp_names">
                              <h3>{firstName}</h3>
                              <span>{lastName}</span>
                            </div>
                            <div className="topFive_emp_amount">
                              <GrMoney
                                size={45}
                                color={"#5eb735"}
                                style={{ color: "#5eb735" }}
                              />
                              <h4>{formatter.format(total_Tips)}</h4>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  : ""}
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
