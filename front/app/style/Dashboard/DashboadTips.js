import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDashTipCont = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f7;
  min-height: 100vh;
  width: 100%;
`;

export const DashTipRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const DashSumCont = styled(motion.div)`
  display: flex;
  padding: 20px 40px;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f7;
  -webkit-box-shadow: 21px 18px 23px -6px rgba(0, 0, 0, 0.21);
  box-shadow: 21px 18px 23px -6px rgba(0, 0, 0, 0.21);
`;

export const TipSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 12px;
  align-items: center;
  width: 300px;
  /* height: 300px; */
  justify-content: space-evenly;
  background-color: #ffffff;
  margin: 22px;
  -webkit-box-shadow: 21px 18px 23px -6px rgba(0, 0, 0, 0.21);
  box-shadow: 21px 18px 23px -6px rgba(0, 0, 0, 0.21);
`;

export const TipSummTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #006726;
  width: 100%;
  padding: 25px 25px 0 25px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: #ffffff;
`;
export const TipSummTopSpan = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TipSummBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f7;
  width: 100%;
  padding: 5px 25px 15px 25px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #006726;
`;
export const TipSummBottomSpan = styled.span`
  font-size: 28px;
`;

// This is where the Top 5 employees containers are going to be
export const TopTipCont = styled(motion.div)`
  cursor: pointer;
  width: 95%;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  justify-content: space-evenly;
  border-left: 0.01px solid #00672638;
  border-right: 0.01px solid #00672638;
  border-bottom: 0.01px solid #00672638;
  /* margin: 20px auto;
  -webkit-box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.12); */
`;
export const TopTipContTable = styled.div`
  cursor: pointer;
  width: 95%;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  justify-content: space-evenly;
  border-top-left-radius: 12px;
  border-top: 0.01px solid #00672638;
  border-left: 0.01px solid #00672638;

  border-top-right-radius: 12px;
  margin-top: 20px;
  background-color: #006726;
  color: white;
  /* -webkit-box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.12); */
  @media (max-width: 760px) {
    font-size: 8px;
    width: 100%;
  }
`;

export const TopTipContTabDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 760px) {
    h3 {
      font-size: 8px;
    }
    span {
      font-size: 8px;
    }
  }
`;

export const TopTipContTabName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 760px) {
    font-size: 8px;
  }
`;

// This is for the Charts section so that we have better data
export const ChartContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 50px;
  width: 45vw;
  margin-bottom: 60px;
  border-radius: 12px;
  background-color: #ffffff;
  outline: none;
  position: relative;
  color: #006726;
  -webkit-box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.12);

  @media (max-width: 760px) {
    width: 95%;
    padding: 10px;
    height: 100%;
  }
`;

export const ChartContainer2 = styled(ChartContainer)`
  width: 33%;
  height: 36.5vh;

  /* @media (max-width: 2280) {
    width: 25%;
  } */
  @media (max-width: 760px) {
    padding: 15px;
    height: 38vh;
    width: 95%;
    h1 {
      top: 5px;
      font-size: 16px;
    }
  }
`;

export const ChartContainer3 = styled(ChartContainer2)`
height:33vh;

`;

export const PieChartContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 50px;
  width: 20vw;
  margin-bottom: 60px;
  border-radius: 12px;
  background-color: #ffffff;
  outline: none;
  overflow: none;
  position: relative;
  color: #006726;
  -webkit-box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.12);

  @media (max-width: 760px) {
    width: 95%;
    padding: 10px;
  }
`;

export const PieChartContainer2 = styled(PieChartContainer)`
  flex-wrap: wrap;
  padding: 5px;
  height: 40vh;
  /* @media (max-width: 2280px) {
    width: 25%;
    h1 {
      font-size: 25px;
      text-align: "center";
    }
  } */
  @media (max-width: 1200px) {
    width: 33.3%;
    h1 {
      font-size: 25px;
      text-align: "center";
    }
  }

  @media (max-width: 760px) {
    width: 95%;
    h1 {
      font-size: 18px;
      text-align: "center";
    }
  }
`;
