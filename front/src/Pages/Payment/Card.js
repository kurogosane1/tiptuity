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
              fontFamily: "Poppins, sans-serif",
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
