import styled from "styled-components";
import { motion } from "framer-motion";

export const Navbar = styled(motion.div)`
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  position: fixed;
  overflow-x: none;
  top: 0;
  left: 0px;
  width: ${(props) => props.sideBarWidth};
  font-family: "Poppins", sans-serif;
  background-color: #006726;
  border: none;
  outline: none;
  box-shadow: "";
  box-shadow: 17px 0px 22px -10px rgba(0, 0, 0, 0.22);
  @media (max-width: 760px) {
    position: fixed;
    box-shadow: none;
    z-index: 9999;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
    justify-content: space-evenly;
  }
`;

export const NavbarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  /* width: 100%; */
  @media (max-width: 760px) {
    justify-content: space-evenly;
    overflow-y: hidden;
    overflow-x: hidden;
  } ;
`;

export const NavbarCloseIcon = styled.div`
  position: absolute;
  top: 30px;
  /* overflow: visible; */
  right: -20px;
  font-size: 24px;
  color: green;
  z-index: 99999999999;
`;

// This is for the items inside the div
export const NavLinkCont = styled(motion.div)`
  line-height: 1;
  display: flex;

  & > ul {
    list-style: none;
    flex-direction: column;
    justify-content: space-between;
  }
  & > ul > li {
    cursor: pointer;
    height: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 100%;
    text-align: center;
    margin: 0 5px;
    transition: all 0.4s ease;
    padding: 5px;
    border-radius: 20px;
  }

  & > ul > li:hover {
    background-color: #aaffc9;
    color: #006726;
  }

  & > ul > li:hover::before {
    content: "";
    position: absolute;
    height: 20px;
    top: 0;
    right: 20px;
    background-color: white;

    /* color: #006726; */
  }

  & > ul > li > i {
    width: 72px;
    font-size: 25px;
    color: "white";
    margin-right: 10px;
  }
  & > ul > li > i:hover {
    width: 72px;
    color: #006726;
    border-radius: 20px;
  }
  & > ul > li > span {
    text-align: left;
    width: 100%;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
  }
`;

// Where the header Title and Logo is going to go
export const MainHeaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  gap: 10px;

  @media (min-width: 760px) {
    gap: 0;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(motion.div)`
  line-height: 1;
  padding: 5px 13px 5px 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 0 5px;

  img {
    width: ${({ isVisible }) => (!isVisible ? "35px" : "43px")};
    margin-right: ${({ isVisible }) => (!isVisible ? 0 : "10px")};
    margin-left: ${({ isVisible }) => (!isVisible ? 0 : "20px")};
  }
  span {
    font-size: 28px;
    font-weight: 600;
    display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
  }

  &:hover {
    background-color: #aaffc9;
    color: #006726;
  }

  @media (max-width: 760px) {
    width: auto;
    span {
      display: block;
    }
    img {
      margin-right: 10px;
      margin-left: 20px;
    }
  }
`;

// This is the header container when in mobile mode
export const MobileCloseIconContainer = styled(motion.div)`
  cursor: pointer;
  display: none;
  color: #006726;
  font-size: 35px;

  @media (max-width: 760px) {
    border-radius: 10px;

    display: block;
    color: white;
    &:hover {
      background-color: #aaffc9;
      color: #006726;
    }
  }
`;

// This is where the User Header and logo will show
export const UserProfileNav = styled(motion.div)`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 10px 5px 10px 3px;
  margin-top: 40px;
  color: white;

  background-color: #208746;
  width: 100%;
  i {
    /* width: 72px; */
    font-size: ${({ isVisible }) => (!isVisible ? "45px" : "55px")};
    margin-right: ${({ isVisible }) => (!isVisible ? 0 : "10px")};
    margin-left: ${({ isVisible }) => (!isVisible ? 0 : "20px")};
  }
  span {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-right: 20px;
    color: white;
    display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
  }
  @media (max-width: 760px) {
    span {
      display: block;
    }
    i {
      margin-right: 20px;
      margin-left: 20px;
    }
  }
`;
// This is where the logout section would be
export const LogOutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  padding: 5px;
  height: 50px;
  color: white;

  span {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-right: 20px;
    display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
    font-weight: 400;
  }

  i {
    width: 72px;
    font-size: 25px;
    margin-left: 5px;

    margin-right: 10px;
    text-align: center;
  }
  :hover {
    background-color: #aaffc9;
    color: #208746;
  }
  @media (max-width: 760px) {
    span {
      display: block;
    }
  }
`;

// This experimental section
export const LinkContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  padding: 5px;
  height: 50px;

  background-color: ${({ isPath }) => (isPath ? "#aaffc9" : "#208746")};
  color: ${({ isPath }) => (isPath ? "#208746" : "#ffffffff")};
  span {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-right: 20px;
    font-weight: 400;
    display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
  }

  i {
    width: 72px;
    font-size: 25px;
    margin-left: 5px;

    margin-right: 10px;
    text-align: center;
  }
  :hover {
    background-color: #aaffc9;
    color: #208746;
  }
  @media (max-width: 760px) {
    span {
      display: block;
    }
  }
`;

// This is to create a space between
export const SpacerNav = styled.div`
  flex: 2;
`;
