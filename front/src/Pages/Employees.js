import React, { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import {
  makeStyles,
  Container,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
} from "@material-ui/core";
import faker from "faker";
import Employee from "./subComponents/Employee";
import Chart from "chart.js";
// const myChart = new Chart(ctx, {...});

const useStyles = makeStyles((themes) => ({
  root: {},
  container: {},
}));

const generateEmployees = () => {
  let employees = [];

  for (let id = 1; id <= 100; id++) {
    let FirstName = faker.name.firstName();
    let LastName = faker.name.lastName();
    let image = faker.image.people();
    let client = faker.company.companyName();
    let tipAmount = faker.finance.amount();
    let id = faker.random.uuid();

    employees.push({
      id,
      FirstName,
      LastName,
      image,
      client,
      tipAmount: parseInt(tipAmount),
    });
  }
  return employees;
};

export default function Employees({ data, setEmployeeData }) {
  const [employees, setEmployees] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  useEffect(() => {
    let emp = generateEmployees();
    setEmployees([...emp]);
  }, []);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {}, [first, last]);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}>
      <Grid container justify="center" align="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ width: "100%", height: "100%" }}>
            <h2>Total Tips received</h2>
            <span>
              {" "}
              {formatter.format(
                employees.reduce((acc, curr) => acc + curr.tipAmount, 0)
              )}
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ width: "100%", height: "100%" }}>
            <h2>Number of Employees</h2>
            <span>{employees.length}</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ width: "100%", height: "100%" }}>
            <h2>Number of Employees</h2>
            <span>{employees.length}</span>
          </Paper>
        </Grid>
      </Grid>

      {/* This is where the details are shown */}
      {/* Makesure to make this into a seperate component */}
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box style={{ maxHeight: "80vh", width: "100%", overflow: "auto" }}>
            {employees.map((data, index) => {
              const { FirstName, LastName, image, tipAmount } = data;
              return (
                <List>
                  <Paper elevation={3}>
                    <ListItem
                      key={index}
                      button
                      component={Link}
                      to={`/Employees/${FirstName}${LastName}`}
                      onClick={() => {
                        setFirst(FirstName);
                        setLast(LastName);
                      }}>
                      <ListItemIcon>
                        <Avatar src={image} height={100} width={100} />
                      </ListItemIcon>
                      <ListItemText
                        primary={FirstName + " " + LastName}
                        secondary={`$${tipAmount}`}
                      />
                    </ListItem>
                  </Paper>
                </List>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Switch>
            <Route path={`/Employees/${first}${last}`}>
              <Employee
                data={employees.filter(
                  (info) =>
                    (info.FirstName === first) & (info.LastName === last)
                )}
                style={{ height: "100vh" }}
              />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
}

{
  /* <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4} style={{ marginTop: "1rem" }}>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Paper elevation={3}>
              <h2>
                {formatter.format(
                  employees.reduce((acc, curr) => acc + curr.tipAmount, 0)
                )}
              </h2>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Container>
            <Paper elevation={3}>
              <h2>{employees.length}</h2>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Container>
            <h2>{employees.length}</h2>
          </Container>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box
            style={{
              maxHeight: "20vh",
              overflow: "auto",
              marginLeft: "1rem",
              border: "solid black",
            }}>
            {employees.map((data, index) => {
              const { FirstName, LastName, image, tipAmount } = data;
              return (
                <List>
                  <Paper elevation={3}>
                    <ListItem
                      key={index}
                      button
                      component={Link}
                      to={`/Employees/${FirstName}${LastName}`}
                      onClick={() => {
                        setFirst(FirstName);
                        setLast(LastName);
                      }}>
                      <ListItemIcon>
                        <Avatar src={image} height={100} width={100} />
                      </ListItemIcon>
                      <ListItemText
                        primary={FirstName + " " + LastName}
                        secondary={`$${tipAmount}`}
                      />
                    </ListItem>
                  </Paper>
                </List>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
            <Switch>
              <Route path={`/Employees/${first}${last}`}>
                <Employee
                  data={employees.filter(
                    (info) =>
                      (info.FirstName === first) & (info.LastName === last)
                  )}
                  style={{ height: "100vh" }}
                />
              </Route>
            </Switch>
          </Box>
        </Grid>
      </Grid> */
}
