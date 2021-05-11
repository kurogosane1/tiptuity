import React, { useState, createContext, useReducer } from "react";
import axios from "axios";
// import { getDatabaseName } from "../../../Config/Connection";

export const DataContext = createContext();

//Initial State
// const initialState = {
//   employee: [],
//   client: [],
//   tipped: [],
//   empTip: [],
// };

//Initial Load
// const GetData = async () => {
//   await axios.get("/api").then((response) => {
//     const { Employees, clients, tips, TipsEmp } = response.data;
//     return {
//       employee: [...Employees],
//       client: [...clients],
//       tipped: [...tips],
//       empTip: [...TipsEmp],
//     };
//   });
// };
//Add new Employee
// const addEmp = (state, action) => {
//   const { employee, client, tipped, empTip } = state;
//   return {
//     employee: [...employee, action.payload],
//     client,
//     tipped,
//     empTip,
//   };
// };

//Removing Employees
// const remEmp = (state, action) => {
//   const { employee, client, tipped, empTip } = state;
//   const newEmp = employee.filter((data) => data.id !== action.id);
//   return {
//     employee: [...newEmp],
//     client,
//     tipped,
//     empTip,
//   };
// };

//Add new Tip for employee
// const addTip = (state, action) => {
//   const { employee, client, tipped, empTip } = state;
//   return {
//     employee,
//     client,
//     tipped: [...tipped, action.payload],
//     empTip,
//   };
// };

//Add client
// const addClient = (state, action) => {
//   const { client } = state;
//   return {
//     client: [...client, action.payload],
//     ...state,
//   };
// };

// const dataReducer = (state, action) => {
//   switch (action.type) {
//     case "GET_DATA":
//       return GetData(state);
//     case "ADD_NEW_EMPLOYEE":
//       return addEmp(state, action);
//     case "REMOVE_EMPLOYEE":
//       return remEmp(state, action);
//     case "ADD_CLIENT":
//       return addClient(state, action);
//     case "ADD_TIP":
//       return addTip(state, action);

//     default:
//       return state;
//   }
// };

export default function Data(props) {
  //This is the data that will be shared with the entire
  const [employee, setEmployee] = useState();
  const [client, setClient] = useState();
  const [tipped, setTipped] = useState();
  const [empTip, setEmpTip] = useState();

  // const [data, dispatch] = useReducer(dataReducer, initialState);

  const GetData = async () => {
    await axios.get("/api").then((response) => {
      const { Employees, clients, tips, TipsEmp } = response.data;
      // console.log(response);
      setEmployee([...Employees]);
      setClient([...clients]);
      setTipped([...tips]);
      setEmpTip([...TipsEmp]);
    });
  };

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
