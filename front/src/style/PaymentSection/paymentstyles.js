import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  font-family: "Poppins", sans-serif;
`;

export const TipContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 4rem 1.5rem;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 1330px) {
    max-width: 30%;
  }

  @media (max-width: 1000px) {
    max-width: 45vw;
  }

  @media (max-width: 760px) {
    max-width: 90%;
  }
`;

export const TipRow = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TipCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const SolidButtons2 = styled.button`
  cursor: pointer;
  padding: 1.2rem 2rem;
  width: 180px;
  outline: none;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  color: white;
  background-color: #006726;
  transition: ease 0.2s;
  :active {
    width: 220px;
    font-size: 18px;
    box-shadow: inset 20px -20px 60px #00b342, inset -20px 20px 60px #00f35a;
  }
`;

export const OutLinedButtons = styled(SolidButtons2)`
  color: black;
  background-color: #f5f5f5;
  box-shadow: 20px 20px 60px #d0d0d0, -20px -20px 60px #ffffff;
  :active {
    color: white;
  }
`;

export const TipButtons = styled(SolidButtons2)`
  width: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 50px;
  transition: ease 0.2s;
  :active {
    color: #f5f5f5;
    width: 60px;
    font-size: 18px;
    box-shadow: inset 20px -20px 60px #00b342, inset -20px 20px 60px #00f35a;
  }
`;

export const CardDesign = styled(CardElement)`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;
  /* text-align: left; */
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  border: 2px solid white;
  width: 320px;
  :focus {
    outline: none;
    border: 2px solid #006726;
    padding-left: 20px;
    padding-top: 10px;
    margin: none;
  }
  :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
  }
`;
