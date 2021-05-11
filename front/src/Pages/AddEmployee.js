import React, { useEffect, useState, useContext } from "react";
import "../style/AddEmployee.css";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../Context/Data";

//This is where we will implement adding new employees
export function AddEmployee({ closeDialog }) {
  const { url } = useRouteMatch();
  const { setEmployee, employee } = useContext(DataContext);
  const [alert, setAlert] = useState();
  const [success, setSuccess] = useState();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    email: "",
    isAdmin: true,
  });

  const create_emp = async (e) => {
    e.preventDefault();
    const data = await axios
      .post("/api/AddEmployee", {
        firstname: user.firstname,
        lastname: user.lastname,
        streetaddress: user.streetaddress,
        email: user.email,
        isAdmin: user.isAdmin === "True" ? true : false,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          return response.data;
        } else {
          return response.data;
        }
      });
    console.log(data);
    if (!data.data) {
      setAlert(data.message);
    } else {
      setEmployee([...employee, data.data]);
      setSuccess(data.message);
      setTimeout(() => {
        closeDialog(false);
      }, 3000);
    }
  };

  //For any change
  const handleChange = (e) => {
    setAlert();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setAlert();
    setSuccess();
  }, []);

  return (
    <div className="AddingNew">
      <div>
        <h2 style={{ textAlign: "center" }}>Add new Employee</h2>
        <span>Fill Out the information below to add new Employee</span>
        <br />
        <span
          style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          Click anywhere outside to cancel or close window
        </span>
        <span style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {alert ? alert : null}
        </span>
        <br />
        <span
          style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          {success ? success : null}
        </span>
        <form onSubmit={create_emp}>
          <div className="Input_areas">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="input_form"
              name="firstname"
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="streetaddress">Street Address</label>
            <input
              type="text"
              id="streetaddress"
              name="streetaddress"
              onChange={handleChange}
              placeholder="#### Some Street Address"
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="something@email.com"
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="isAdmin">Admin?</label>
            <select id="isAdmin" name="isAdmin" onChange={handleChange}>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <div className="Input_areas">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
