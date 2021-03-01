import React, { useEffect, useState } from "react";
import axios from "axios";

export function AddClient({ client, setClient }) {
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();

  const [businessname, setBusinessName] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [businessImage, setBusinessImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios
      .post("/api/Client", {
        businessname,
        businessAddress,
        businessAddress,
      })
      .then((response) => response);
    console.log(data);
    setClient([...client, data]);
  };

  useEffect(() => {
    console.log(businessname);
  }, [businessname]);

  useEffect(() => {
    console.log(businessImage);
  }, [businessAddress]);

  useEffect(() => {
    console.log(businessImage);
  }, [businessImage]);

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
            <label htmlFor="">Logo Image if none</label>
            <input
              type="file"
              name={businessImage}
              onChange={(e) => {
                setBusinessImage(e.target.files[0]);
              }}
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
