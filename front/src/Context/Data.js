import React, { useState, useEffect, createContext } from "react";
import faker from "faker";

export const DataContext = createContext();

export default function Data(props) {
  //This is the data that will be shared with the entire
  const [employee, setEmployee] = useState([{}]);

  let data = [];
  let tips = [];

  const getFaker = () => {
    for (let i = 1; i <= 100; i++) {
      let firstName = faker.name.findName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      let id = faker.random.uuid();
      let employee_address = faker.address.streetAddress();
      let date_joined = faker.date.past();
      for (let v = 1; v <= 10; v++) {
        let tip = faker.finance.amount();
        let client = faker.company.companyName();
        tips.push({
          tip,
          client,
        });
      }
      data.push({
        firstName,
        lastName,
        email,
        id,
        employee_address,
        date_joined,
        tipsAmount: [...tips],
      });
    }
    setEmployee([...data]);
  };

  useEffect(() => {
    getFaker();
    console.log(employee);
  }, []);

  useEffect(() => {}, [employee]);

  return (
    <DataContext.Provider value={{ employee, getFaker: getFaker }}>
      {props.children}
    </DataContext.Provider>
  );
}
