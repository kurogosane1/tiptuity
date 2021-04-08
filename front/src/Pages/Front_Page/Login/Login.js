import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import "../../../style/Login.css";

export function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mess, setMess] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  //This is if the Guest Login is selected
  async function Guest(e) {
    e.preventDefault();
    setEmail("guest@email.com");
    setPassword("password");
  }
  //This is toLogUser t0 login
  async function LogUser(e) {
    e.preventDefault();
    setIsLoading(true);

    const result = await axios
      .post("/Login", { email, password })
      .then((user) => {
        return user.data;
      });

    if (result === "Username or Password are incorrect") {
      setMess(result);
      setIsLoading(false);
    }
    if (result === "Successfully Authenticated") {
      setMess();
      setIsLoading(false);
      history.push("/api");
    }
    if (result === "Password is Incorrect") {
      setIsLoading(false);
      setMess(result);
    }
  }

  useEffect(() => {
    setMess();
    console.log("The page reloaded again");
    setEmail();
    setPassword();
  }, []);

  return (
    <div className="login_page">
      <div className="container_log">
        <div className="headings">
          <h2 style={{ marginBottom: "1rem" }}>User Login</h2>
          <span>Please login to access Dashboard</span>
          {mess !== null ? (
            <h2
              style={{ fontFamily: "Poppins", fontSize: "1rem", color: "red" }}>
              {mess}
            </h2>
          ) : null}
        </div>
        <div className="log_container">
          <form onSubmit={LogUser} className="log_form">
            <div className="input_areas log_emails">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="login-email"
                placeholder="Example: youremail@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="input_areas log_pass">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="login-password"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div className="input_areas button_area">
              <button type="submit" className="log_button">
                {isLoading === true ? <CircularProgress /> : "Login"}
              </button>
              <button type="submit" className="guest" onClick={Guest}>
                Guest Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
