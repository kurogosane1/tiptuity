import React, { useState } from "react";
import "../../App.css";
import Navbar from "./Navbar";
import View from "./View";

export default function Index() {
  const [hide, setHide] = useState(false);

  return (
    <div className="App">
      <Navbar hide={hide} setHide={setHide} />
      <i
        className={hide ? "fa fa-chevron-left" : "fa fa-chevron-right col2"}
        aria-hidden="true"
        onClick={() => setHide(!hide)}></i>
      <View />
    </div>
  );
}
