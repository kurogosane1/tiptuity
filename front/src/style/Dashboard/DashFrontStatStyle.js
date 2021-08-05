import styled from "styled-components";
import { motion } from "framer-motion";

// Main container for Dashboard
export const MainDashFrontCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  /* background-color: red; */
  width: 100%;
  overflow-x: "none";

  @media (max-width: 2280) {
    flex-wrap: wrap;
  }
`;

//Main loading page
export const MainDashFrontMain = styled(MainDashFrontCont)`
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 95%;
`;

// Rows for the front Page dash page
export const DashStatRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
  margin: 20px;
  gap: 20px;

  @media (max-width: 760px) {
    min-height: 100vh;
    align-items: stretch;
  }
`;

export const DashStatRow2 = styled(DashStatRow)`
  height: 30vh;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  margin-bottom: 20px;
  @media (max-width: 2280px) {
    min-height: 100vh;
    height: 100%;
  }
  @media (max-width: 760px) {
    min-height: 100vh;
    height: 100%;
  }
`;

// Dashboard Stats for Front Page where graphs are going to show
export const DashStatCont = styled.div`
  height: 20vh;
  padding: 15vh;
  border-radius: 12px;
`;
