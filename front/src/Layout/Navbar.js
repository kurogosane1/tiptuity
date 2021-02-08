import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Container,
  Divider,
} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import BusinessIcon from "@material-ui/icons/Business";
import Logo from "../Assets/Logo.svg";

const useStyles = makeStyles((themes) => ({
  root: {
    minHeight: "100%",
    backgroundColor: "blue",
  },
  subList: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center",
  },
  SecondsubList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Navbar() {
  const history = useHistory();
  const classes = useStyles();

  const itemsList = [
    {
      text: "Home",
      icons: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Employees",
      icons: <PeopleOutlineIcon />,
      onClick: () => history.push("/Employees"),
    },
    {
      text: "Clients",
      icons: <BusinessIcon />,
      onClick: () => history.push("/Clients"),
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      space={3}
      style={{
        displat: "flex",
        flexGrow: "1",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        margin: "0 auto",
        border: "none",
        boxShadow: "7px 0px 31px 0px rgba(0,0,0,0.05)",
      }}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <List>
            <ListItem
              button
              onClick={() => {
                history.push("/");
              }}>
              <ListItemIcon>
                <img src={Logo} />
              </ListItemIcon>
              <ListItemText primary="TipTuity" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <WbSunnyIcon />
              </ListItemIcon>
              <ListItemText primary="Darkmode" />
            </ListItem>
            <Divider />
          </List>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <List>
            {itemsList.map((data, index) => {
              const { text, icons, onClick } = data;
              return (
                <ListItem button key={index} onClick={onClick}>
                  <ListItemIcon>{icons}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Container>
    </Grid>
  );
}
