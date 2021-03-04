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
  const [empTip, setEmpTip] = useState();

  const GetData = () => {
    axios.get("/api").then((response) => {
      const { Employees, clients, tips, TipsEmp } = response.data;
      console.log(TipsEmp);
      setEmployee([...Employees]);
      setClient([...clients]);
      setTipped([...tips]);
      setEmpTip([...TipsEmp]);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        employee,
        client,
        tipped,
        GetData,
        setEmployee,
        setClient,
        empTip,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}
