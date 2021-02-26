import React, { useEffect, useEffect, useRef } from "react";

export function AddClient() {
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();

  

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
        <form action="">
          <div className="Input_areas">
            <label htmlFor="">Client Name</label>
            <input type="text" className="input_form" />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Client Street Address</label>
            <input type="text" />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Logo Image if none</label>
            <input type="file" />
          </div>
          <div className="Input_areas">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
