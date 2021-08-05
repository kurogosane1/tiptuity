//Import packages
import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

// Import Styles to be used
import {
  Navbar,
  HeaderContainer,
  UserProfileNav,
  LogOutContainer,
  LinkContainer,
  SpacerNav,
  NavbarCloseIcon,
  MobileCloseIconContainer,
  MainHeaderContainer,
} from "../style";
import Logo from "../Assets/qr-code.svg";

import "boxicons";
import { useUserData } from "../context/LogContext";

function NavbarComp({ width, shrink, isVisible, windowsSize, pathname }) {
  const { setLogged } = useUserData();
  let history = useHistory();
  const whenLarge = {
    initial: {
      width: windowsSize > "760px" ? (isVisible ? "72px" : "260px") : "100vw",
    },
    animate: {
      width: isVisible ? "260px" : "72px",
    },
    exit: { width: isVisible ? "72px" : "260px" },
    transition: { ease: "ease", duration: 2 },
  };

  const whenSmall = {
    initial: { x: isVisible ? "-100%" : 0, stiffness: 6000 },
    animate: { x: isVisible ? "-100%" : 0, stiffness: 6000 },
    exit: { x: "-100%", opacity: 0, stiffness: 5000 },
    transition: { ease: "easeinout", duration: 2 },
  };

  // Links to make it work
  const NavigationLinks = [
    {
      text: "Stats",
      boxIcon: "bx bx-line-chart-down",
      path: "/dash",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash");
        }
        history.push("/dash");
      },
    },
    {
      text: "Employee",
      boxIcon: "bx bxs-user",
      path: "/dash/employee",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash/employee");
        }
        history.push("/dash/employee");
      },
    },
    {
      text: "Employees",
      boxIcon: "bx bx-book-content",
      path: "/dash/emp/details",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash/emp/details");
        }
        history.push("/dash/emp/details");
      },
    },
    {
      text: "Clients",
      boxIcon: "bx bxs-store",
      path: "/dash/clients",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash/clients");
        }
        history.push("/dash/clients");
      },
    },
    {
      text: "Tips",
      boxIcon: "bx bx-money",
      path: "/dash/tips",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash/tips");
        }
        history.push("/dash/tips");
      },
    },
    {
      text: "More",
      boxIcon: "bx bx-library",
      path: "/dash/more",
      onPress: () => {
        if (windowsSize < 760) {
          shrink(!isVisible);
          history.push("/dash/more");
        }
        history.push("/dash/more");
      },
    },
  ];

  // TODO: Make sure to connect with context to get username and replace it at the bottom

  return (
    <AnimatePresence inital={false}>
      <Navbar
        sideBarWidth={windowsSize > 760 ? width : "100vw"}
        variants={windowsSize > 760 ? whenLarge : whenSmall}
        initial={windowsSize > 760 ? whenLarge.initial : whenSmall.initial}
        animate={windowsSize > 760 ? whenLarge.animate : whenSmall.animate}
        exit={windowsSize > 760 ? whenLarge.animate : whenSmall.animate}>
        <MainHeaderContainer>
          <HeaderContainer
            isVisible={isVisible}
            onClick={() => history.push("/dash")}>
            <img src={Logo} alt="main-company-logo" className="main-logo" />
            <span>TipTuity</span>
          </HeaderContainer>
          <MobileCloseIconContainer onClick={() => shrink(!isVisible)}>
            <i className="bx bx-menu"></i>
          </MobileCloseIconContainer>
        </MainHeaderContainer>
        <UserProfileNav isVisible={isVisible}>
          <i className="bx bxs-user-circle"></i>
          <span>John Doe</span>
        </UserProfileNav>
        <NavbarCloseIcon></NavbarCloseIcon>
        {NavigationLinks &&
          NavigationLinks.map((data, index) => {
            return (
              <LinkContainer
                key={index + index + 1}
                isVisible={isVisible}
                onClick={data.onPress}
                isPath={data.path === pathname ? true : false}>
                <i className={data.boxIcon}></i>
                <span>{data.text}</span>
              </LinkContainer>
            );
          })}
        <SpacerNav />
        <LogOutContainer
          isVisible={isVisible}
          onClick={async () => {
            const result = await axios
              .post(
                "/api/Logout",
                { message: "Logout" },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => res.data.message)
              .catch((err) => {
                console.log(err);
              });
            console.log(result);
            setLogged({ type: "LOG_OUT" });
            history.push("/");
          }}>
          <i className="bx bx-log-in"></i>
          <span>Log Out</span>
        </LogOutContainer>
      </Navbar>
    </AnimatePresence>
  );
}

export default NavbarComp;
