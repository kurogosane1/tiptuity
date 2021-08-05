import styled from "styled-components";
import { motion } from "framer-motion";

export const DashContainer = styled.div`
  overflow-x: none;
`;
export const DashContentContainer = styled(motion.div)`
  box-sizing: border-box;
  padding-left: 20px;
  max-width: calc(100% - ${(props) => props.width});
  margin-left: ${(props) => props.width};
  min-height: 100vh;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @media (max-width: 760px) {
    padding-left: 0;
    max-width: 100vw;
    width: 100%;
    margin-left: 0;
  }
`;

export const ChevronContainer = styled(motion.div)`
  color: #006726;
  font-size: 28px;
  position: absolute;
  top: 30px;
  left: 10px;
  cursor: pointer;
  z-index: 99999;
`;
