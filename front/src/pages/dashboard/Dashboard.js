// Importing Packages
import React, { useState, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, useLocation, useRouteMatch } from "react-router-dom";

// Importing Components
import NavbarComp from "../../components/NavbarComp";
import DashStatFront from "./Dash_Stat_Page";
import DashEmpPage from "./Dash_Emp_Page";
import DashClientPage from "./Dash_Client_Page";
import DashTipsPage from "./Dash_Tips_Page";
import DashMorePage from "./Dash_More_Page";
import NotFound from "../notfound/NotFound";
import DashEmpDetails from "./Dash_Emp_Detail_Page";
import Data from "../../context/DataContext";

// Styles Componenents from Styled-Components
import {
  DashContainer,
  DashContentContainer,
  ChevronContainer,
} from "../../style";
import AlreadyAuthenticated from "../../protected/AlreadyAuthenticated";
import { useUserData } from "../../context/LogContext";

export default function Dashboard() {
  let location = useLocation();
  let { url, path } = useRouteMatch();
  const [isVisible, setisVisible] = useState(true); // State of sidebar
  const [windowsSize, setWindowSize] = useState(window.innerWidth); // Windows Size Change measurement
  const sideBarWidth = isVisible ? "260px" : "72px"; // Default sidebar width when in Desktop page

  // This is to measure the size of the Navbar for measurement
  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowsSize]);

  const { logged } = useUserData();

  return (
    <DashContainer>
      <NavbarComp
        width={sideBarWidth}
        shrink={setisVisible}
        isVisible={isVisible}
        windowsSize={windowsSize}
        pathname={location.pathname}
      />
      <DashContentContainer width={sideBarWidth}>
        <ChevronContainer
          initial={{ rotate: isVisible ? 0 : 180 }}
          animate={{ rotate: isVisible ? 0 : 180 }}
          exit={{ rotate: isVisible ? 180 : 0 }}
          onClick={() => {
            setisVisible(!isVisible);
          }}>
          <i className="bx bxs-chevron-left"></i>
        </ChevronContainer>

        <AnimatePresence exitBeforeEnter initial={false}>
          <Data>
            <Switch key={location.key}>
              <AlreadyAuthenticated
                exact
                path={path}
                component={() => (
                  <DashStatFront windowsSize={windowsSize} logged={logged} />
                )}
              />
              <AlreadyAuthenticated
                path={`${path}/employee`}
                component={() => (
                  <DashEmpPage windowsSize={windowsSize} logged={logged} />
                )}
              />
              <AlreadyAuthenticated
                path={`${path}/emp/details`}
                component={() => (
                  <DashEmpDetails windowsSize={windowsSize} logged={logged} />
                )}
              />
              <AlreadyAuthenticated
                path={`${path}/clients`}
                component={() => <DashClientPage windowsSize={windowsSize} />}
              />
              <AlreadyAuthenticated
                path={`${path}/tips`}
                component={() => (
                  <DashTipsPage windowsSize={windowsSize} logged={logged} />
                )}
              />
              <AlreadyAuthenticated
                path={`${path}/more`}
                component={() => (
                  <DashMorePage windowsSize={windowsSize} logged={logged} />
                )}
              />
              <AlreadyAuthenticated component={NotFound} />
            </Switch>
          </Data>
        </AnimatePresence>
      </DashContentContainer>
    </DashContainer>
  );
}
