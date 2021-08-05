import React, {
  useState,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import axios from "axios";

import FrontLoadingPage from "../components/Loading/FrontLoadingPage";

const DataContext = createContext();

export const useGlobalData = () => useContext(DataContext);

const initialEmployee = [];
const initialClient = [];
const initialTips = [];

const GetTipData = async (state) => {
  const result = await axios
    .get("/api/dash/Tips")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));

  return [...result.tipped];
};

// This is to add a new Employee
const NewEmployee = async (state, payload) => {
  const result = await axios
    .post("/api/dash/emp/details", { ...payload })
    .then((res) => res.data)
    .catch((err) => console.log(err));

  console.log([...state, result]);
  return [...state, result];
};

// This is the reducer for Employee
const empReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL_DATA":
      return [...state];
    case "GET_MAIN_DATA":
      return GetTipData(state);
    case "GET_ORIGINAL_DATA":
      return [...action.payload];
    case "ADD_NEW_EMPLOYEE":
      return NewEmployee(state, action.payload);
    default:
      return state;
  }
};

// This will be the reducer for Clients
const clientsReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL_DATA":
      return () => {
        return [...state];
      };
    case "GET_ORIGINAL_DATA":
      return [...action.payload];
    case "ADD_NEW_CLIENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

// This will  be the reducer for Tips Section
const tipReducer = (state, action) => {
  switch (action.type) {
    case "GET_MAIN_DATA":
      return GetTipData();
    case "SHOW_ALL_DATA":
      return [...state];
    case "GET_ORIGINAL_DATA":
      return [...action.payload];
    case "ADD_NEW_TIP":
      return [...state, action.payload];
    default:
      return state;
  }
};

function Data({ children }) {
  const [employee, setEmployee] = useReducer(empReducer, initialEmployee);
  const [tip, setTip] = useReducer(tipReducer, initialTips);
  const [client, setClient] = useReducer(clientsReducer, initialClient);
  const [loading, setLoading] = useState(false);

  // This is for getting new Employee Data
  const GetAllData = async () => {
    setLoading(true);

    const result = await axios
      .get("/api/dash")
      .then((results) => {
        return results.data;
      })
      .catch((err) => console.log(err));

    if (result) {
      setEmployee({ type: "GET_ORIGINAL_DATA", payload: result.emplo });
      setTip({ type: "GET_ORIGINAL_DATA", payload: result.tipped });
      setClient({
        type: "GET_ORIGINAL_DATA",
        payload: result.client,
      });
      setLoading(false);
    } else {
      setLoading(false);

      return;
    }
  };

  useEffect(() => {
    GetAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        GetAllData,
        tip,
        client,
        employee,
        setEmployee,
        setTip,
        setClient,
      }}>
      {loading ? <FrontLoadingPage /> : children}
    </DataContext.Provider>
  );
}

export default Data;
