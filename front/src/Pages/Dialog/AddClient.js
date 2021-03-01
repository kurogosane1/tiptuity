import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Widget } from "@uploadcare/react-widget";
import dotenv from "dotenv";
import { GrAction } from "react-icons/gr";

dotenv.config();

export function AddClient({ client, setClient, closeDialog }) {
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();
  const widgetApi = useRef();

  const [businessname, setBusinessName] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [businessImage, setBusinessImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios
      .post("/api/Client", {
        businessname,
        businessAddress,
        businessImage,
      })
      .then((response) => response);
    setClient([...client, data.data.data]);
    setTimeout(() => {
      closeDialog(false);
    }, 3000);
  };

  const handleImage = (e) => {
    setBusinessImage(e.cdnUrl);
  };

  return (
    <div className="AddingNew">
      <div>
        <h2>Add new Client</h2>
        <br />
        <span
          style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          {message ? message : null}
        </span>
        <br />
        <span style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {alert ? alert : null}
        </span>
        <form>
          <div className="Input_areas">
            <label htmlFor="">Client Name</label>
            <input
              type="text"
              className="input_form"
              name="businessname"
              onChange={(e) => {
                setBusinessName(e.target.value);
              }}
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Client Street Address</label>
            <input
              type="text"
              name="businessAddress"
              onChange={(e) => {
                setBusinessAddress(e.target.value);
              }}
            />
          </div>
          <div className="Input_areas">
            <Widget
              style={{ display: "none" }}
              ref={widgetApi}
              publicKey={process.env.REACT_APP_UPLOADCARE_PUBLIC_KEY}
              tabs="file"
              onChange={handleImage}
            />
          </div>
          <div className="Input_areas">
            <button onClick={handleSubmit}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
