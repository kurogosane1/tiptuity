import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../../style/Login.css";

export function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  //This is if the Guest Login is selected
  function Guest(e) {
    e.preventDefault();
    setEmail("Guest");
    setPassword("guestpass123");
  }
  //This is toLogUser t0 login
  async function LogUser(e) {
    e.preventDefault();
    const result = await axios
      .post("/Login", { email, password })
      .then((response) => console.log(response))
      .catch((err) => err);
    console.log(result);
    if (result.data.message === "Successfully recognized") {
      history.push("/api");
    } else {
      history.psuh("/Login");
    }
  }

  useEffect(() => {
    setEmail();
    setPassword();
  }, []);

  return (
    <div className="login_page">
      <div className="container_log">
        <div className="headings">
          <h2 style={{ marginBottom: "1rem" }}>User Login</h2>
          <span>Please login to access Dashboard</span>
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
              />
            </div>
            <div className="input_areas button_area">
              <button type="submit" className="log_button">
                Login
              </button>
              <button type="submit" className="guest">
                Guest Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
