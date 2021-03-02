import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../../Context/Data";

export default function UpdateClient() {
  const { client, setClient } = useContext(DataContext);

  //To get state that was passed down
  const location = useLocation();
  //To be able to get back
  const history = useHistory();

  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();

  //These are the variables that need to be updated if possible
  const [businessname, setBusinessName] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [businessImage, setBusinessImage] = useState();
  const [id, setId] = useState();

  //To get the data from the server for the website
  const FetchData = async () => {
    const data = await axios.get(`/api/Client/${location.state.id}`);
    if (data.data.message === "Successfully found information") {
      setBusinessName(data.data.data[0].businessname);
      setBusinessAddress(data.data.data[0].businessAddress);
      setBusinessImage(data.data.data[0].businessImage);
    } else {
      setMessage();
      setAlert(data.data.message);
    }
  };

  //To update Client data
  const UpdateClient = async (e) => {
    e.preventDefault();
    const data = await axios.put(`/api/Client/${location.state.id}`, {
      businessAddress,
      businessImage,
      businessname,
    });

    if (data.data.message === "Successfully Updated the Client") {
      const Information = client.filter((info) => info.id != location.state.id);

      setClient([...Information, data.data.data[0]]);
    }

    console.log(data);
    setTimeout(() => {
      history.goBack();
    }, 3000);
  };

  useEffect(() => {
    setId(location.state.id);
    setAlert();
    setMessage();
    FetchData();
  }, []);

  return (
    <div className="Updating">
      <div className="Input_areas">
        <button
          onClick={() => {
            history.goBack();
          }}>
          Go Back
        </button>
      </div>
      <div>
        <h2>Update a new Client</h2>
        <br />
        <span
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
          }}>
          {message ? message : null}
        </span>
        <br />
        <span style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {alert ? alert : null}
        </span>
        <div>
          <h4>Client Name</h4>
          <span>{businessname ? businessname : null}</span>
        </div>
        <div>
          <h4>Client Address</h4>
          <span>{businessAddress ? businessAddress : null}</span>
        </div>
        <div>
          <h4>Business Logo</h4>
          <img
            src={businessImage ? businessImage : ""}
            style={{ borderRadius: "10px", width: "200px", height: "200px" }}
          />
        </div>
        <form>
          <div className="Input_areas">
            <label htmlFor="">Client Name</label>
            <input
              type="text"
              className="input_form"
              name="businessname"
              onChange={(e) => {
                setBusinessName(e.target.value);
              }}
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Client Street Address</label>
            <input
              type="businessAddress"
              onChange={(e) => {
                setBusinessAddress(e.target.value);
              }}
            />
          </div>
          <div className="Input_areas">
            <label htmlFor="">Client Image</label>
            <span>Coming soon being able to update Images</span>
          </div>

          <div className="Input_areas">
            <button
              onClick={(e) => {
                UpdateClient(e);
              }}>
              Update Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
