import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

//This is an individual employee payment section
//For paying employees that have not been paid at all

export function Ind_Emp() {
  //Get the param
  const location = useLocation();

  //Getting the data based on the user information provided to us

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>This is a payment section</h2>
    </div>
  );
}
