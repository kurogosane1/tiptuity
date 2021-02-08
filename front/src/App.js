import "./App.css";
import { useState } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Navbar from "./Layout/Navbar";
import View from "./Layout/View";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

//This is for Themeing Purpose
const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    maxWidth: "100vw",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const LightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  //Bring ing in the theme from the useStyles outside the function
  const classes = useStyles();
  //Createing the state where the style can be changed on click
  const [darkMode, setDark] = useState(false);

  //creating the theme
  const preferTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      transitions: {
        easing: {
          easeIn: "1s",
        },
      },
    },
    transitions: {
      easing: "easeOut",
    },
  });
  return (
    <ThemeProvider theme={preferTheme}>
      <Paper className={classes.root}>
        <Router>
          <Navbar dark={darkMode} setDark={setDark} />
          <View />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
