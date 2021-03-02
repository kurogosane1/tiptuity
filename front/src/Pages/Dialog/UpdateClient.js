import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";

export default function UpdateClient({ id }) {
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();

  const location = useLocation();

  useEffect(() => {
    console.log(location.state.id);
  }, []);

  return (
    <div className="Updating">
      <div>
        <h2>Update a new Client</h2>
        <br />
        <span
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
          }}>
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
              onChange={(e) => {}}
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Client Street Address</label>
            <input
              type="businessAddress"
              onChange={(e) => {
                setAlert(false);
              }}
            />
          </div>
          <div className="Input_areas">
            <button
              onClick={() => {
                setAlert();
              }}>
              Update Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
