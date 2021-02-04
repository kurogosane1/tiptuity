import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Navbar() {
  //State to make the selection and change color
  const [selection, setSelection] = useState(0);

  //This is the function to change
  const changeState = (e) => {
    const value = e.target.name;
    setSelection(value);
  };

  return (
    <nav className="Navbar">
      <div className="qrcode logo">
        <svg
          style={{ width: "2rem", height: "2rem" }}
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
        </svg>

        <h2 className="Tiptuity">Tiptuity</h2>
      </div>
      <ul className="links">
        <li>
          <NavLink
            name="1"
            onClick={(e) => {
              changeState(e);
            }}
            className={selection === "1" ? "NavLink stats" : "NavLink"}
            to="/Stats">
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            name="2"
            onClick={(e) => {
              changeState(e);
            }}
            className={selection === "2" ? "NavLink stats" : "NavLink"}
            to="/Employees">
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink
            name="3"
            onClick={(e) => {
              changeState(e);
            }}
            className={selection === "3" ? "NavLink stats" : "NavLink"}
            to="/Clients">
            Clients
          </NavLink>
        </li>
      </ul>
      <div className="social">
        <NotificationsNoneIcon className="social-bell" fontSize="large" />
        <MailOutlineIcon className="email-icon" fontSize="large" />

        <Avatar
          style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
          className="Avatar"
        />
      </div>
    </nav>
  );
}
