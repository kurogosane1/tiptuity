import React, { useEffect, useState, useContext } from "react";
import "../style/AddEmployee.css";
import axios from "axios";
import QRCode from "qrcode.react";
import { DataContext } from "../Context/Data";

//This is where we will implement adding new employees
export function AddEmployee({ closeDialog }) {
  const { GetData } = useContext(DataContext);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    email: "",
    isAdmin: true,
  });

  const create_emp = (e) => {
    e.preventDefault();
    axios
      .post("/api/AddEmployee", {
        firstname: user.firstname,
        lastname: user.lastname,
        streetaddress: user.streetaddress,
        email: user.email,
        isAdmin: user.isAdmin === "True" ? true : false,
      })
      .then((response) => console.log(response));
    GetData();
    closeDialog(false);
  };

  //For any change
  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddingNew">
      <h2 style={{ textAlign: "center" }}>Add new Employee</h2>
      <span>Fill Out the information below to add new Employee</span>
      <span style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
        Click anywhere outside to cancel or close window
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
  );
}
