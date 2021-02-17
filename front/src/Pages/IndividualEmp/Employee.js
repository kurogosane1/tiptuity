import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function Employee() {
  const location = useLocation();
  const history = useHistory();

  useState(() => {
    console.log(location.state);
  }, []);

  return (
    <div>
      <button onClick={() => history.goBack()}>Go BacK</button>
      <h2>This is the individual employee list</h2>
    </div>
  );
}
