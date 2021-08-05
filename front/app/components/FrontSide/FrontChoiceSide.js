import React from "react";
import { Rows2, SolidButton, Container2, OutLineButton } from "../../style";

function FrontChoiceSide() {
  return (
    <Container2 id="Pricing">
      <p data-aos="fade-up" data-aos-delay="50">
        TIP MANAGEMENT APP FOR VALLERS
      </p>
      <h1 data-aos="fade-up" data-aos-delay="100">
        Boost Productivity.
      </h1>
      <h1 data-aos="fade-up" data-aos-delay="150">
        Drive Growth.
      </h1>
      <p data-aos="fade-up" data-aos-delay="200">
        You need a app that will empower you, your team, working with your
        clients together
      </p>
      <Rows2 style={{ alignItems: "stretch", flexWrap: "wrap" }}>
        <div
          className="options"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "white",
            padding: "20px",
          }}
          data-aos="zoom-in">
          <h2>BASIC</h2>
          <span>
            <strong>$225</strong> / month up to 3 employees
          </span>
          <span>Up to 3 Users</span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <span>CRM</span>
            <span>Tip Tracking</span>
            <span>Time and Billing</span>
          </div>
          <div style={{ flex: 2 }}></div>
          <SolidButton>Contact for Details</SolidButton>
        </div>
        <div
          className="options"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#006726",
            padding: "20px",
            color: "white",
          }}
          data-aos="zoom-in"
          data-aos-delay="100">
          <h2>MOST</h2>
          <span>
            <strong>$225</strong> / month up to 3 employees
          </span>
          <span>Up to 3 Users</span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <span>CRM</span>
            <span>Tip Tracking</span>
            <span>Time and Billing</span>
            <span>Administrative Tools</span>
          </div>
          <div style={{ flex: 2 }}></div>
          <OutLineButton>Contact for Details</OutLineButton>
        </div>
        <div
          className="options"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "white",
            padding: "20px",
          }}
          data-aos="zoom-in"
          data-aos-delay="200">
          <h2>PREMIUM</h2>
          <span>
            <strong>$225</strong> / month up to 3 employees
          </span>
          <span>Up to 3 Users</span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <span>CRM</span>
            <span>Tip Tracking</span>
            <span>Time and Billing</span>
            <span>Administrative Tools</span>
            <span>Tax Tools</span>
          </div>
          <div style={{ flex: 2 }}></div>
          <SolidButton>Contact for Details</SolidButton>
        </div>
      </Rows2>
    </Container2>
  );
}

export default FrontChoiceSide;
