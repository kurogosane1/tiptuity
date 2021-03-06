import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

export default function Card() {
  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: "18px",
              color: "#171718",
              // backgroundColor: "#ddddde",
              // paddingTop: "15px",
              // paddingBottom: "15px",
              // paddingRight: "3rem",
              // paddingLeft: "3rem",
              // boxShadow: "13px 13px 26px #d0d0d2, -13px -13px 26px #ffffff",
              fontFamily: "Poppins, sans-serif",
              // border: "none",
              // borderRadius: "9px",
              // width: "100%",
            },
            invalid: {
              iconColor: "red",
              color: "red",
            },
          },
        }}
        className="StripeElement"
      />
    </div>
  );
}
