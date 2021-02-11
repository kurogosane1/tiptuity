import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import View from "./Layout/View";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar hide={hide} />
        <i
          class={hide ? "fa fa-chevron-left" : "fa fa-chevron-right col2"}
          aria-hidden="true"
          onClick={() => setHide(!hide)}></i>
          
        <View />
      </div>
    </Router>
  );
}

export default App;
