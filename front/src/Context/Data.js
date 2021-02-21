import React, { useState, useEffect, createContext } from "react";
import faker from "faker";
import axios from "axios";
// import { getDatabaseName } from "../../../Config/Connection";

export const DataContext = createContext();

export default function Data(props) {
  //This is the data that will be shared with the entire
  const [employee, setEmployee] = useState([{}]);
  const [client, setClient] = useState();

  let data = [];
  let tips = [];
  let clients = [];

  const GetData = () => {
    axios.get("/api").then((response) => {
      console.log(response);
      const { Employees, clients, tips } = response.data;
      setClient([...clients]);
    });
  };

  const getFaker = () => {
    for (let i = 1; i <= 100; i++) {
      let firstName = faker.name.firstName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      let id = faker.random.uuid();
      let employee_address = faker.address.streetAddress();
      let date_joined = faker.date.past();
      let image = faker.image.people();
      for (let v = 1; v <= 1; v++) {
        let tip = parseFloat(faker.finance.amount());
        let client = faker.company.companyName();
        let date = faker.date.recent();
        tips.push({
          tip,
          client,
          date,
        });
      }
      data.push({
        firstName,
        lastName,
        email,
        id,
        image,
        employee_address,
        date_joined,
        tipsAmount: [...tips],
      });
    }
    setEmployee([...data]);
  };

  useEffect(() => {
    getFaker();
    GetData();
    console.log(employee);
  }, []);

  useEffect(() => {}, [employee]);
  useEffect(() => {
    console.log(client);
  }, [client]);

  return (
    <DataContext.Provider value={{ employee, getFaker: getFaker, client }}>
      {props.children}
    </DataContext.Provider>
  );
}
