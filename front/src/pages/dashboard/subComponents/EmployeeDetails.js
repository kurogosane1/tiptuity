// Importing Packages
import React from "react";
import dayjs from "dayjs";

// Importing Componenets
import ClientLineCharts from "../../../components/ClientLineChart";

//Importing style components
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
  OtherContainer,
} from "../../../style";

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

// Variant for motion framework
const listVariant = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: (i) => ({
    y: -50 * i,
    opacity: 0,
  }),
};

function Details({
  data,
  change,
  setIndex,
  formatter,
  setEmployee,
  GetAllData,
}) {
  const {
    emp_id,
    firstname,
    lastname,
    streetaddress,
    email,
    isAdmin,
    getTipData,
    emp_image,
    TotalTipsReceived,
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
      <HeaderDetailCont>
        <HeaderTitleCont>
          <h1>
            {firstname} {lastname}
          </h1>
          <span>Employee Id : {emp_id}</span>
          <span>Address : {streetaddress}</span>
          <span>Contact Email : {email}</span>
          <span>Administrative Priveledge : {isAdmin}</span>
          <span>
            Tips Collected So Far : {formatter.format(TotalTipsReceived)}
          </span>
          <span>Created Date</span>
          <br />
          {/* <span>
            For Updating or Deleting page please click the buttons below
          </span> */}
          <br />
          <div>{/* <ActionButtons>Update Status</ActionButtons> */}</div>
          <br />
        </HeaderTitleCont>
        <HeaderImageCont>
          <HeaderImageSubCont>
            <img
              src={emp_image}
              alt="Employee-for-employee"
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
              <h3>Client</h3>
            </TopTipContTabName>
            <TopTipContTabDiv>
              <h3>Date</h3>
            </TopTipContTabDiv>
            <TopTipContTabDiv>
              <h3 style={{ textAlign: "center" }}>Tip Amount</h3>
            </TopTipContTabDiv>
          </TopTipContTable>

          {getTipData ? (
            getTipData.map((info, index) => {
              return (
                <TopTipCont
                  variants={listVariant}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  key={index + index + 1}>
                  <TopTipContTabName>
                    <h3>{info.businessname}</h3>
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
            })
          ) : (
            <TopTipCont>
              <TopTipContTabName>Not Tips Received Yet</TopTipContTabName>
            </TopTipCont>
          )}
        </DashSumCont>
        <DashSumCont
          style={{
            width: "100%",
            justifyContent: "flex-start",
          }}>
          <h3>Clients Employee is Working with</h3>
          <TopTipContTable>
            <TopTipContTabName>
              <h3>Client</h3>
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
              <h3>
                {getTipData
                  ? getTipData[0].businessname
                  : "Not Currently Working for a Client"}
              </h3>
            </TopTipContTabName>
          </TopTipCont>
        </DashSumCont>
      </OtherContainer>
    </DetMainCont>
  );
}

export default Details;
