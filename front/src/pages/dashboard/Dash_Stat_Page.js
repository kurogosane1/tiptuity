import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import {
  PieChartContainer2,
  ChartContainer2,
  DashStatRow2,
  MainDashFrontMain,
  ChartContainer3,
} from "../../style";
import LineCharts from "../../components/LineChart";
import PieCharts from "../../components/PieCharts";
import TipLineCharts from "../../components/TipLineChart";
import TopFiveChart from "../../components/TopFiveChart";
import { useGlobalData } from "../../context/DataContext";

// Variants for this animation
const delayLoading = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      staggerChildren: 0.5,
    },
  },
};
// This variant for children
const charts = {
  initial: {
    y: -200,
    opacitiy: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    x: 250,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};
//This is the variant animation for the main page
const pageVariant = {
  initial: {
    opacitiy: 0,
    y: -100,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    x: 150,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function DashStatFront({ windowsSize }) {
  const { tip, employee } = useGlobalData();

  // TODO: Make sure to add some graph Contents for these items to show in the front page
  const [loading, setLoading] = useState(false);
  const [sorted, setSorted] = useState();
  const [pieData, setPieData] = useState();
  const [linedate, setLineDate] = useState();
  const [lineTipDate, setLineTipDate] = useState();

  useEffect(() => {
    setLoading(true);
    // Sorting the main data
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
      });
      // const SortedData = employees.sort((a, b) => {
      //   return dayjs(a.tip_date).isBefore(dayjs(b.tip_date)) ? 1 : -1;
      // });
      const SortedData = employees
        .sort((a, b) => {
          return b.TotalTipsReceived - a.TotalTipsReceived;
        })
        .filter((data, index) => {
          return index < 5;
        });

      // To save the Emp Data;
      setSorted([...SortedData]); // To save the sorted data;
      setLineTipDate([...SortedData]);
    };
    // Sorting the other sample
    const Sorting2 = (data) => {
      dayjs().format();
      if (tip) {
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

        // // Sorting the Highest
        // const Employees = employees.sort((a, b) => {
        //   return dayjs(a.tip_date).isBefore(dayjs(b.tip_date)) ? 1 : -1;
        // });

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
              tip_date: index.tip_date,
              firstname: index.firstname,
              lastname: index.lastname,
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
        const SortedSamples = Sample.sort((a, b) => {
          return dayjs(a.tip_date).isAfter(dayjs(b.tip_date)) ? 1 : -1;
        }).filter((info) => {
          let year = dayjs(info.tip_date).get("year");
          if (year > 2020) {
            return info;
          } else {
            return null;
          }
          // return dayjs(info.tip_date).year('2021')
        });

        // Sorting the Highest
        const SortedSample = Sample.sort((a, b) => {
          return dayjs(a.tip_date).isAfter(dayjs(b.tip_date)) ? 1 : -1;
        }).filter((info) => {
          if (windowsSize > 760) {
            let year = dayjs(info.tip_date).get("year");
            if (year >= 2020) {
              return info;
            } else {
              return null;
            }
          } else {
            let year = dayjs(info.tip_date).get("year");
            if (year > 2020) {
              return info;
            } else {
              return null;
            }
          }
        });

        setPieData([...SortedData]);
        setSorted([...SortedData]);
        setLineDate([...SortedSample]);
        setLineTipDate([...SortedSamples]);
      }
    };
    Sorting(employee, tip);
    Sorting2(tip);
    setLoading(false);
  }, [tip, employee, windowsSize]);

  if (loading) {
    if (!tip) {
      return <h1>Loading</h1>;
    }
  }

  return (
    <AnimatePresence initial={false}>
      <MainDashFrontMain
        variants={pageVariant}
        initial="initial"
        animate="animate"
        exit="exit">
        <DashStatRow2
          variants={delayLoading}
          initial="initial"
          animate="animate"
          exit="exit">
          <PieChartContainer2
            height={"33.5vh"}
            width={"100%"}
            variants={charts}>
            <h1
              style={{
                textAlign: "left",
                color: "#00481B",
                position: "absolute",
                top: "10%",
                left: "5%",
              }}>
              Top 5 Highest Tip Client Locations
            </h1>
            <PieCharts windowsSize={windowsSize} PiesData={pieData} />
          </PieChartContainer2>
          <ChartContainer3 variants={charts}>
            <h1
              style={{
                textAlign: "left",
                color: "#00481B",
                position: "absolute",
                top: "20px",
                left: "50",
              }}>
              2021 Tips Collection
            </h1>
            <TipLineCharts
              Linedata={lineTipDate}
              top={80}
              right={10}
              left={0}
              bottom={0}
              windowsSize={windowsSize}
            />
          </ChartContainer3>
          <ChartContainer2
            variants={charts}
            style={{
              padding: "50px 30px 10px 10px",
            }}>
            <h1
              style={{
                textAlign: "left",
                color: "#00481B",

                position: "absolute",
                top: "20px",
                left: "50",
              }}>
              Top 5 Tip Employees
            </h1>
            <TopFiveChart linedata={sorted} />
          </ChartContainer2>
        </DashStatRow2>

        <DashStatRow2
          variants={delayLoading}
          initial="initial"
          animate="animate"
          exit="exit">
          <ChartContainer2
            variants={charts}
            style={{ height: "33.5vh", width: "93%" }}>
            <h2
              style={{
                textAlign: "left",
                color: "#00481B",

                position: "absolute",
                top: "40px",
                left: "60px",
              }}>
              Tips Collection Overall
            </h2>
            <LineCharts
              Linedata={linedate}
              top={50}
              right={-100}
              left={0}
              bottom={0}
            />
          </ChartContainer2>
        </DashStatRow2>
      </MainDashFrontMain>
    </AnimatePresence>
  );
}

export default DashStatFront;
