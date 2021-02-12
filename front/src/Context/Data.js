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
      let image = faker.image.people();
      for (let v = 1; v <= 1; v++) {
        let tip = parseFloat(faker.finance.amount());
        let client = faker.company.companyName();
        let date = faker.date.recent();
        tips.push({
          tip,
          client,
          date
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
    console.log(employee);
  }, []);

  useEffect(() => {}, [employee]);

  return (
    <DataContext.Provider value={{ employee, getFaker: getFaker }}>
      {props.children}
    </DataContext.Provider>
  );
}
