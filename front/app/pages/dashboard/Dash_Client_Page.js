// Importing Packages from the website
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import {
  ClientMainCont,
  ClientRow,
  DashSumCont,
  TopTipContTabDiv,
  TopTipContTabName,
  TopTipContTable,
  TopTipCont,
  TipSummary,
  TipSummTop,
  TipSummBottom,
  TipSummBottomSpan,
  TipSummTopSpan,
} from "../../style";

// Importing Componenents
import Details from "./subComponents/Details";
import { useGlobalData } from "../../context/DataContext";

function DashClientPage() {
  const { tip, client, employee } = useGlobalData();
  const [loading, setLoading] = useState(false); // This is for loading
  const [clients, setClients] = useState();
  const [index, setIndex] = useState(0); // This is where the combined data is made
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setLoading(true);
    function Testing(a, b) {
      const getDataA = a.map((data) => {
        const getTipData = b
          .filter((info) => {
            return info.Client.id === data.id;
          })
          .map((info) => {
            return {
              firstname: info.Employee.firstname,
              lastname: info.Employee.lastname,
              emp_id: info.Employee.id,
              tip: info.tip_amount,
              tip_date: dayjs(info.tip_date).format("MM-DD-YYYY"),
              tip_create_date: info.createdAt,
              tip_updatedAt: info.updatedAt,
            };
          });
        const businessTotalTips = getTipData.reduce((acc, curr) => {
          return acc + curr.tip;
        }, 0);
        return {
          Client_id: data.id,
          businessname: data.businessname,
          businessAddress: data.businessAddress,
          businessImage: data.businessImage,
          getTipData,
          TotalTipsRecieved: businessTotalTips,
        };
      });

      const sortData = getDataA.sort((a, b) => {
        return b.TotalTipsRecieved - a.TotalTipsRecieved;
      });
      setClients([...sortData]);
      // return getDataA;
    }
    function Sorting(a, b, c) {
      const clientData = a.map((data) => {
        const { id, businessname, businessImage, businessAddress } = data;
        const Client_id = id;
        const Client = businessname;
        const Client_Address = businessAddress;
        const Client_Img = businessImage;
        let ids = 0;
        let lastname = "No Employee Found";
        let firstname = "No Employee Found";
        let streetaddress = "No Employee Found";
        let email = "No Employee Found";
        let isAdmin = false;
        let image = "No Employee Found";
        let tip = 0;
        let emp_id = 0;
        let tip_id = 0;

        const Tip_data = b.filter((info) => info.client_id === Client_id);
        if (Tip_data.length >= 1) {
          tip = Tip_data[0].tip_amount;
          emp_id = Tip_data[0].emp_id;
          tip_id = Tip_data[0].id;

          let Emp_data = c.filter((info) => info.id === emp_id);

          firstname = Emp_data[0].firstname;
          lastname = Emp_data[0].lastname;
          streetaddress = Emp_data[0].streetaddress;
          email = Emp_data[0].email;
          isAdmin = Emp_data[0].isAdmin;
          image = Emp_data[0].image;
        }

        return {
          ids,
          Client_id,
          Client,
          Client_Address,
          Client_Img,
          tip,
          tip_id,
          emp_id,
          firstname,
          lastname,
          email,
          isAdmin,
          image,
          streetaddress,
        };
      });

      //Sorting the data by the largest tips
      const LargestClient = clientData.sort((a, b) => b.tip - a.tip);
      // Get the Client Information along with Tips
      setClients([...LargestClient]);
    }
    Sorting(client, tip, employee);
    Testing(client, tip);
    setLoading(false);
  }, [tip, client, employee]);

  if (!tip) return <h1>Loading...</h1>;
  // if (!clients) return <h1>Still Fetching Data...</h1>;

 
  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

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

  const MoveVarient = {
    hidden: {
      opacity: 0,
      x: "-100",
      transition: { ease: [0.17, 0.67, 0.83, 0.67], stiffness: 100 },
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    leave: {
      opacity: 0,
      x: "-100",
      transition: { ease: [0.17, 0.67, 0.83, 0.67], stiffness: 100 },
    },
  };

  if (clients) {
    if (isOpen)
      return (
        <Details
          index={index}
          data={clients[index]}
          change={setIsOpen}
          setIndex={setIndex}
          MoveVarient={MoveVarient}
          formatter={formatter}
        />
      );
  }

  return (
    <ClientMainCont
      variants={MoveVarient}
      initial={"hidden"}
      animate={"visible"}
      exit={"leave"}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => setModalOpen(false)}>
          <ClientRow style={{ width: "100%" }}>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Highest Tiping Location</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i className="bx bx-money" style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan style={{ fontSize: "20px" }}>
                  {clients ? clients[0].businessname : ""}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Number of Clients</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i className="bx bx-user" style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan>
                  {clients ? clients.length : 0}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Combined Highest Tips Received</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i
                  className="bx bx-coin-stack"
                  style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan>
                  {clients
                    ? formatter.format(clients[0].TotalTipsRecieved)
                    : "$999.00"}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
          </ClientRow>
          <ClientRow style={{ width: "100%" }}>
            <AnimatePresence>
              {!isOpen ? (
                <DashSumCont style={{ width: "100%" }}>
                  <TopTipContTable>
                    <TopTipContTabName>
                      <h3>Client</h3>
                    </TopTipContTabName>
                    <TopTipContTabDiv>
                      <h3 style={{ textAlign: "center" }}>Total Tips</h3>
                    </TopTipContTabDiv>
                    <TopTipContTabDiv>
                      <h3>More Details</h3>
                    </TopTipContTabDiv>
                  </TopTipContTable>
                  <AnimatePresence>
                    {clients
                      ? clients.map((data, index) => {
                          return (
                            <TopTipCont
                              variants={listVariant}
                              initial="hidden"
                              animate="visible"
                              custom={index}
                              key={index + index + 1 * index}>
                              <TopTipContTabName>
                                <h3>{data.businessname}</h3>
                              </TopTipContTabName>
                              <TopTipContTabDiv>
                                <h3>
                                  {formatter.format(data.TotalTipsRecieved)}
                                </h3>
                              </TopTipContTabDiv>
                              <TopTipContTabDiv
                                whileHover={{ scale: 2.5, color: "#006726" }}>
                                <i
                                  className="bx bxs-chevron-right"
                                  onClick={() => {
                                    setIndex(index);
                                    setIsOpen(!isOpen);
                                  }}></i>
                              </TopTipContTabDiv>
                            </TopTipCont>
                          );
                        })
                      : ""}
                  </AnimatePresence>
                </DashSumCont>
              ) : (
                ""
              )}
            </AnimatePresence>
          </ClientRow>
        </AnimatePresence>
      )}
    </ClientMainCont>
  );
}

export default DashClientPage;
