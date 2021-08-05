import React from "react";
import { useHistory } from "react-router";
import {
  Rows,
  SolidButton,
  Container,
  OutLineButton,
  FrontImage1,
  FrontImage2,
} from "../../style";
import Front1 from "../../Assets/frontside/FrontImage1.png";
import Front2 from "../../Assets/frontside/front.svg";

function MainSide() {
  let history = useHistory();

  return (
    <Container id="Home" data-aos="fade-up">
      <h1>A New Way of Tipping</h1>
      <h1>and Your Firm.</h1>
      <span>Tipping Software For Valet. Easily get tips for Valet's</span>
      <Rows data-aos="fade-up" data-aos-delay="100">
        <OutLineButton>Learn more</OutLineButton>
        <SolidButton onClick={() => history.push("/login")}>Demo</SolidButton>
      </Rows>
      <Rows>
        <FrontImage1 src={Front1} alt="Front-Dash" data-aos="zoom-in" />
        <FrontImage2 src={Front2} alt="mobile-front" data-aos="zoom-in" />
      </Rows>
    </Container>
  );
}

export default MainSide;
