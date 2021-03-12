import React from "react";
import "../../../style/Footer.css";
import Logo from "../../../Assets/qr-code.svg";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <div className="front-nav">
      <div>
        <img src={Logo} className="Nav-Logo" />
        <span>TipTuity</span>
      </div>
      <ul>
        <li>
          <NavLink
            to="/Login"
            style={{
              textDecoration: "none",
              fontFamily: "Poppin",
              fontSize: "1.2rem",
              color: "#f5f5f7",
            }}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
