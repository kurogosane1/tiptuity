import React from "react";
import { Nav } from "../Front_Page/Navbar/Nav";
import Iphone from "../../Assets/FrontEnd.svg";
import QR from "../../Assets/FrontQR.svg";
import "../../style/FrontPage.css";

export function Front() {
  return (
    <div className="Main-Page">
      <div className="main-header">
        <Nav />
        <div className="main-content">
          <h1>Tipping Made Easier</h1>
          <span className="rows1" style={{ textAlign: "center" }}>
            Just use the camera on your phone,Point it to the Barcode and then
            it will direct you to the card payment and then simply Pay
          </span>
          <img src={QR} alt="" />
        </div>
      </div>
      <div className="main-body">
        <img src={Iphone} alt="iphones" />
        <h1>
          Tiptuity has made it easier for you to pay a tip using your phone and
          camera and just pay what you feel
        </h1>
      </div>
    </div>
  );
}
