import React from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "../Front_Page/Navbar/Nav";
import Iphone from "../../Assets/FrontEnd.svg";
import QR from "../../Assets/FrontQR.svg";
import Img from "../../Assets/Dashboard.png";
import "../../style/FrontPage.css";
import Footer from "./Footer";
import QRcode from "qrcode.react";

export function Front() {
  const history = useHistory();
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
        <div
          className="main-body-desc"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            lineHeight: "3rem",
            justifyContent:'space-evenly',
            alignItems:'center'
          }}>
          <h1>
            Tiptuity has made it easier for you to pay a tip using your phone
            and camera and just pay what you feel
          </h1>
          <h2>Go ahead Scan the QRcode below</h2>
          <span>
            Use card number 4242-4242-4242-4242 and any date and any late date
            for CVC for demo purpose
          </span>
          <QRcode
            value={`https://tiptuityv2.herokuapp.com/api/Employee/00513b22-5614-4df2-8373-a5bf95f6546f`}
            renderAs="svg"
            size={248}
          />
        </div>
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
        <img
          src={Img}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        />
        <p>
          Employers can log in and track the Employee Trends. Complete Client
          history and tips received from what location. A complete employee and
          client management system for Employers and tracking Tips.
        </p>
        <div className="inner-dash">
          <span>Want a demo</span>
          <button
            className="Demo-Button"
            onClick={() => history.push("/Login")}>
            Click Here
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
