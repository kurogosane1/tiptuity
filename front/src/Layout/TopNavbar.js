import React from "react";
import { Avatar } from "@material-ui/core";
import "../App.css";
import "../style/topNavbar.css";

export default function TopNavbar() {
  return (
    <nav className="top-Navbar">
      <div className="nav-sandwich">
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div className="nav-links">
        <span>icons</span>
        <span>icons</span>
        <Avatar />
      </div>
    </nav>
  );
}
