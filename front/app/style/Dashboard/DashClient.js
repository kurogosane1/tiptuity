import styled from "styled-components";
import { motion } from "framer-motion";

// This is the main contianer in the dashboard page
export const ClientMainCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  font-family: "Poppins", sans-serif;
`;

export const ClientRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px;
`;

export const DataContainer = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  width: 80vw;
`;

export const ClientListContainer = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 10px;
  display: flex;
  max-height: 65vh;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  overflow: auto;
`;
export const ClientDetail = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  flex: 3;
  width: 30vw;
  max-height: 65vh;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  overflow: auto;
`;

export const ClientButton = styled.button`
  border-radius: 30px;
  padding: 20px 40px;
  background-color: #ffffff;
  border: 5px #006726 solid;
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
  :active {
    background-color: #006726;
    border: 5px #a9a9a9 solid;
    color: #ffffff;
  }
  :nth-child(1) {
    margin-top: 4rem;
  }
`;
