// Import Packages here
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";

// Import Style Components
import {
  MainDashTipCont,
  DashTipRows,
  ChartContainer,
  TopTipContTable,
  TopTipContTabDiv,
  TopTipContTabName,
  TopTipCont,
  DashSumCont,
  PieChartContainer,
} from "../../style";

// Import Components
import LineCharts from "../../components/LineChart";
import PieCharts from "../../components/PieCharts";
import { useGlobalData } from "../../context/DataContext";

function DashTipsPage({ windowsSize }) {
  // State of the Data
  const [tips, setTips] = useState([]);
  const [sorted, setSorted] = useState();
  const [pieData, setPieData] = useState();
  const [lineDate, setLineDate] = useState();
  const [loading, setLoading] = useState(false);
  // Data example taken from rechart site
  // TODO: Make sure to put your own data here

  // Context API information
  const { tip } = useGlobalData();
  // This is to get the data incase of page refresh
  useEffect(() => {
    setLoading(true);
    setTips([...tip]);

    function Sorting(data) {
      dayjs().format();
      if (tips) {
        // Seperating out the Employees with Tips
        const employees = data.map((data) => {
          const {
            client_id,
            tip_amount,
            createdAt,
            updatedAt,
            Employee,
            Client,
            image,
            tip_date,
          } = data;
          const { businessname } = Client;
          const { firstname, lastname, streetaddress, email, isAdmin } =
            Employee;

          return {
            id: Employee.id,
            firstname,
            lastname,
            image,
            streetaddress,
            email,
            isAdmin,
            tip: tip_amount,
            tip_date: dayjs(tip_date).format("MM-DD-YYYY"),
            businessname,
            updatedAt: dayjs(updatedAt).format("MM-DD-YYYY"),
            Client_id: client_id,
            date: dayjs(createdAt).format("MM-DD-YYYY"),
          };
        });

        // Sorting the Highest
        const Employees = employees.sort((a, b) => {
          return dayjs(a.tip_date).isBefore(dayjs(b.tip_date)) ? 1 : -1;
        });

        // This is for the line sample data
        const Sample = employees.map((data) => {
          const {
            id,
            firstname,
            lastname,
            image,
            streetaddress,
            email,
            isAdmin,
            tip,
            tip_date,
            businessname,
            updatedAt,
            Client_id,
          } = data;
          return {
            id,
            firstname,
            lastname,
            image,
            streetaddress,
            email,
            isAdmin,
            tip,
            tip_date: dayjs(tip_date).format("MM-DD-YYYY"),
            businessname,
            updatedAt,
            Client_id,
          };
        });

        const holder = [];
        employees.forEach((index) => {
          const data = holder.find((i) => i.Client_id === index.Client_id);
          if (!data) {
            holder.push({
              Client_id: index.Client_id,
              businessname: index.businessname,
              Total: index.tip,
            });
          } else {
            return (data.tip = data.tip + index.tip);
          }
        });
        const SortedData = holder
          .sort((a, b) => {
            return b.tip - a.tip;
          })
          .filter((data, index) => index < 5);

        // Sorting the Highest
        const SortedSample = Sample.sort((a, b) => {
          return dayjs(a.tip_date).isAfter(dayjs(b.tip_date)) ? 1 : -1;
        }).filter((info) => {
          let year = dayjs(info.tip_date).get("year");
          if (year >= 2020) {
            return info;
          } else return [];
        });

        setSorted([...Employees]);
        setPieData([...SortedData]);
        setLineDate([...SortedSample]);
      }
    }
    Sorting(tip);
    setLoading(false);
  }, [tip]);

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
      transition: {
        delay: i * 0.05,
      },
    }),
    hidden: (i) => ({
      y: -50 * i,
      opacity: 0,
    }),
  };

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MainDashTipCont style={{ justifyContent: "flex-start" }}>
          <DashTipRows style={{ height: "30vh", marginBottom: "20px" }}>
            <PieChartContainer>
              <h2
                style={{
                  textAlign: "left",
                  color: "#006726",
                  position: "absolute",
                  top: "40px",
                  left: "50px",
                }}>
                Top 5 Clients
              </h2>
              <PieCharts windowsSize={windowsSize} PiesData={pieData} />
            </PieChartContainer>
            <ChartContainer>
              <h2
                style={{
                  textAlign: "left",
                  color: "#006726",

                  position: "absolute",
                  top: "30px",
                  left: "60px",
                }}>
                Tips Received Overall
              </h2>
              <LineCharts
                Linedata={lineDate}
                top={50}
                left={0}
                right={0}
                bottom={0}
              />
            </ChartContainer>

            <DashSumCont style={{ width: "100%" }}>
              <TopTipContTable>
                <TopTipContTabName>
                  <h3>First Name</h3>
                  <span>Last Name</span>
                </TopTipContTabName>
                <TopTipContTabDiv>
                  <h3>Date</h3>
                </TopTipContTabDiv>
                <TopTipContTabDiv>
                  <h3>Client</h3>
                </TopTipContTabDiv>
                <TopTipContTabDiv>
                  <h3 style={{ textAlign: "center" }}>Tip Amount</h3>
                </TopTipContTabDiv>
              </TopTipContTable>
              <AnimatePresence>
                {sorted
                  ? sorted.map((data, index) => {
                      return (
                        <TopTipCont
                          variants={listVariant}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                          key={index + index + 1}>
                          <TopTipContTabName>
                            <h3>{data.firstname}</h3>
                            <span>{data.lastname}</span>
                          </TopTipContTabName>
                          <TopTipContTabDiv>
                            <h3>{data.tip_date}</h3>
                          </TopTipContTabDiv>
                          <TopTipContTabDiv>
                            <h3>{data.businessname}</h3>
                          </TopTipContTabDiv>
                          <TopTipContTabDiv>
                            <h3 style={{ textAlign: "center" }}>
                              {formatter.format(data.tip)}
                            </h3>
                          </TopTipContTabDiv>
                        </TopTipCont>
                      );
                    })
                  : ""}
              </AnimatePresence>
            </DashSumCont>
          </DashTipRows>
          <DashTipRows style={{ marginTop: "100px" }}></DashTipRows>
        </MainDashTipCont>
      )}
    </div>
  );
}

export default DashTipsPage;
