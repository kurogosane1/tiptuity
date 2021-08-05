import styled from "styled-components";
import { motion } from "framer-motion";

// This is the front Main container
export const FrontContainer = styled(motion.div)`
  overscroll-behavior: auto;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  /* max-width: 100vw;
  width: 100%; */
  background-color: #ebebeb;
  margin-bottom: 62px;
  overflow: hidden;
`;

// This is the Front section
export const Container = styled(motion.div)`
  display: flex;
  flex: 1;
  min-height: 100vh;
  height: 100%;
  max-width: 1400px;
  /* width: 100%; */
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-bottom: 62px;

  h1 {
    font-size: 4.5rem;
    line-height: 1.2;
  }
  span {
    font-size: 1.2rem;
    font-weight: 200;
    margin-bottom: 10px;
  }

  @media (max-width: 760px) {
    h1 {
      text-align: center;
      font-size: 3rem;
    }
    span {
    }
  }
`;

export const Container2 = styled(Container)`
  box-sizing: border-box;
  padding: 20px;
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  gap: 50px;
  h3 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 4.5rem;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 5px;
    }
    p {
      text-align: center;
    }
  }
`;
// This is for the rows
export const Rows = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: relative;

  @media (max-width: 760px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;
// THis is for the choices
export const Rows2 = styled(Rows)`
  height: 55vh;
`;
// Buttons outline button
export const OutLineButton = styled.button`
  cursor: pointer;
  padding: 10px 25px;
  margin-right: 10px;
  outline: none;
  background-color: white;
  border-radius: 20px;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  border: 2px solid #006726;
  margin-top: 10px;
  max-width: 200px;
  :hover {
    background-color: #006726;
    color: white;
    font-weight: 600;
  }
  :focus {
    box-shadow: inset -20px -20px 60px #005820, inset 20px 20px 60px #00762c;
  }
  :focus {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    color: white;
  }
`;

export const SolidButton = styled(OutLineButton)`
  cursor: pointer;
  padding: 10px 45px;
  max-width: 200px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #006726;
`;

export const SubContainers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 760px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const SubContainers2 = styled(SubContainers)`
  width: 100%;
  @media (max-width: 760px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const SubImage = styled.img`
  width: 15vw;
  @media (max-width: 760px) {
    width: 95vw;
  }
`;
export const ClientImage = styled.img`
  width: 48vw;
  @media (max-width: 760px) {
    width: 95vw;
  }
`;
export const ClientImage2 = styled(ClientImage)`
  width: 40vw;
  @media (max-width: 760px) {
    width: 95vw;
  }
`;

export const FrontImage1 = styled(SubImage)`
  object-fit: cover;
  width: 55vw;
  @media (max-width: 760px) {
    width: 95vw;
  }
`;
// This is for the mobile image barcode in the begining section
export const FrontImage2 = styled.img`
  position: absolute;
  z-index: 1000;
  width: 10vw;
  left: 75%;
  bottom: 10%;

  @media (mex-width: 760px) {
    right: 40%;
    width: 20vw;
  }
`;
