import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 4rem 1.5rem;
  border-radius: 20px;
  max-width: 25vw;
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;
export const InputLabel = styled.label`
  margin-bottom: 10px;
  position: absolute;
  top: 22px;
  left: 40px;
  color: black;
  font-size: 12px;
`;
export const InputText = styled.input`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;

  text-align: left;
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
  /* :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    color: white;
  } */
  
`;

export const MessageContainer = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

export const ErrorSpan = styled(motion.span)`
  border: 4px dotted #ff5638;
  color: red;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  width: 320px;
  background-color: #ffbeb2;
`;
