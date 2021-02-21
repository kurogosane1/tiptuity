import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { Skeleton } from "@material-ui/lab";
import "../../App.css";
import "../../style/Clients.css";

export default function Clients() {
  //getting the date from the employee section
  const { employee, client } = useContext(DataContext);
  //This is where the name of the of the clients are stored;
  const [clients, setClients] = useState();
  //This is to sort out the date for sorting things out
  const getData = () => {
    //This is to get the client name's
    const client_info = employee
      .map((data, index) => {
        const { tipsAmount } = data;
        return tipsAmount;
      })
      .map((info, index) => {
        // console.log(info[index].client);
        return info[index].client;
      });

    const tipsSeperated = employee
      .map((data, index) => {
        const { tipsAmount } = data;
        return tipsAmount;
      });
     console.log(tipsSeperated) 

    setClients(client_info);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="clients">
      <div className="top_client">
        <h5 style={{ textAlign: "center" }}>Most tips received from</h5>
        <div>
          <GrMoney size={45} style={{ color: "#5eb735" }} />
          <h2>Biggest Client</h2>
        </div>
      </div>
      <div className="client_amount">
        <h5>Highest Tip received from Client</h5>
        <div>
          <GrMoney size={45} style={{ color: "#5eb735" }} />
          <h2>Highest Amount from Client</h2>
        </div>
      </div>
      <div className="num_clients">
        <h5 style={{ textAlign: "center" }}>Number of Clients</h5>
        <div>
          <IoPersonOutline size={45} />
          <h2>{clients ? clients.length : <Skeleton />}</h2>
        </div>
      </div>
      <div className="amounts_by_clients">
        <h4 style={{ textAlign: "center" }}>Number of Clients listed</h4>
        <button style={{ margin: "0 auto" }}>Add more clients</button>
        <ul className="amounts_by_clients_container">
          {clients ? (
            clients.map((data) => {
              return (
                <li>
                  <div className="individual_client">
                    <h5 style={{ textAlign: "center", fontSize: "20px" }}>
                      {data}
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
      <div className="clients_details">
        <img
          src="https://www.creativeboom.com/uploads/articles/96/96236a5db32aeec1a1ecf03c866c2b2ef3424912_1620.jpeg"
          alt=" mockup"
          width="700"
          height="700"
        />
        <div className="client_information">
          <div>
            <label htmlFor="">Contact Name</label>
            <span>Some Client Name</span>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <span>Some Client Address</span>
          </div>
        </div>
        <div className="modification">
          <button>Edit Client</button>
          <button>Delete Client</button>
        </div>
      </div>
    </div>
  );
}
