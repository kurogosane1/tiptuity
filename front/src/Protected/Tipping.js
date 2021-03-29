import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function Tipping({ path: path, component: Component, ...rest }) {
  // This is for stripe to work with this
  const stripePromise = loadStripe(
    process.env.REACT_APP_Stripe_PUBLISHIBLE_KEY
  );
  const { url } = useRouteMatch();
  // This is employee information
  const [emp, setEmp] = useState();

  const getData = async () => {
    const result = await axios.get(url).then((response) => response.data.data);
    await setEmp(...result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        emp ? (
          <Elements stripe={stripePromise}>
            <Component emp={emp} />
          </Elements>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}
