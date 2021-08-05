// Importing Packages
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";

//Importing styles
import {
  MainDashTipCont,
  DashTipRows,
  DashSumCont,
  TipSummBottomSpan,
  TipSummBottom,
  TipSummTopSpan,
  TipSummTop,
  TipSummary,
  TopTipCont,
  TopTipContTable,
  TopTipContTabDiv,
  TopTipContTabName,
  ActionButtons,
} from "../../style";
import EmployeeDetails from "./subComponents/EmployeeDetails";
import { useGlobalData } from "../../context/DataContext";

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
const LoadingVariant = {
  initial: {
    opacity: 0,
    y: "-10%",
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
    y: "-10%",
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function DashEmpPage() {
  const { tip, employee } = useGlobalData();
  let history = useHistory();
  const [loading, setLoading] = useState(false); // Loading while data is received
  const [tips, setTips] = useState(); // Data with the Tips overall received
  const [totalTips, setTotalTips] = useState(0); // To get the total Tips
  const [sorted, setSorted] = useState(); // Sorting data
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  // TODO: make sure to make the summary components in their own componenets
  // TODO: On Press make sure that on more details view the page is directed to the details page
  // TODO: connect to view multiple people online
  // TODO: Make Table Font size smaller when in mobile page mostly below 1024px width
  // TODO: Make sure to make a viewable section when the screen size is bigger so that it can fit through the whole page instead of a really wide table section.
  // TODO: When possible add charts to each sections

  const Sorting = (a, b) => {
    const employees = a.map((data) => {
      const { firstname, lastname, streetaddress, email, isAdmin, image } =
        data;
      const getTipData = b
        .filter((info) => {
          return info.Employee.id === data.id;
        })
        .map((info) => {
          return {
            Client_id: info.Client.id,
            businessname: info.Client.businessname,
            businessAddress: info.Client.businessAddress,
            businessImage: data.businessImage,
            tip_id: info.id,
            tip: info.tip_amount,
            tip_date: dayjs(info.tip_date).format("MM-DD-YYYY"),
            tip_create_date: info.createdAt,
            tip_updatedAt: info.updatedAt,
          };
        });

      // To get the total Tips
      const TotalTipsReceived = getTipData.reduce((acc, curr) => {
        return acc + curr.tip;
      }, 0);

      if (getTipData > 0) {
        return {
          emp_id: data.id,
          emp_image: image,
          firstname,
          lastname,
          streetaddress,
          email,
          isAdmin,
          getTipData,
          TotalTipsReceived,
        };
      } else {
        return {
          emp_id: data.id,
          emp_image: image,
          firstname,
          lastname,
          streetaddress,
          email,
          isAdmin,
          getTipData: [
            {
              Client_id: "Not Yet Started",
              businessname: "Not Yet Started",
              businessAddress: "Not Yet Started",
              businessImage: "Not Yet Started",
              tip_id: "",
              tip: 0,
              tip_date: dayjs(Date.now()).format("MM-DD-YYYY"),
              tip_create_date: Date.now(),
              tip_updatedAt: Date.now(),
            },
          ],
          TotalTipsReceived,
        };
      }
    });

    // Getting the total Tips
    const totalTip = employees.reduce((acc, curr) => {
      return acc + curr.TotalTipsReceived;
    }, 0);
    // Soring highest Tip from Employee data
    const Employees = employees.sort((a, b) => {
      return b.TotalTipsReceived - a.TotalTipsReceived;
    });

    //Getting the data sorted
    const Sorted = employees
      .sort((a, b) => b.TotalTipsReceived - a.TotalTipsReceived)
      .filter((data, index) => index < 5);

    setTotalTips(totalTip);
    setTips([...Employees]);
    setSorted([...Sorted]);
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    setLoading(true);
    Sorting(employee, tip);
    setLoading(false);
  }, [tip, employee]);

  if (tips) {
    if (isOpen)
      return (
        <EmployeeDetails
          index={index}
          data={sorted[index]}
          change={setIsOpen}
          setIndex={setIndex}
          formatter={formatter}
        />
      );
  }

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MainDashTipCont
          variants={LoadingVariant}
          initial="initial"
          animate="animate"
          exit="exit">
          <DashTipRows>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Total Tips</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i className="bx bx-money" style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan>
                  {formatter.format(totalTips)}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Number of Employees</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i className="bx bx-user" style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan>
                  {sorted ? employee.length : 0}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
            <TipSummary>
              <TipSummTop>
                <TipSummTopSpan>Highest Tip</TipSummTopSpan>
              </TipSummTop>
              <TipSummBottom>
                <i
                  className="bx bx-coin-stack"
                  style={{ fontSize: "36px" }}></i>
                <TipSummBottomSpan>
                  {/* {tips ? formatter.format(tips[0].TotalTipsReceived) : 0} */}
                  {tips ? formatter.format(tips[0].TotalTipsReceived) : 0}
                </TipSummBottomSpan>
              </TipSummBottom>
            </TipSummary>
          </DashTipRows>
          <DashTipRows style={{ justifyContent: "space-evenly" }}>
            <DashSumCont style={{ width: "100%" }}>
              <TopTipContTabName>
                <h1 style={{ marginLeft: "10px" }}>Top 5 Employees</h1>
              </TopTipContTabName>
              <TopTipContTabDiv>
                <span style={{ marginRight: "20px" }}>
                  Employees with the largest collection of tips over the years
                </span>
                <ActionButtons
                  onClick={() => {
                    history.push("/dash/emp/details");
                  }}>
                  View All Employees
                </ActionButtons>
              </TopTipContTabDiv>
              <TopTipContTable>
                <TopTipContTabName>
                  <h3>First Name</h3>
                  <span>Last Name</span>
                </TopTipContTabName>

                <TopTipContTabDiv>
                  <h3 style={{ textAlign: "center" }}>Tip Amount</h3>
                </TopTipContTabDiv>
                <TopTipContTabDiv>
                  <span>More Details</span>
                </TopTipContTabDiv>
              </TopTipContTable>
              <AnimatePresence>
                {sorted
                  ? sorted.map((data, index) => {
                      const { emp_id, firstname, lastname, TotalTipsReceived } =
                        data;
                      return (
                        <TopTipCont
                          variants={listVariant}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                          key={index + index + 1 + emp_id}>
                          <TopTipContTabName>
                            <h3>{firstname}</h3>
                            <span>{lastname}</span>
                          </TopTipContTabName>

                          <TopTipContTabDiv>
                            <h3 style={{ textAlign: "center" }}>
                              {formatter.format(TotalTipsReceived)}
                            </h3>
                          </TopTipContTabDiv>
                          <TopTipContTabDiv
                            whileHover={{ scale: 2.5, color: "#006726" }}
                            onClick={() => {
                              setIndex(index);
                              setIsOpen(true);
                            }}>
                            <i className="bx bxs-chevron-right"></i>
                          </TopTipContTabDiv>
                        </TopTipCont>
                      );
                    })
                  : ""}
              </AnimatePresence>
            </DashSumCont>
          </DashTipRows>
        </MainDashTipCont>
      )}
    </div>
  );
}

export default DashEmpPage;
