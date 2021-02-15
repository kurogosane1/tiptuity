import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { DataContext } from "../Context/Data";
import "../App.css";
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
  //This is if the user has clicked one of the listing names
  const [clicked, setClicked] = useState();

  //Get data to be organized
  //Get the name of the employees
  const getOrganized = () => {
    //This will be getting the names alone for the layout
    const Names = employee.map((data) => {
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        image: data.image,
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

  //Clicking to get the name of the actual person
  const handleClick = (first, last, index) => {
    setClicked(index);
    const tips = employee
      .map((data) => data)
      .filter((info) => info.firstName === first && info.lastName === last);

    const tipsColl = tips[0].tipsAmount;

    setIndEmp({
      firstName: tips[0].firstName,
      lastName: tips[0].lastName,
      image: tips[0].image,
      tips: tips[0].tipsAmount,
    });
  };

  useEffect(() => {
    getOrganized();
    getTotalTips();
    console.log(names);
  }, []);

  useEffect(() => {}, [indEmp]);

  return (
    <div className="overview_container">
      <section className="emp_over_list">
        <div className="emp_over_info">
          <h4>Names of all employees</h4>
          <button>Add More Employees</button>
        </div>
        <div className="name_listing">
          <ul>
            {names
              ? names.map((data, index) => {
                  const { firstName, lastName, image } = data;

                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(firstName, lastName, index)}>
                      <div
                        className={
                          clicked === index
                            ? "name_container_clicked"
                            : "name_container"
                        }>
                        <Avatar src={image} />
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </section>
      <section className="tips_collected">
        <div className="tips_collected_container">
          <div className="emp_over_heading">
            <h3>
              {indEmp ? (
                indEmp.firstName
              ) : (
                <Skeleton variant="text" width="100%"></Skeleton>
              )}
            </h3>
            <h3>{indEmp ? indEmp.lastName : <Skeleton />}</h3>
          </div>
          <div className="emp_over_image">
            {indEmp ? (
              <img
                src={indEmp.image}
                style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              />
            ) : (
              <>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
              </>
            )}
          </div>
          <ul>
            {indEmp ? (
              indEmp.tips.map((data) => {
                const { tip, client, date } = data;
                let d = new Date(date);
                return (
                  <li className="ind_emp_tips">
                    <div className="name_col">
                      <h3>{client}</h3>
                    </div>
                    <div className="date_col">
                      <span>{d.toString()}</span>
                    </div>
                    <div className="amount_collected">
                      <h3>{formatter.format(tip)}</h3>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="ind_emp_tips">
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
