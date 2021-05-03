import React, { useState } from "react";
import "../../../style/FrontPage.css";
import Logo from "../../../Assets/qr-code.svg";
import { NavLink } from "react-router-dom";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="front-nav">
      <div className="navblock">
        <div className="front-logo">
          <img src={Logo} className="Nav-Logo" alt="main company logo" />
          <span className="logo-title">TipTuity</span>
        </div>
        <ul className="front-link">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#information">Information</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#mobile">Mobile</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li className="mainLink">
            <NavLink
              to="/Login"
              style={{
                textDecoration: "none",
                fontFamily: "Poppins",
                color: "black",
              }}>
              Log In
            </NavLink>
          </li>
          <li className="demoLink">
            <NavLink
              to="/Login"
              style={{
                textDecoration: "none",
                fontFamily: "Poppins",
                color: "white",
              }}>
              Demo
            </NavLink>
          </li>
        </ul>
        <div
          className={open ? "minBurgerOpen" : "minBurger"}
          onClick={() => {
            setOpen(!open);
          }}></div>
      </div>
      <div className={open ? "minNavblock" : "minNavblock_closed"}>
        <ul className="minBurgerLinks">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#information">Information</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#mobile">Mobile</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <NavLink
              to="/Login"
              style={{
                textDecoration: "none",
                fontFamily: "Poppins",
              }}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              style={{
                textDecoration: "none",
                fontFamily: "Poppins",
              }}>
              Demo
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
