import React from "react";
import { Route, Redirect } from "react-router-dom";

function AlreadyAuthenticated({ component: Component, logged, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !logged ? <Component {...props} /> : <Redirect to="/dash" />;
      }}
    />
  );
}

export default AlreadyAuthenticated;
