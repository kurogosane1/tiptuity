import "./App.css";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./Pages/Employees";
import Clients from "./Pages/Clients";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Stats">
            <Statistics />
          </Route>
          <Route path="/Employees">
            <Employees />
          </Route>
          <Route path="/Clients">
            <Clients />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
