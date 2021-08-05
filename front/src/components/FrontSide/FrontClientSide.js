import React from "react";
import { useHistory } from "react-router-dom";
import FrontSideClient from "../../Assets/frontside/FrontSideClient.svg";

import {
  Rows,
  SolidButton,
  Container2,
  ClientImage,
  SubContainers2,
} from "../../style";
function FrontClientSide() {
  let history = useHistory();
  return (
    <Container2 id="Clients" data-aos="fade-up">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ lineHeight: 1.5 }} data-aos="fade-up" data-aos-delay="50">
          Manage Locations of Valets{" "}
        </h1>
        <h1 style={{ lineHeight: 1.5 }} data-aos="fade-up" data-aos-delay="60">
          and Tips Received.
        </h1>
      </div>

      <Rows>
        <div style={{ flex: 2 }} data-aos="fade-right">
          <ClientImage src={FrontSideClient} alt="Frontsidework" />
        </div>
        <SubContainers2>
          <h3 data-aos="fade-left" data-aos-delay="100">
            LOCATION MANAGEMENT IN ONE PLACE.
          </h3>
          <span data-aos="fade-left" data-aos-delay="150">
            Keep track with tip activities with portal that can be managed by
            location, where you can add Clients, assign Employees or Valets to
            Clients and track all the tips based on location
          </span>
          <span data-aos="fade-left" data-aos-delay="200">
            The location portal is available on mobile layout
          </span>
          <span data-aos="fade-left" data-aos-delay="250">
            Coming soon mobile app on IOS and Android . . .
          </span>
          <SolidButton
            onClick={() => history.push("/login")}
            data-aos="fade-left"
            data-aos-delay="300">
            See Demo
          </SolidButton>
        </SubContainers2>
      </Rows>
    </Container2>
  );
}

export default FrontClientSide;
