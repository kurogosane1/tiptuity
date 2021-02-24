import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Data from "./Context/Data";
import Index from "./Layout/Dashboard/Index";
import { Emp_Switch } from "./Layout/Payment/Emp_Switch";

function App() {
  return (
    <Data>
      <Router>
        <Emp_Switch />
      </Router>
    </Data>
  );
}

export default App;
