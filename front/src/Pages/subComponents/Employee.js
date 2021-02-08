import React, { useEffect, useState } from "react";
import { Box, Grid, Container } from "@material-ui/core";

export default function Employee({ data }) {
  const [employee, setEmployee] = useState({
    FirstName: "",
    LastName: "",
  });

  const AddEmployee = () => {
    console.log(data);
    if (data) {
      setEmployee({
        FirstName: data.map((info) => info.FirstName),
        LastName: data.map((info) => info.LastName),
        image: data.map((info) => info.image),
        client: data.map((info) => info.client),
        tipAmount: data.map((info) => info.tipAmount),
      });
    } else {
      setEmployee({
        FirstName: "",
        LastName: "",
      });
    }
  };
  useEffect(() => {
    AddEmployee();
  }, [data]);
  return (
    <Box style={{ maxHeight: "60vh", height: "100%,", overflow: "auto" }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={12}>
          <img
            src={employee.image}
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={12}>
          <img
            src={employee.image}
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={12}>
          <h2>{employee.FirstName}</h2>
          <h2>{employee.LastName}</h2>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={12}>
          <h2>{employee.Client}</h2>
          <h2>{employee.tipAmount}</h2>
        </Grid>
      </Grid>
    </Box>
  );
}
// <div style={{ paddingLeft: "2rem", color: "red", backGroundColor: "red" }}>
//   <h2 style={{ paddingLeft: "2rem", color: "red" }}>
//     {employee.FirstName}
//   </h2>
//   <h2 style={{ paddingLeft: "2rem", color: "red" }}>{employee.LastName}</h2>
//   <h2>This is the employee page</h2>
// </div>
