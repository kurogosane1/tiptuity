import React, { useState, useEffect, createContext } from "react";
import faker from "faker";
import axios from "axios";
// import { getDatabaseName } from "../../../Config/Connection";

export const DataContext = createContext();

export default function Data(props) {
  //This is the data that will be shared with the entire
  const [employee, setEmployee] = useState();
  const [client, setClient] = useState();
  const [tipped, setTipped] = useState();

  const GetData = () => {
    axios.get("/api").then((response) => {
      const { Employees, clients, tips } = response.data;
      setEmployee([...Employees]);
      setClient([...clients]);
      setTipped([...tips]);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    GetData();
  }, [tipped]);

  useEffect(() => {}, [employee]);
  useEffect(() => {
    // console.log(tipped);
  }, [tipped]);

  return (
    <DataContext.Provider value={{ employee, client, tipped, GetData, setEmployee }}>
      {props.children}
    </DataContext.Provider>
  );
}
