import { makeStyles, Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import View from "./Layout/View";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((themes) => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
  },
}));

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const classes = useStyles();
  return (
    <Router>
      <Paper>
        <Grid container justify="center" align="center">
          <Grid item xs={3} sm={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9} sm={9}>
            <View
              style={{ minHeight: "100vh" }}
              data={employeeData}
              setEmployeeData={setEmployeeData}
            />
          </Grid>
        </Grid>
      </Paper>
    </Router>
  );
}

export default App;
