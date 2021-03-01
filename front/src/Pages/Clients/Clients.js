import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Skeleton } from "@material-ui/lab";
import "../../App.css";
import "../../style/Clients.css";
import axios from "axios";
import { Dialog, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { AddClient } from "../Dialog/AddClient";
require("dotenv").config();

export default function Clients() {
  //getting the date from the employee section
  const { employee, client, tipped, setClient } = useContext(DataContext);
  // Store Client/Employee information
  const [Employee, setEmployee] = useState();
  //Store the individual
  const [indEmp, setIndEmp] = useState();
  //clicked index
  const [clicked, setClicked] = useState();
  //For the Dialog/Modal to open or close
  const [opened, setIsOpened] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //Getting the data sorted out
  const handleClick = (index, id) => {
    setClicked(index);
    Individual(id);
  };

  //Store the Individual Data
  const Individual = (id) => {
    const individual = Employee.filter((info) => info.Client_id === id);
    setIndEmp([...individual]);
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //Get Data Sorted Out
  const Sorted = () => {
    const clients = client.map((data) => {
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

      const Tip_data = tipped.filter((info) => info.client_id === Client_id);
      if (Tip_data.length >= 1) {
        tip = Tip_data[0].tip_amount;
        emp_id = Tip_data[0].emp_id;
        tip_id = Tip_data[0].id;

        let Emp_data = employee.filter((info) => info.id === emp_id);

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
      };
    });

    //Sort the data by largest tips
    const LargestClient = clients.sort((a, b) => b.tip - a.tip);
    //Get the Client information along with tips
    setEmployee([...LargestClient]);
  };

  //Delete Client
  const DeleteClient = async (id, tip_id) => {
    const result = await axios
      .delete("/api/Client", { data: { id, tip_id } })
      .then((response) => {
        console.log(response);
        return response;
      });
    console.log(result);
  };

  //Update Client
  const UpdateClient = async (id) => {
    const result = await axios
      .put("/Client", { id })
      .then((response) => response);
    console.log(result);
  };

  useEffect(() => {
    Sorted();
  }, []);
  useEffect(() => {
    Sorted();
  }, [client]);
  useEffect(() => {}, [indEmp]);

  return (
    <div className="clients">
      <div className="top_client">
        <h5 style={{ textAlign: "center" }}>Most tips received from</h5>
        <div>
          <GrMoney size={45} style={{ color: "#5eb735" }} />
          <h2>{Employee ? Employee[0].Client : "Biggest Client"}</h2>
        </div>
      </div>
      <div className="client_amount">
        <h5>Highest Tip received from Client</h5>
        <div>
          <GrMoney size={45} style={{ color: "#5eb735" }} />
          <h2>{Employee ? Employee[0].tip : "Highest Amount from Client"}</h2>
        </div>
      </div>
      <div className="num_clients">
        <h5 style={{ textAlign: "center" }}>Number of Clients</h5>
        <div>
          <IoPersonOutline size={45} />
          <h2>{client ? client.length : <Skeleton />}</h2>
        </div>
      </div>
      <div className="amounts_by_clients">
        <h4 style={{ textAlign: "center" }}>Number of Clients listed</h4>
        <button
          className="Add_client"
          onClick={() => {
            setIsOpened(true);
          }}>
          Add more clients
        </button>
        <ul className="amounts_by_clients_container">
          {client ? (
            client.map((data, index) => {
              const { businessname, id } = data;
              return (
                <li key={index}>
                  <div
                    className={
                      clicked === index
                        ? "individual_client_clicked"
                        : "individual_client"
                    }
                    onClick={() => handleClick(index, id)}>
                    <h5 style={{ textAlign: "center", fontSize: "20px" }}>
                      {businessname}
                    </h5>
                  </div>
                </li>
              );
            })
          ) : (
            <Skeleton />
          )}
        </ul>
      </div>
      {indEmp ? (
        indEmp.map((data, index) => {
          const {
            Client_id,
            Client,
            Client_Address,
            Client_Img,
            tip_id,
          } = data;
          const tips = tipped.filter((info) => info.client_id === Client_id);

          const Total_tips = tips.reduce(
            (acc, curr) => acc + curr.tip_amount,
            0
          );

          return (
            <div className="clients_details" key={index}>
              <img
                src={Client_Img ? Client_Img : ""}
                alt=" mockup"
                width="500"
                height="600"
              />
              <div className="client_information">
                <div>
                  <label htmlFor="">Client Name: </label>
                  <span>{Client}</span>
                </div>
                <div>
                  <label htmlFor="">Address: </label>
                  <span>{Client_Address}</span>
                </div>
                <div>
                  <label htmlFor="">Tips Collected So Far: </label>
                  <span>{formatter.format(Total_tips)}</span>
                </div>
              </div>
              <div className="modification">
                <button>Edit Client</button>
                <button onClick={() => DeleteClient(Client_id, tip_id)}>
                  Delete Client
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="clients_details">
          <img
            src="https://www.creativeboom.com/uploads/articles/96/96236a5db32aeec1a1ecf03c866c2b2ef3424912_1620.jpeg"
            alt=" mockup"
            width="700"
            height="700"
          />
          <div className="client_information">
            <div>
              <Skeleton style={{ width: "100%" }} />
            </div>
            <div>
              <Skeleton style={{ width: "100%" }} />
              <Skeleton style={{ width: "100%" }} />
            </div>
            <div>
              <Skeleton style={{ width: "100%" }} />
              <Skeleton style={{ width: "100%" }} />
            </div>
          </div>
          <div className="modification">
            <Skeleton style={{ width: "100%" }} />
            <Skeleton style={{ width: "100%" }} />
          </div>
        </div>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={opened}
        onClose={() => setIsOpened(false)}>
        <AddClient
          client={client}
          setClient={setClient}
          closeDialog={setIsOpened}
        />
      </Dialog>
    </div>
  );
}
