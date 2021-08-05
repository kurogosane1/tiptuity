import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useUserData } from "../context/LogContext";

function CheckLogin({ component: Component, ...rest }) {
  const { logged } = useUserData();

  return (
    <Route
      {...rest}
      render={(props) => {
        // return !logged ? <Component /> : <Redirect to="/dash" />;
        if (logged) {
          return <Redirect to="/dash" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default CheckLogin;
