import React from "react";
import { Nav } from "../Front_Page/Navbar/Nav";
import "../../style/FrontPage.css";

export function Front() {
  return (
    <div className="Main-Page">
      <Nav />
      <div className="header-main">
        <div className="main-title">
          <h1 className="main-heading">Tipping made easier!</h1>
        </div>
        <div className="main-image">
          <h1>Some image here</h1>
        </div>
      </div>
      <section className="main-content">
        <div className="sub-main-content">
          <h2>This is where the main content is going to be at </h2>
          <div className="content-main">
            <span>
              Tiptuity has made it easier for you to pay a tip using just your
              phone and camera and just pay
            </span>
            <span>Just pay what you feel </span>
          </div>
          <div className="other-text">
            <span>Just Scan and then pay your tip to your Valet </span>
          </div>
        </div>
        <div className="other-image">
          <span>This is the main image</span>
        </div>
      </section>
      <section className="demo-section">
        <h2>Demo our dashboard and how it helps track your payment</h2>
        <button>Click Here</button>
      </section>
    </div>
  );
}
