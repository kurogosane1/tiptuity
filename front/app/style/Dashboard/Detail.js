import styled from "styled-components";
import { motion } from "framer-motion";

export const DetMainCont = styled(motion.div)`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  gap: 10px;
  width: 100%;
  color: #006726;

  @media (max-width: 760px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

// This is for the heading section container
export const DetailClientCont = styled(motion.div)`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  font-size: 25px;
  color: #006726;

  i:hover {
    cursor: pointer;
    transition: ease-in-out 0.3s;
    transform: scale(2);
  }
`;

export const HeaderDetailCont = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  gap: 20px;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export const HeaderTitleCont = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 10px;
  width: 100%;

  h1 {
    font-size: 3vw;
    text-align: left;
  }
  span {
    font-size: 1vw;
    text-align: left;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 5vw;
    }
    span {
      font-size: 5vw;
    }
  }
`;

// This is where the Image section will be
export const HeaderImageCont = styled.div`
  box-sizing: border-box;
  padding: 10x;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

// This is where the header Image Sub Container
export const HeaderImageSubCont = styled.div`
  height: 100%;
  width: 100%;
`;

export const ActionButtons = styled.button`
  padding: 1rem 2rem;
  background-color: #ffffff;
  outline: none;
  border-radius: 30px;
  margin-right: 20px;
  border: 5px solid #006726;
  font-size: 16px;
  color: #006726;
  :active {
    background-color: #006726;
    border: 5px #a9a9a9 solid;
    color: #ffffff;
  }
`;
export const GridContainer = styled.div`
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-height: 85vh;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 5px;
    justify-content: center;
  }
`;

// Export Const list button div container
export const ListButton = styled.div`
  width: 90%;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#006726")};
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => (props.isSelected ? "#006726" : "#ffffff")};
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all ease;

  :hover {
    background-color: #aaffc9;
    color: #006726;
  }

  @media (max-width: 760px) {
    width: 90%;
  }
`;

// Export Const Container div container
export const DetailContainer = styled(motion.div)`
  width: 100%;
  overflow-y: scroll;
  overflow-x: none;
  max-height: ${(props) => props.height};
`;

export const EmployeeContainer = styled.ul`
  overflow-y: scroll;
  overflow-x: none;
  list-style: none;
  max-height: ${(props) => props.height};
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 760px) {
    width: 100%;
    min-height: 100vh;
  }
  li {
    width: 100%;
  }
`;

// Sub Container
export const OtherContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  @media (max-width: 760px) {
    flex-wrap: wrap-reverse;
  }
`;
