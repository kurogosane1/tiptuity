import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import View from "./Layout/View";
import { BrowserRouter as Router } from "react-router-dom";
import Data from "./Context/Data";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <Data>
      <Router>
        <div className="App">
          <Navbar hide={hide} />
          <i
            className={hide ? "fa fa-chevron-left" : "fa fa-chevron-right col2"}
            aria-hidden="true"
            onClick={() => setHide(!hide)}></i>
          <View />
        </div>
      </Router>
    </Data>
  );
}

export default App;
