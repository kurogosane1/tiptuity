import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
