import React from "react";
import { GrMoney } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import "../../App.css";
import "../../style/Clients.css";

export default function Clients() {
  return (
    <div className="clients">
      <div className="top_client">
        <h5>Most tips received from</h5>
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
        <h5>Number of Clients</h5>
        <div>
          <IoPersonOutline size={45} />
          <h2>20</h2>
        </div>
      </div>
      <div className="amounts_by_clients">
        <h4>Number of Clients listed</h4>
        <button>Add more clients</button>
        <ul className="amounts_by_clients_container">
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
          <li>
            <div className="individual_client">
              <span>Client Name</span>
            </div>
          </li>
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
