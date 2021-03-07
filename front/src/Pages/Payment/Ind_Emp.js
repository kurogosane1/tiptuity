import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";
import "../../style/Ind_Emp.css";
import Card from "./Card";

//This is an individual employee payment section
//For paying employees that have not been paid at all

export function Ind_Emp({ match }) {
  //Get the param
  const { url } = useRouteMatch();
  const [emp, setEmp] = useState();
  const [tip, setTipAmount] = useState(0);
  const [alert, setAlert] = useState(); //This is incase the user inputs string instead of numbers
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipCode] = useState(0);

  //Getting the data based on the user information provided to us
  const getData = async () => {
    const result = await axios.get(url).then((response) => response.data.data);
    console.log(result);
    setEmp(...result);
  };

  //Verifying the type of input entry made by the user
  const Checking = (e) => {
    setAlert();
    const value = e.target.value;
    if (parseInt(value)) {
      setTipAmount(parseInt(value));
    } else {
      setAlert("Please enter only a number");
    }
  };

  //This is also going to verify the zipcode
  const CheckingZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const PaymentProcess = async (e) => {
    e.preventDefault();
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    setAlert();
    getData();
    console.log(emp);
  }, []);
  return (
    <div className="payment_body">
      <div className="payment_container" style={{ justifyItems: "center" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "5px",
            fontFamily: "Poppins",
            fontSize: "2.5rem",
          }}>
          {emp ? emp.firstname : ""} {emp ? emp.lastname : ""}
        </h2>

        <h1>{`Tip Amount:  ${formatter.format(tip)}`}</h1>
        <img
          src={emp ? emp.image : ""}
          alt="images"
          className="payment_emp_img"
        />
        <div className="payment_section city">
          <div className="payment_input_areas column1">
            <label htmlFor="Biller_name">Biller Name</label>
            <input type="text" name="Biller_name" />
          </div>
          <div className="payment_input_areas column2">
            <label htmlFor="Biller_address">Billing Address</label>
            <input type="text" name="Biller_address" />
          </div>
          <div className="payment_input_areas column3">
            <label htmlFor="Biller_address2">Billing Address 2</label>
            <input type="text" name="Biller_address2" />
          </div>
          <div className="payment_input_areas column4">
            <label htmlFor="Biller_city">City</label>
            <input type="text" name="Biller_city" />
          </div>
          <div className="payment_input_areas column5">
            <label htmlFor="Biller_zipcode" maxlength="5">
              ZipCode
            </label>
            <input
              type="number"
              name="Biller_zipcode"
              onChange={(e) => CheckingZipCode(e)}
              min="1"
              max="5"
            />
          </div>
          <div className="tipAmount">
            <button onClick={() => setTipAmount(1)}>$1</button>
            <button onClick={() => setTipAmount(5)}>$5</button>
            <button onClick={() => setTipAmount(10)}>$10</button>
            <label>Other</label>
            <input
              type="number"
              onChange={(e) => setTipAmount(e.target.value)}
              min="11"
              max="100"
              placeholder="20 dollars or more"
            />
            <h2>{alert ? alert : null}</h2>
          </div>
        </div>
        <div className="credit_card_inf" style={{ width: "100%" }}>
          <label htmlFor="" style={{ textAlign: "center" }}>
            Credit Card Information
          </label>
          <Card />
        </div>
        <div className="payment_processing">
          <button disabled={alert ? true : false}>Process Payment</button>
        </div>
      </div>
    </div>
  );
}
