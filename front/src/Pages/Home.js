import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>This is the Home side</h2>
    </div>
  );
}
