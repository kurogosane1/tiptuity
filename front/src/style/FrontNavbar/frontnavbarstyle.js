import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBarContainer = styled.div`
  /* position: -webkit-sticky; */
  position: fixed;
  font-family: "Poppins", sans-serif;
  top: 0;
  width: 100%;
  z-index: 99999999999;
  background-color: #006726;
  color: #f5f5f7;
  /* @media (max-width: 960p) {
    display: none;
  } */
`;

export const NavBarSideContainer = styled(NavBarContainer)`
  display: none;

  @media (max-width: 960px) {
    display: block;
    overflow: none;
    overflow-y: none;
    position: fixed;
    top: 100;
    right: ${(props) => props.side};
    transition: ease 0.25s;

    height: 100%;
    overflow: none;
    z-index: 1;
  }
`;

export const NavBlock = styled(motion.div)`
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #006726;
  max-width: 1400px;
  /* width: 100%; */
  /* @media (max-width: 960px) {
    display: none;
  } */
`;

export const SideBlock = styled(motion.div)`
  display: none;
  @media (max-width: 960px) {
    position: relative;
    box-sizing: border-box;
    width: 100vw;
    height: 100%;
    right: ${(props) => props.size};
    top: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #006726;
  }
`;

export const FrontLogo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  :hover {
    background-color: #aaffc9;
    border-radius: 12px;
  }
`;

export const SideLogo = styled(FrontLogo)`
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FrontLogoImage = styled(motion.img)`
  height: 30px;
  width: 30px;
`;
export const FrontLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-right: 1rem;
  li > a {
    text-decoration: none;
    color: #f5f5f7;
    padding: 10px;
  }

  li :hover {
    background-color: #aaffc9;
    border-radius: 12px;
    color: #006726;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const SideLinks = styled(FrontLinks)`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    overflow: hidden;
    position: relative;

    li {
      border-radius: 12px;
      cursor: pointer;
      /* background-color: red; */
      width: 80%;
      padding: 20px;
      color: #ffffff;
    }
    li:hover {
      background-color: #aaffc9;
      color: #006726;
    }
  }
`;

export const SpacerSideNav = styled.div`
  flex: 0.1;
`;

export const Cross = styled.li`
  display: none;
  @media (max-width: 960px) {
    display: block;
    padding: 2px;
    font-size: 28px;
    cursor: pointer;
    transition: ease 0.25s;
    :hover {
      border-radius: 12px;
      background-color: #aaffc9;
      color: #006726;
    }
  }
`;
