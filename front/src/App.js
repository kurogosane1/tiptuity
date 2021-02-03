import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Statistics from "./pages/Stats/Statistics";
import Clients from "./pages/Client/Clients";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./pages/Employees/Employees";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="h-auto bg-gray-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Statistics">
              <Statistics />
            </Route>
            <Route path="/Employee">
              <Employees />
            </Route>
            <Route path="/Client">
              <Clients />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
