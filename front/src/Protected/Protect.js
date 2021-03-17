import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

export default function Protect({ path: path, component: Component, ...rest }) {
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = async () => {
    const result = await axios.get(path).then((response) => {
      console.log(response.isAuth);
      return response.data.isAuth;
    });
    console.log(result);
    if (result === true) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    console.log("This ran");
    checkAuth();
  }, []);

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
