import styled from "styled-components";
import { motion } from "framer-motion";

// Main container for Dashboard
export const MainDashEmpCont = styled(motion.div)`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0082ba;
  min-height: 100vh;
  width: 100%;
`;

// Rows for the front Page dash page
export const DashEmpRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  width: 100%;
  gap: 20px;
`;

// Dashboard Employee Stats for Front Page where graphs are going to show
export const DashEmpCont = styled.div`
  /* height: 20vh; */
  padding: 15vh;
  border-radius: 12px;
  background-color: grey;
`;

// Dashboard Employee Table of top 5 employees
export const DashEmpTopCont = styled.div`
  padding: 25vh;
  width: 10%;
  border-radius: 12px;
  background-color: grey;
`;

export const DashEmpTopStatCont = styled.div`
  padding: 25vh;
  width: 30%;
  border-radius: 12px;
  background-color: grey;
`;
