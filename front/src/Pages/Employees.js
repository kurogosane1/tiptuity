import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/Data";
import axios from "axios";
import "../App.css";
import "../style/Employee.css";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Employees() {
  const history = useHistory();

  const { employee, client, tipped } = useContext(DataContext);

  //Employee tip payment data
  const [emp, setEmp] = useState();
  const [totTips, setTotalTips] = useState();
  //This will hold those with tips
  const [empTips, setEmpTips] = useState();
  const [topfives, setTop5] = useState();
  const [clicked, setClicked] = useState();
  const [selection, setSelection] = useState();
  const [selData, setSelData] = useState();
  const [indTips, setIndTips] = useState();

  //Getting the Data sorted and organized v2
  const getDataOrganized = async () => {
    const result = await axios
      .get("/api/Employees")
      .then((response) => response.data.data);

    const employees = result.map((data) => {
      const { client_id, tip_amount, createdAt, Client, Employee } = data;
      const { businessname } = Client;
      const {
        firstname,
        lastname,
        streetaddress,
        email,
        isAdmin,
        image,
      } = Employee;
      // console.log(createdAt);
      return {
        id: Employee.id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
        tip: tip_amount,
        Client: businessname,
        Client_id: client_id,
        date: createdAt,
      };
    });
    //To get the total tips
    const totalTip = employees.reduce((acc, curr) => {
      return acc + curr.tip;
    }, 0);
    //To get the topfive tips
    const top5 = employees
      .sort((a, b) => b.tip - a.tip)
      .filter((data, index) => index < 5);

    setEmp([...employee]);
    setEmpTips([...employees]);
    setTop5([...top5]);
    setTotalTips(totalTip);
  };

  //This is to get the data after the selection has been made
  const getSelection = () => {
    if (selection) {
      const information = empTips.filter((info) => info.id === selection.id);
      const data = information.filter((data, index) => index < 1);
      setSelData(data);
      setIndTips([...information]);
    }
  };

  //This is after a click has been made
  const handleclick = (index, firstname, lastname, id) => {
    setClicked(index);
    setSelection({
      first: firstname,
      last: lastname,
      id,
    });
    getSelection();
  };

  useEffect(() => {
    // GetDataOrganized();
    getDataOrganized();
  }, []);

  useEffect(() => {
    getSelection();
  }, [selection]);

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
          <h1>{employee.length}</h1>
        </div>
        <div className="emp_tips_collected three">
          <GrMoney size={45} />
          <h1>{topfives ? formatter.format(topfives[0].tip) : 0}</h1>
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
              <button
                onClick={() =>
                  history.push("/api/EmpOverview", { Employee: empTips })
                }>
                View All Employees
              </button>
            </div>
            <div className="details">
              <ul className="topFive_list">
                {topfives
                  ? topfives.map((data, index) => {
                      const { firstname, lastname, tip, id } = data;

                      return (
                        <li className="topFive_emp" key={index}>
                          <div
                            className={
                              clicked === index
                                ? "topFive_emp_details_clicked"
                                : "topFive_emp_details"
                            }
                            onClick={() => {
                              handleclick(index, firstname, lastname, id);
                            }}>
                            <div className="topFive_emp_names">
                              <h3>{firstname}</h3>
                              <span>{lastname}</span>
                            </div>
                            <div className="topFive_emp_amount">
                              <GrMoney
                                size={45}
                                color={"#5eb735"}
                                style={{ color: "#5eb735" }}
                              />
                              <h4>{formatter.format(tip)}</h4>
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
                const { firstname, lastname, image, tip } = data;
                return (
                  <div key={index}>
                    <div className="emp_heading">
                      <h2 style={{ textAlign: "center" }}>{firstname}</h2>
                      <h2 style={{ textAlign: "center" }}>{lastname}</h2>
                    </div>
                    <div className="emp_img">
                      <Avatar src={image} />
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <Skeleton variant="rect" width="100%">
                  <div
                    style={{
                      height: "53.5vh",
                      width: "100%",
                      paddingTop: "57%",
                    }}
                  />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div
                    style={{
                      height: "53.5vh",
                      width: "100%",
                      paddingTop: "57%",
                    }}
                  />
                </Skeleton>

                <Skeleton variant="rect" width="100%">
                  <div
                    style={{
                      height: "53.5vh",
                      width: "100%",
                      paddingTop: "57%",
                    }}
                  />
                </Skeleton>
              </>
            )}
            <ul className="emp_tips_list">
              {indTips ? (
                indTips.map((data, index) => {
                  let d = new Date(data.date);

                  return (
                    <li className="emp_tips_so_far" key={index}>
                      <div>
                        <h2>{data.Client}</h2>
                      </div>
                      <div>{d.toString()}</div>
                      <div>
                        <h2>{formatter.format(data.tip)}</h2>
                      </div>
                    </li>
                  );
                })
              ) : (
                <h2
                  style={{
                    maxHeight: "53.5vh",
                    height: "100%",
                    width: "100%",
                  }}></h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h2>This is the employee secion</h2>
    // </div>
  );
}
