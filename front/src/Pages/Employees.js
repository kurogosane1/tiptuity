import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/Data";
import "../style/Employee.css";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Avatar } from "@material-ui/core";

export default function Employees() {
  const { employee, getFaker } = useContext(DataContext);
  const [totTips, setTotalTips] = useState();
  const [totEmp, setTotEmp] = useState();
  const [topfives, setTop5] = useState();
  const [clicked, setClicked] = useState();
  const [selection, setSelection] = useState();
  const [selData, setSelData] = useState();
  const [indTips, setIndTips] = useState();

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

  //Get the data for the selection
  const getSelection = () => {
    console.log(employee);
    if (selection) {
      const information = employee
        .map((data) => data)
        .filter(
          (data) =>
            data.firstName === selection.first &&
            data.lastName === selection.last
        );
      const setTips = information[0].tipsAmount;
      setSelData(information);
      setIndTips([...setTips]);
    }
  };

  //This is after a click has been made
  const handleclick = (index, firstName, lastName) => {
    setClicked(index);
    setSelection({
      first: firstName,
      last: lastName,
    });
  };

  useEffect(() => {
    totalTips();
    findTopFive();
  }, []);

  useEffect(() => {
    getSelection();
  }, [selection, selData, indTips]);
  useEffect(() => {}, [selData, indTips]);

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
                            onClick={() => {
                              handleclick(index, firstName, lastName);
                            }}>
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
        <div className="emp_heading">
          <div className="topFive_tips_coll">
            {selData ? (
              selData.map((data, index) => {
                const { firstName, lastName, image, tipsAmount } = data;
                return (
                  <div key={index}>
                    <div className="emp_heading">
                      <h2>{firstName}</h2>
                      <h2>{lastName}</h2>
                    </div>
                    <div className="emp_img">
                      <Avatar src={image} />
                    </div>
                  </div>
                );
              })
            ) : (
              <h2></h2>
            )}
            <ul className="emp_tips_list">
              {indTips ? (
                indTips.map((data, index) => {
                  console.log(data.tip);
                  return (
                    <li className="emp_tips_so_far" key={index}>
                      <div>
                        <h2>{formatter.format(data.tip)}</h2>
                      </div>
                      <div></div>
                      <div>
                        <h2>{data.client}</h2>
                      </div>
                    </li>
                  );
                })
              ) : (
                <h2></h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
