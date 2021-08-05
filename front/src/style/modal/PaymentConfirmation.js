import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBackGroundContainer = styled.div`
  position: absolute;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #0000004f;
  z-index: 9999999;
`;

export const ModalContainer = styled(motion.div)`
  background-color: #f5f5f5;
  padding: 1rem 2rem;
  border-radius: 20px;
  text-align: center;
`;
