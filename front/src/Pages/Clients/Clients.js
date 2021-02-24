import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Skeleton } from "@material-ui/lab";
import "../../App.css";
import "../../style/Clients.css";

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
    const Employees = employee.map((data) => {
      //get out all the variables
      const {
        id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
      } = data;
      let Tip_data = tipped
        .filter((info) => info.emp_id === id)
        .map((data) => {
          return {
            tip: data.tip_amount,
            Client_id: data.client_id,
            date: data.createdAt,
          };
        });
      //Destructuring the data
      const { tip, Client_id, date } = Tip_data[0];
      let Client_info = client
        .filter((info) => info.id === Client_id)
        .map((data) => {
          return {
            name: data.businessname,
            address: data.businessAddress,
            Bus_Image: data.businessImage,
          };
        });
      console.log(Client_info);
      const Client = Client_info[0].name;
      const Client_Address = Client_info[0].address;
      const Client_Img = Client_info[0].Bus_Image;
      return {
        id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
        tip,
        Client_id,
        Client,
        Client_Address,
        Client_Img,
        date,
      };
    });
    //Sort the data by largest tips
    const LargestClient = Employees.sort((a, b) => b.tip - a.tip);
    //Get the Client information along with tips
    setEmployee([...LargestClient]);
  };

  useEffect(() => {
    Sorted();
    console.log(Employee);
  }, []);

  useEffect(() => {
    console.log(indEmp);
  }, [indEmp]);

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
        <button style={{ margin: "0 auto" }}>Add more clients</button>
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
          const { Client_id, Client, Client_Address, Client_Img } = data;
          const tips = tipped.filter((info) => info.client_id === Client_id);

          const Total_tips = tips.reduce(
            (acc, curr) => acc + curr.tip_amount,
            0
          );
          console.log(Client_Img);
          return (
            <div className="clients_details" key={index}>
              <img src={Client_Img} alt=" mockup" width="570" height="700" />
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
                <button>Delete Client</button>
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
