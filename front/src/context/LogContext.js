import React, {
  useState,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";

const UserContext = createContext();

export const useUserData = () => useContext(UserContext);

const isLoggedIn = false;

// This is the reducer for User Section
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = true;
      localStorage.setItem("123213130", JSON.stringify(state));
      return state;
    case "LOG_OUT":
      state = false;
      localStorage.removeItem("123213130");
      return state;
    case "USER_IS_ALREADY_LOGGEDIN":
      state = true;
      return state;
    default:
      return state;
  }
};

function LogContext({ children }) {
  const [logged, setLogged] = useReducer(userReducer, isLoggedIn);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let check = JSON.parse(localStorage.getItem("123213130"));

    if (check) {
      setLogged({ type: "LOG_IN" });
      setLoading(false);
    }
    setLoading(false);
    return null;
  }, []);

  return (
    <UserContext.Provider value={{ logged, setLogged }}>
      {loading ? <h1>Loading</h1> : children}
    </UserContext.Provider>
  );
}

export default LogContext;
