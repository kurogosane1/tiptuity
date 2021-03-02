import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { Avatar } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import "../../style/IndClient.css";
import axios from "axios";

export default function IndClient() {
  const { tipped } = useContext(DataContext);
  //To pull out the information
  const location = useLocation();
  //To use history
  const history = useHistory();
  //This is where to save individual Data
  const [indEmp, setIndEmp] = useState();
  //Get the data to be stored in a state
  const Store = () => {
    let data = location.state.Data;
    setIndEmp([...data]);
  };

  useEffect(() => {
    Store();
  }, []);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

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

  return (
    <div>
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
            <div className="clients_detailss" key={index}>
              <div className="modification">
                <button
                  onClick={() => {
                    history.goBack();
                  }}>
                  Go Back
                </button>
              </div>
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
                <button
                  onClick={() => {
                    history.push("/api/UpdateClient", {
                      id: Client_id,
                    });
                  }}>
                  Edit Client
                </button>
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
