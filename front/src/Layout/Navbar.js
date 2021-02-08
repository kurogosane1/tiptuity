import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Drawer,
  Divider,
  List,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../Assets/Tiptuity.svg";

//icons import
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BusinessIcon from "@material-ui/icons/Business";
import UpdateIcon from "@material-ui/icons/Update";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { grey } from "@material-ui/core/colors";

//This is for themeing purpose
const useStyles = makeStyles((themes) => ({
  //   root: {
  //     backgroundColor: "grey",
  //   },
  drawer: {
    width: "20%",
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  //   drawer: {
  //     width: "0%",
  //     marginLeft: "2rem",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "space-between",
  //   },
  drawerPaper: {
    width: "auto",
    paddingRight: "5rem",
    margin: "0 auto",
    border: "none",
    boxShadow: "7px 0px 31px 0px rgba(0,0,0,0.05)",
  },
  ListItems: {
    // padding: "1rem",
    width: "100%",
    backgroundColor: "red",
    justifyItems: "center",
    alignItems: "center",
  },
  sideBarGap: {
    flexGrow: "1",
  },
}));

export default function Navbar({ dark, setDark }) {
  const classes = useStyles();

  //For linking to the web page
  const history = useHistory();

  const itemsList = [
    {
      text: "Overview",
      onClick: () => history.push("/"),
      icon: <HomeIcon />,
    },
    {
      text: "Employees",
      onClick: () => history.push("/Employees"),
      icon: <PeopleAltIcon />,
    },
    {
      text: "Clients",
      onClick: () => history.push("/Clients"),
      icon: <BusinessIcon />,
    },
    {
      text: "More",
      onClick: () => history.push("/More"),
      icon: <UpdateIcon />,
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      className={classes.drawer}>
      <div className={classes.sideBarGap}>
        <List>
          <ListItem alignItems="flex-start" className={classes.ListItems}>
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

            <ListItemText primary="TipTuity" style={{ textAlign: "center" }} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            alignItems="flex-start"
            button
            onClick={() => setDark(!dark)}>
            <ListItemIcon>
              {dark ? <Brightness5Icon /> : <NightsStayIcon />}
            </ListItemIcon>
            <ListItemText primary={dark ? "Light Mode" : "Dark Mode"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={index} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
