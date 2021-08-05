import React from "react";
import {
  ClientRow,
  DashSumCont,
  TopTipContTable,
  TopTipContTabName,
  TopTipContTabDiv,
  TopTipCont,
} from "../../../style";

import { AnimatePresence, motion } from "framer-motion";

function Clientdetails({ index, data, change, setIndex, MoveVarient }) {
  // Variant for motion framework
  const listVariant = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
    }),
    hidden: (i) => ({
      y: -50,
      opacity: 0,
    }),
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <motion.div
      variants={MoveVarient}
      initial="hiddent"
      animate="visible"
      exit="leave">
      <TopTipContTabDiv
        whileHover={{ scale: 2.0, color: "#006726" }}
        style={{ justifyContent: "space-evenly", width: "100%" }}>
        <i
          className="bx bxs-chevron-left"
          onClick={() => {
            setIndex();
            change(false);
          }}>
          <span>Go back</span>
        </i>
      </TopTipContTabDiv>
      <h2>Detail Section</h2>

      <ClientRow>
        <img src="" alt="" />
      </ClientRow>
      <ClientRow>
        <span>{data ? data.Client : "Business name"}</span>
      </ClientRow>
      <ClientRow>
        <span>{data ? data.Client_Address : "Business Address"}</span>
      </ClientRow>
      <ClientRow>
        <img src={data ? data.Client_Img : ""} alt="" />
      </ClientRow>
      <ClientRow>
        <h3>Tips Received So Far</h3>
      </ClientRow>
      <ClientRow style={{ width: "100%" }}>
        <DashSumCont style={{ width: "100%" }}>
          <TopTipContTable>
            <TopTipContTabName>
              <h3>First Name</h3>
              <span>Last Name</span>
            </TopTipContTabName>
            <TopTipContTabDiv>
              <h3 style={{ textAlign: "center" }}>Tip Amount</h3>
            </TopTipContTabDiv>
          </TopTipContTable>
          <AnimatePresence>
            <TopTipCont
              variants={listVariant}
              initial="hidden"
              animate="visible"
              custom={index}
              key={index + index + 1 * index}>
              <TopTipContTabName>
                <h3>{data ? data.firstname : "First Name"}</h3>
                <span>{data ? data.lastname : "last Name"}</span>
              </TopTipContTabName>
              {/* <TopTipContTabDiv>
                <h3>tip_date</h3>
              </TopTipContTabDiv> */}

              <TopTipContTabDiv>
                <h3 style={{ textAlign: "center" }}>
                  {data ? formatter.format(data.tip) : "$0"}
                </h3>
              </TopTipContTabDiv>
            </TopTipCont>
          </AnimatePresence>
        </DashSumCont>
      </ClientRow>
    </motion.div>
  );
}

export default Clientdetails;
