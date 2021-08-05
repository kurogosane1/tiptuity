// Import Packages
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "boxicons";

//Import Components for pages
import Main from "./pages/front_page/Main";
import NotFound from "./pages/notfound/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Tipper from "./pages/paymentSection/Tipper";
import Signup from "./pages/Signup/Signup";
import LogContext from "./context/LogContext";
import AOS from "aos";
import "aos/dist/aos.css"; //

// Protected Routes
import CheckLogin from "./protected/CheckLogin";
import ScrollToTop from "./ScrollToTop";

function App() {
  // This is for stripe to work with this
  const stripePromise = loadStripe(
    process.env.REACT_APP_Stripe_PUBLISHIBLE_KEY
  );

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          path="/pay/:id"
          component={() => {
            return (
              <Elements stripe={stripePromise}>
                <Tipper />
              </Elements>
            );
          }}
        />
        <LogContext>
          <CheckLogin path="/Login" component={Login} />
          <CheckLogin path="/signup" component={Signup} />
          <Route path="/dash" component={Dashboard} />
        </LogContext>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
