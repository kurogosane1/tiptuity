import { useState, createContext } from "react";

export const LoadingContext = createContext();

function IsLoading(props) {
  //This is the loading state
  const { loading, setLoading } = useState(false);

  return (
    <LoadingContext.Provider value={(loading, setLoading)}>
      {props.childres}
    </LoadingContext.Provider>
  );
}

export default IsLoading;
