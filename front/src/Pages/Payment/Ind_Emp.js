import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../../style/Ind_Emp.css";

//This is an individual employee payment section
//For paying employees that have not been paid at all

export function Ind_Emp({ match }) {
  //Get the param
  const { url } = useRouteMatch();
  const [emp, setEmp] = useState();
  const [tip, setTipAmount] = useState(0);
  //Getting the data based on the user information provided to us
  const getData = async () => {
    const result = await axios.get(url).then((response) => response.data.data);
    console.log(result);
    setEmp(...result);
  };

  useEffect(() => {
    getData();
    console.log(emp);
  }, []);
  return (
    <div className="payment_body">
      <div className="payment_container" style={{ justifyItems: "center" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontFamily: "Poppins",
            fontSize: "2.5rem",
          }}>
          {emp ? emp.firstname : ""} {emp ? emp.lastname : ""}
        </h2>
        <span>Tip Amount</span>
        <h3>{tip}</h3>
        <img
          src={emp ? emp.image : ""}
          alt="images"
          className="payment_emp_img"
        />
        <div className="payment_section">
          <div className="payment_input_areas">
            <label htmlFor="Biller_name">Biller Name</label>
            <input type="text" name="Biller_name" />
          </div>
          <div className="payment_input_areas">
            <label htmlFor="Biller_address">Billing Address</label>
            <input type="text" name="Biller_address" />
          </div>
          <div className="payment_input_areas">
            <label htmlFor="Biller_city">City</label>
            <input type="text" name="Biller_city" />
          </div>
          <div className="payment_input_areas">
            <label htmlFor="Biller_zipcode">ZipCode</label>
            <input type="text" name="Biller_zipcode" />
          </div>
          <div className="tipAmount">
            <button onClick={() => setTipAmount(1)}>$1</button>
            <button onClick={() => setTipAmount(5)}>$5</button>
            <button onClick={() => setTipAmount(10)}>$10</button>
            <input type="text" />
          </div>
        </div>

        <div className="credit_card_inf">
          <label htmlFor=""></label>
          {/* This is where the credit card information will be provided */}
        </div>
      </div>
    </div>
  );
}
