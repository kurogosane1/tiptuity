import React from "react";
import { Nav } from "../Front_Page/Navbar/Nav";
import Iphone from "../../Assets/FrontEnd.svg";
import QR from "../../Assets/FrontQR.svg";
import Img from "../../Assets/Dashboard.png";
import "../../style/FrontPage.css";

export function Front() {
  return (
    <div className="Main-Page">
      <section className="main-header">
        <Nav />
        <div className="main-content">
          <h1>Tipping Made Easier</h1>
          <span className="rows1" style={{ textAlign: "center" }}>
            Just use the camera on your phone,Point it to the Barcode and then
            it will direct you to the card payment and then simply Pay
          </span>
          <img src={QR} alt="" />
        </div>
      </section>
      <section className="main-body">
        <img src={Iphone} alt="iphones" />
        <h1>
          Tiptuity has made it easier for you to pay a tip using your phone and
          camera and just pay what you feel
        </h1>
      </section>
      <section className="pricing">
        <div className="pricing_Information">
          <h1 style={{ fontSize: "3rem" }}>Pricing</h1>
        </div>
        <ul className="pricing_List">
          <li>
            <div className="pricing_col1">
              <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Basic</h1>
              <div>
                <h1 style={{ flexWrap: "wrap", fontSize: "3rem" }}>
                  $225/year
                </h1>
              </div>
              <ul>
                <li style={{ textAlign: "center" }}>
                  For Up to 3 Employees Only
                </li>
                <li style={{ textAlign: "center" }}>
                  Please contact us for more detail
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="pricing_col2">
              <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Most</h1>
              <div>
                <h1 style={{ flexWrap: "wrap", fontSize: "3rem" }}>
                  $350/year
                </h1>
              </div>
              <ul>
                <li style={{ textAlign: "center" }}>For Up to 5 Employees</li>
                <li style={{ textAlign: "center" }}>
                  Please contact us for more details
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="pricing_col3">
              <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Premium</h1>
              <div>
                <h1 style={{ flexWrap: "wrap", fontSize: "3rem" }}>
                  $500/year
                </h1>
              </div>
              <ul>
                <li style={{ textAlign: "center" }}>For Up to 10 Employees</li>
                <li style={{ textAlign: "center" }}>
                  Please contact us for more details
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="dashboard">
        <h1>Dashboard</h1>
        <img src={Img} style={{ maxWidth: "1100px", maxHeight: "1000px" }} />
        <p>Clients can log in and check the tips</p>
        <p>They can track the trends</p>
        <p>
          A complete employee and client management system for businesses who
          run valet
        </p>
      </section>
      <section className="contact">
        <h2>For further contacting</h2>
      </section>
    </div>
  );
}
