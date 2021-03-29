import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useParams } from "react-router-dom";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "../../style/Ind_Emp.css";
import Card from "./Card";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

//This is an individual employee payment section
//For paying employees that have not been paid at all

export default function Ind_Emp({ emp }) {
  //Get the param
  const { url } = useRouteMatch();
  let params = useParams();

  const history = useHistory();
  const [emp, setEmp] = useState();
  const [tip, setTipAmount] = useState(0);
  const [alert, setAlert] = useState(); //This is incase the user inputs string instead of numbers
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState();
  const [zipcode, setZipCode] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  //for stripe related
  const stripe = useStripe();
  const element = useElements();

  //For Dialog
  const [open, setOpen] = useState(false);

  //Getting the data based on the user information provided to us
  const getData = async () => {
    console.log("This ran");
    let info = params.id;
    console.log(info);
    const result = await axios.get(url).then((response) => response.data.data);
    await setEmp(...result);
  };

  const handleClose = () => {
    setOpen(!open);
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
    const cardElement = element.getElement("card");
    const tipNumber = uuidv4();
    //This below is for billing address
    const Billing = {
      amount: tip,
      client_id: "02017c3e-3366-419e-92a6-20edcd17afb8",
      emp_id: emp.id,
      customer_name: name,
      billing_details: {
        address: {
          city,
          country: "US",
          line1: address,
          line2: address2,
          postal_code: zipcode,
          state: "TX",
        },
      },
    };

    try {
      //Get Client secret
      const paymentIntent = await axios.post(url, Billing).then((res) => {
        return res.data;
      });

      console.log(paymentIntent);
      //Create PaymentMethod Object
      const paymentMethodObj = await stripe
        .createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: Billing.billing_details,
        })
        .then((res) => {
          if (res.error) {
            console.log(res.error);
          } else {
            return res;
          }
        });
      console.log(paymentMethodObj);
      //Confirm Payment Method
      const confirmPayment = await stripe
        .confirmCardPayment(paymentIntent, {
          payment_method: paymentMethodObj.paymentMethod.id,
        })
        .then((response) => response);

      console.log(confirmPayment);
      if (confirmPayment.error) {
        console.log(confirmPayment.error);
        setIsProcessing(false);
      }
      if (confirmPayment.paymentIntent.status === "succeeded") {
        return history.push("/Success", { data: tip, emp });
      } else {
        setIsProcessing(false);
        return history.push("/Failure", { data: tip, emp });
      }
    } catch (err) {
      setIsProcessing(false);
    }
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    console.log(url);
    setAlert();
    // getData();
    setEmp(emp);
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
            <input
              type="text"
              name="Biller_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="payment_input_areas column2">
            <label htmlFor="Biller_address">Billing Address</label>
            <input
              type="text"
              name="Biller_address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="payment_input_areas column3">
            <label htmlFor="Biller_address2">Billing Address 2</label>
            <input
              type="text"
              name="Biller_address2"
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="payment_input_areas column4">
            <label htmlFor="Biller_city">City</label>
            <input
              type="text"
              name="Biller_city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="payment_input_areas column5">
            <label htmlFor="Biller_zipcode" maxLength="5">
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
          <button
            disable={isProcessing}
            onClick={() => {
              setOpen(true);
            }}>
            {!isProcessing ? "Process Payment" : "Processing..."}
          </button>
          {/* <button disabled={alert ? true : false}>Process Payment</button> */}
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <DialogTitle>{`Please confirm`}</DialogTitle>
        <DialogContent>
          <span style={{ textAlign: "center" }}>
            Please Confirm You agree to pay {emp ? emp.firstname : ""}{" "}
            {emp ? emp.lastname : ""}{" "}
          </span>
          <br />
          <span style={{ textAlign: "center" }}>
            Of the amount of {formatter.format(tip)}
          </span>
        </DialogContent>
        <DialogActions>
          <button
            className="ActionButton"
            onClick={PaymentProcess}
            disabled={tip === 0 ? true : false}>
            {tip === 0 ? "Cannot Proceed with $0" : "Agree"}
          </button>
          <button className="DisagreeButton" onClick={handleClose}>
            Disagree
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
