import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { DataContext } from "../Context/Data";
import "../App.css";
import "../style/EmpOverview.css";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { AddEmployee } from "./AddEmployee";
import axios from "axios";

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
  //For the Dialog/Modal to open or close
  const [opened, setIsOpened] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //Get the data to be changed
  const setData = () => {
    const { state } = location;
    const Employee = state.Employee;
    setNames([...Employee]);
  };

  //Clicking to get the name of the actual person
  const handleClick = async (first, last, index, id) => {
    // e.preventDefault();
    const result = await axios
      .get(`/api/EmpOverview/${id}`)
      .then((result) => result);
    console.log(result);

    if (result.data.message === "No Tip found") {
      setClicked(index);
      console.log(result.data.data[0]);
      let info = {
        id: result.data.data[0].id,
        firstname: result.data.data[0].firstname,
        lastname: result.data.data[0].lastname,
        image: result.data.data[0].image,
        streetaddress: result.data.data[0].streetaddress,
        email: result.data.data[0].email,
        isAdmin: result.data.data[0].isAdmin,
        tip: 0,
        Client: "No Tip Found",
        Client_id: "No Tip Found",
        date: result.data.data[0].createdAt,
      };
      return window.innerWidth > 600
        ? setIndEmp([info])
        : history.push("/api/Employee", { Data: [info] });
      console.log(indEmp);
    } else {
      setClicked(index);
      let information = names.filter((info) => {
        return info.id === id;
      });
      return window.innerWidth > 600
        ? setIndEmp([...information])
        : history.push("/api/Employee", { Data: information });
    }
    // console.log(first, last, index, id);
    // if (window.innerWidth > 600) {
    //   setClicked(index);
    //   let information = names.filter((info) => {
    //     return info.id === id;
    //   });
    //   console.log(information);
    //   setIndEmp([...information]);
    // } else {
    //   setClicked(index);
    //   let information = names.filter((info) => {
    //     return info.id === id;
    //   });
    //   setIndEmp([...information]);

    //   history.push("/api/Employee", {
    //     Data: information,
    //   });
    // }
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {}, [indEmp]);
  useEffect(() => {
    setData();
  }, [employee]);

  return (
    <div className="overview_container">
      <section className="emp_over_list">
        <div className="emp_over_info">
          <h4>Names of all employees</h4>
          <button
            className="buttons-Overview"
            onClick={() => setIsOpened(true)}>
            Add More Employees
          </button>
          <button className="buttons-Overview" onClick={() => history.goBack()}>
            Go Back
          </button>
        </div>
        <div className="name_listing">
          <ul>
            {employee
              ? employee.map((data, index) => {
                  const { firstname, lastname, image, id } = data;

                  return (
                    <li
                      key={index}
                      onClick={(e) =>
                        handleClick(firstname, lastname, index, id, e)
                      }>
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
              indEmp.map((data, index) => {
                const { tip, Client, date } = data;
                let d = new Date(date);
                return (
                  <li className="ind_emp_tips" key={index}>
                    <div className="name_col">
                      <h3 style={{ textAlign: "center" }}>
                        {Client ? Client : "No Tip Received"}
                      </h3>
                    </div>
                    <div className="date_col">
                      <span style={{ textAlign: "center" }}>
                        {d ? d.toString() : "No Tip Received"}
                      </span>
                    </div>
                    <div className="amount_collected">
                      <h3 style={{ textAlign: "center" }}>
                        {tip ? formatter.format(tip) : "No Tip received"}
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
      <Dialog
        fullScreen={fullScreen}
        open={opened}
        onClose={() => setIsOpened(false)}>
        <AddEmployee closeDialog={setIsOpened} />
      </Dialog>
    </div>
  );
}
