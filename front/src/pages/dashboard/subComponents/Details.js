import React from "react";
import dayjs from "dayjs";

import {
  DetMainCont,
  TopTipCont,
  TopTipContTabDiv,
  TopTipContTable,
  DashSumCont,
  TopTipContTabName,
  DetailClientCont,
  HeaderTitleCont,
  HeaderDetailCont,
  HeaderImageCont,
  HeaderImageSubCont,
  ChartContainer,
  OtherContainer
} from "../../../style";
import ClientLineCharts from "../../../components/ClientLineChart";

// Variants for Motion Framework

const LoadingVariant = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: "-50%",
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function Details({ index, data, change, setIndex, formatter }) {
  const {
    Client_id,
    businessAddress,
    businessImage,
    businessname,
    getTipData,
  } = data;
  return (
    <DetMainCont
      variants={LoadingVariant}
      initial="initial"
      animate="animate"
      exit="exit">
      <DetailClientCont>
        <i
          className="bx bx-left-arrow-alt"
          style={{ fontSize: "38px", marginRight: "10px" }}
          onClick={() => {
            setIndex();
            change(false);
          }}></i>
        <span>Go back</span>
      </DetailClientCont>
      <HeaderDetailCont style={{ gap: "20px" }}>
        <HeaderTitleCont>
          <h1>{businessname}</h1>
          <span>Business Id : {Client_id}</span>
          <span>Business Address : {businessAddress}</span>
          <span>Created Date</span>
          <br />
          {/* <span>
            For Updating or Deleting page please click the buttons below
          </span>
          <br />
          <div>
            <ActionButtons>Update</ActionButtons>
            <ActionButtons>Delete</ActionButtons>
          </div> */}
          <br />
        </HeaderTitleCont>
        <HeaderImageCont>
          <HeaderImageSubCont>
            <img
              src={businessImage}
              alt="business-art"
              style={{ height: "auto", width: "100%" }}
            />
          </HeaderImageSubCont>
        </HeaderImageCont>
        <ChartContainer style={{ height: "350px", width: "100%" }}>
          <ClientLineCharts Linedata={getTipData} />
        </ChartContainer>
      </HeaderDetailCont>

      <OtherContainer>
        <DashSumCont style={{ width: "100%" }}>
          <h3>Tips overall received</h3>
          <TopTipContTable>
            <TopTipContTabName>
              <h3>First Name</h3>
              <span>Last Name</span>
            </TopTipContTabName>
            <TopTipContTabDiv>
              <h3>Date</h3>
            </TopTipContTabDiv>
            <TopTipContTabDiv>
              <h3 style={{ textAlign: "center" }}>Tip Amount</h3>
            </TopTipContTabDiv>
          </TopTipContTable>

          {getTipData &&
            getTipData.map((info, index) => {
              return (
                <TopTipCont
                  //         variants={listVariant}
                  //         initial="hidden"
                  //         animate="visible"
                  //         custom={index}
                  key={index + index + 1}>
                  <TopTipContTabName>
                    <h3>{info.firstname}</h3>
                    <span>{info.lastname}</span>
                  </TopTipContTabName>
                  <TopTipContTabDiv>
                    <h3>{dayjs(info.tip_create_date).format("MM-DD-YYYY")}</h3>
                  </TopTipContTabDiv>

                  <TopTipContTabDiv>
                    <h3 style={{ textAlign: "center" }}>
                      {formatter.format(info.tip)}
                    </h3>
                  </TopTipContTabDiv>
                </TopTipCont>
              );
            })}
        </DashSumCont>
        <DashSumCont
          style={{
            width: "100%",
            justifyContent: "flex-start",
          }}>
          <h3>Employees Currently Working</h3>
          <TopTipContTable>
            <TopTipContTabName>
              <h3>First Name</h3>
            </TopTipContTabName>
            <TopTipContTabName>
              <h3>Last Name</h3>
            </TopTipContTabName>
          </TopTipContTable>

          <TopTipCont
          //         variants={listVariant}
          //         initial="hidden"
          //         animate="visible"
          //         custom={index}
          // key={index + index + 1}
          >
            <TopTipContTabName>
              <h3>{getTipData[0].firstname}</h3>
            </TopTipContTabName>
            <TopTipContTabName>
              <h3>{getTipData[0].lastname}</h3>
            </TopTipContTabName>
          </TopTipCont>
        </DashSumCont>
      </OtherContainer>
    </DetMainCont>
  );
}

export default Details;
