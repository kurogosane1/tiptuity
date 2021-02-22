import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { DataContext } from "../Context/Data";
import "../App.css";
import "../style/EmpOverview.css";
import { useHistory, useLocation } from "react-router-dom";

export default function EmpOverview() {
  const history = useHistory();
  const location = useLocation();

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
  //This is where to save the individual data
  const [indEmp, setIndEmp] = useState();
  //This is if the user has clicked one of the listing names
  const [clicked, setClicked] = useState();

  //Get the data to be changed
  const setData = () => {
    const { state } = location;
    const Employee = state.Employee;

    setNames([...Employee]);
  };

  //Clicking to get the name of the actual person
  const handleClick = (first, last, index) => {
    if (window.innerWidth > 600) {
      setClicked(index);
      let information = names.filter((info) => {
        return info.firstname === first && info.lastname === last;
      });
      setIndEmp([...information]);
    } else {
      setClicked(index);
      let information = names.filter((info) => {
        return info.firstname === first && info.lastname === last;
      });
      setIndEmp([...information]);

      history.push("/Employee", {
        Data: information,
      });
    }
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {}, [indEmp]);

  return (
    <div className="overview_container">
      <section className="emp_over_list">
        <div className="emp_over_info">
          <h4>Names of all employees</h4>
          <button className="buttons-Overview">Add More Employees</button>
          <button className="buttons-Overview" onClick={() => history.goBack()}>
            Go Back
          </button>
        </div>
        <div className="name_listing">
          <ul>
            {names
              ? names.map((data, index) => {
                  const { firstname, lastname, image } = data;

                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(firstname, lastname, index)}>
                      <div
                        className={
                          clicked === index
                            ? "name_container_clicked"
                            : "name_container"
                        }>
                        <Avatar src={image} />
                        <span style={{ textAlign: "center" }}>{firstname}</span>
                        <span style={{ textAlign: "center" }}>{lastname}</span>
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
                indEmp[0].firstname
              ) : (
                <Skeleton variant="text" width="100%"></Skeleton>
              )}
            </h3>
            <h3>{indEmp ? indEmp[0].lastname : <Skeleton />}</h3>
          </div>
          <div className="emp_over_image">
            {indEmp ? (
              <img
                src={indEmp[0].image}
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
              indEmp.map((data) => {
                const { tip, Client, date } = data;
                let d = new Date(date);
                return (
                  <li className="ind_emp_tips">
                    <div className="name_col">
                      <h3 style={{ textAlign: "center" }}>{Client}</h3>
                    </div>
                    <div className="date_col">
                      <span style={{ textAlign: "center" }}>
                        {d.toString()}
                      </span>
                    </div>
                    <div className="amount_collected">
                      <h3 style={{ textAlign: "center" }}>
                        {formatter.format(tip)}
                      </h3>
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
