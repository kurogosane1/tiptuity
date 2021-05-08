import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

export default function Protect({ path, component: Component, ...rest }) {
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = async () => {
    const result = await axios.get(path).then((response) => {
      return response.data.isAuth;
    });
    if (result === true) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true) {
          return <Component />;
        } else {
          <Redirect to={{ pathname: "/Login" }} />;
        }
      }}
    />
  );
}
