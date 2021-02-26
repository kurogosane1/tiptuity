import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Skeleton } from "@material-ui/lab";
import "../../App.css";
import "../../style/Clients.css";
import axios from "axios";

export default function Clients() {
  //getting the date from the employee section
  const { employee, client, tipped } = useContext(DataContext);
  // Store Client/Employee information
  const [Employee, setEmployee] = useState();
  //Store the individual
  const [indEmp, setIndEmp] = useState();
  //clicked index
  const [clicked, setClicked] = useState();

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

  //Get data sorted out
  const Sorted = () => {
    let Employees = tipped.map((data) => {
      //get out all the variables
      const { id, client_id, emp_id, tip_amount, createdAt } = data;
      //Get the employee data
      const Emp_data = employee
        .filter((info) => info.id === emp_id)
        .map((data) => data);
      //Destructure employee data
      const {
        firstname,
        lastname,
        streetaddress,
        email,
        isAdmin,
        image,
      } = Emp_data;

      const Client_info = client
        .filter((info) => info.id === client_id)
        .map((data) => {
          return {
            name: data.businessname,
            address: data.businessAddress,
            Bus_image: data.businessImage,
          };
        });

      const tip_id = id;
      const Client_id = client_id;
      const ids = emp_id;
      const tip = tip_amount;
      const date = createdAt;
      const Client = Client_info[0].name;
      const Client_Address = Client_info[0].address;
      const Client_Img = Client_info[0].Bus_image;

      return {
        ids,
        firstname,
        lastname,
        streetaddress,
        email,
        isAdmin,
        image,
        tip_id,
        Client_id,
        tip,
        date,
        Client,
        Client_Address,
        Client_Img,
      };
    });
    //Sort the data by largest tips
    const LargestClient = Employees.sort((a, b) => b.tip - a.tip);
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
        <button className="Add_client">Add more clients</button>
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
              <img src={Client_Img} alt=" mockup" width="500" height="600" />
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
    </div>
  );
}
