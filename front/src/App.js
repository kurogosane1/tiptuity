import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Data from "./Context/Data";
import { EmpSwitch } from "./Layout/Payment/Emp_Switch";
import AOS from "aos";
import "aos/dist/aos.css"; //
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Data>
      <Router>
        <ScrollToTop />
        <EmpSwitch />
      </Router>
    </Data>
  );
}

export default App;
