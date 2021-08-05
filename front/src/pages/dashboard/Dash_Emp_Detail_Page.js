// Importing packages here
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";

// Importing Components
import EmployeeDetails from "./subComponents/EmployeeDetails";

// Importing Styles
import {
  DetMainCont,
  DetailClientCont,
  GridContainer,
  ListButton,
  DetailContainer,
  EmployeeContainer,
  ActionButtons,
} from "../../style";
import { useGlobalData } from "../../context/DataContext";
import AddEmployeeModal from "../../components/Modal/AddEmployeeModal";

// This is for the list variant incase its closed
const ClosedVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,

    transtion: {
      ease: "easeinOut",
      duration: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  },
}; 
const OpenedVariant = {
  initial: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: -100,
    opacity: 0,

    transtion: {
      ease: "easeinOut",
      duration: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  },
};

function DashEmpDetails({ windowsSize }) {
  const { tip, employee, setEmployee, GetAllData } = useGlobalData();
  const [emp, setEmp] = useState([{}]); // This is where the employees data is going to be stored
  const [sorted, setSorted] = useState([{}]); // This is where the combined informated for the detail section will go
  const [loading, setLoading] = useState(false); // For Loading pages
  const [isOpen, setIsOpen] = useState(false); // This is for the details section to open or not
  const [index, setIndex] = useState(0); // This is the default index that will show the pages
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

      if (getTipData.length > 0) {
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
              Client_id: "Not yet Started",
              businessname: "Not yet Started",
              businessAddress: "Not yet Started",
              businessImage: "",
              tip_id: "Not yet started",
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

    setEmp([...a]); // To save the Emp Data;
    setSorted([...employees]); // To save the sorted data;
  };

  useEffect(() => {
    setLoading(true);
    Sorting(employee, tip);
    setLoading(false);
  }, [tip, employee]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!tip) {
    return <h1>Loading... Still Fetching data</h1>;
  }

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  if (windowsSize < 760) {
    if (isOpen) {
      return (
        <DetailContainer height={"80vh"}>
          <EmployeeDetails
            data={sorted[index]}
            setIndex={setIndex}
            formatter={formatter}
            change={setIsOpen}
          />
        </DetailContainer>
      );
    } else {
      return (
        <DetMainCont
          variants={ClosedVariant}
          initial="initial"
          animate="animate"
          exit="exit">
          <DetailClientCont style={{ justifyContent: "space-evenly" }}>
            <h1>Employees</h1>
          </DetailClientCont>
          <DetailClientCont style={{ justifyContent: "space-evenly" }}>
            <h3>Employee information </h3>
          </DetailClientCont>
          <GridContainer>
            <motion.div
              className="col1"
              style={{ width: "100%" }}
              variant={OpenedVariant}
              initial="initial"
              animate="animate"
              exit="exit">
              <div className="coltitle">
                <h3
                  style={{
                    textAlign: "center",
                    padding: "10px 0",
                    marginBottom: "10px",
                  }}>
                  Employees listed
                </h3>
              </div>
              <div
                className="colbutton"
                style={{
                  width: "100%",
                  margin: "12px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <ActionButtons>Add Employee</ActionButtons>
              </div>
              <EmployeeContainer height={"75vh"}>
                {emp &&
                  emp.map((data, i) => {
                    return (
                      <li key={data.id + i}>
                        <ListButton
                          onClick={() => {
                            setIsOpen(true);
                            setIndex(i);
                          }}
                          isSelected={index === i ? true : false}>
                          <span>{data.firstname}</span>
                          <span> </span>
                          <span>{data.lastname}</span>
                        </ListButton>
                      </li>
                    );
                  })}
              </EmployeeContainer>
            </motion.div>
          </GridContainer>
        </DetMainCont>
      );
    }
  }

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() => setModalIsOpen(false)}>
      <DetMainCont
        variants={ClosedVariant}
        initial="initial"
        animate="animate"
        exit="exit">
        <DetailClientCont style={{ justifyContent: "space-evenly" }}>
          <h1>Employees</h1>
        </DetailClientCont>
        <DetailClientCont style={{ justifyContent: "space-evenly" }}>
          <h3>Employee information </h3>
        </DetailClientCont>
        {modalIsOpen && (
          <AddEmployeeModal
            setModalIsOpen={setModalIsOpen}
            setEmployee={setEmployee}
            GetAllData={GetAllData}
          />
        )}
        <GridContainer>
          <motion.div
            className="col1"
            style={{ width: "100%" }}
            variant={OpenedVariant}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className="coltitle">
              <h3
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  marginBottom: "10px",
                }}>
                Employees listed
              </h3>
            </div>
            <div
              className="colbutton"
              style={{
                width: "100%",
                margin: "12px auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <ActionButtons onClick={() => setModalIsOpen(true)}>
                Add Employee
              </ActionButtons>
            </div>
            <EmployeeContainer height={"75vh"}>
              {emp &&
                emp.map((data, i) => {
                  return (
                    <li key={data.id + i}>
                      <ListButton
                        onClick={() => {
                          setIsOpen(true);
                          setIndex(i);
                        }}
                        isSelected={index === i ? true : false}>
                        <span>{data.firstname}</span>
                        <span> </span>
                        <span>{data.lastname}</span>
                      </ListButton>
                    </li>
                  );
                })}
            </EmployeeContainer>
          </motion.div>

          <DetailContainer height={"80vh"}>
            <EmployeeDetails
              data={sorted[index]}
              setIndex={setIndex}
              formatter={formatter}
              setEmployee={setEmployee}
            />
          </DetailContainer>
        </GridContainer>
      </DetMainCont>
    </AnimatePresence>
  );
}

export default DashEmpDetails;
