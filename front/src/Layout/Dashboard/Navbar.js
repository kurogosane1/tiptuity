import React from "react";
import { useHistory } from "react-router-dom";
import "../../style/Navbar.css";
import "../../App.css";
import "boxicons";
import logo from "../../Assets/Logo.svg";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ListItemText: {
    fontFamily: "Poppins",
  },
}));

export default function Navbar({ hide }) {
  const history = useHistory();
  const classes = useStyles();

  const itemsList = [
    {
      text: "Stats",
      icons: <i className="fa fa-line-chart fa-2x" aria-hidden="true"></i>,
      onClick: () => history.push("/api"),
    },
    {
      text: "Tips",
      icons: <i className="fa fa-money fa-2x" aria-hidden="true"></i>,
      onClick: () => history.push("/api/tips"),
    },
    {
      text: "Employees",
      icons: <i className="fa fa-user fa-2x" aria-hidden="true"></i>,
      onClick: () => history.push("/api/Employees"),
    },
    {
      text: "Clients",
      icons: <i className="fa fa-building fa-2x" aria-hidden="true"></i>,
      onClick: () => history.push("/api/Clients"),
    },
  ];

  return (
    <>
      <header className={hide ? "topNav" : "topNav-hide"}>
        <List className="main-heading">
          {hide ? (
            <>
              <ListItem
                button
                className="nav_buttons "
                style={{ backgroundColor: "transparent" }}>
                <ListItemIcon>
                  <i className="fa fa-qrcode fa-3x" aria-hidden="true"></i>
                </ListItemIcon>
                <ListItemText
                  primary="TipTuity"
                  className="main-heading-text"
                  classes={{ primary: classes.ListItemText }}
                />
              </ListItem>
              <i className="fa fa-chevron-left fa-2x abso" id="abso" />
            </>
          ) : (
            <>
              <ListItem
                button
                className="nav_buttons outside"
                style={{ backgroundColor: "transparent" }}>
                <ListItemIcon className="nav_buttons_hidden">
                  <i className="fa fa-qrcode fa-3x" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
              <i className={"fa fa-chevron-left fa-2x abso-hide"} />
            </>
          )}
        </List>

        <List className="list-style">
          {hide
            ? itemsList.map((data, index) => {
                return (
                  <ListItem
                    button
                    onClick={data.onClick}
                    key={index}
                    className="nav_buttons"
                    style={{ backgroundColor: "transparent" }}>
                    <ListItemIcon>{data.icons}</ListItemIcon>
                    <ListItemText
                      primary={data.text}
                      classes={{ primary: classes.ListItemText }}
                    />
                  </ListItem>
                );
              })
            : itemsList.map((data, index) => {
                return (
                  <ListItem
                    button
                    onClick={data.onClick}
                    key={index}
                    className="nav_buttons"
                    style={{ backgroundColor: "transparent" }}>
                    <ListItemIcon className="nav_buttons_hidden2">
                      {data.icons}
                    </ListItemIcon>
                  </ListItem>
                );
              })}
        </List>
        <List className="list-style">
          {hide ? (
            <ListItem
              button
              className="nav_buttons"
              style={{ backgroundColor: "transparent" }}>
              <ListItemIcon>
                <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText
                primary="Log Out"
                classes={{ primary: classes.ListItemText }}
              />
            </ListItem>
          ) : (
            <ListItem
              button
              className="nav_buttons"
              style={{ backgroundColor: "transparent" }}>
              <ListItemIcon className="nav_buttons_icons">
                <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
              </ListItemIcon>
            </ListItem>
          )}
        </List>
      </header>
      <div className="menu" id="menu"></div>
    </>
  );
}
