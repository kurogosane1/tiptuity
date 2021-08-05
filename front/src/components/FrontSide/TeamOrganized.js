import React from "react";
import FrontOrganized from "../../Assets/frontside/FrontOrganized.svg";
import { useHistory } from "react-router";
import {
  Rows,
  SolidButton,
  Container2,
  ClientImage2,
  SubContainers2,
} from "../../style";

function TeamOrganized() {
  let history = useHistory();
  return (
    <Container2 id="Information" data-aos="fade-up">
      <h1 data-aos="fade-up" data-aos-delay="50">
        Keep Your Team Organized.
      </h1>
      <Rows style={{flexWrap:"wrap-reverse"}}>
        <SubContainers2>
          <h3 data-aos="fade-right" data-aos-delay="100">
            A TIP MANAGING SOFTWARE
          </h3>
          <span data-aos="fade-right" data-aos-delay="130">
            See your team's daily progress at a birds eye viewYou can track the
            tips received by time and employee Monitor Tips coming in and out in
            real time
          </span>
          <span data-aos="fade-right" data-aos-delay="130">
            Detail view of tips received by which employee and what client
          </span>
          <span data-aos="fade-right" data-aos-delay="130">
            See your team's daily progress at a birds eye viewYou can track the
            tips received by time and employee Monitor Tips coming in and out in
            real time
          </span>
          <span data-aos="fade-right" data-aos-delay="130">
            Detail view of tips received by which employee and what client
          </span>
          <SolidButton
            onClick={() => history.push("/login")}
            data-aos="fade-right"
            data-aos-delay="140">
            See Demo
          </SolidButton>
        </SubContainers2>
        <div style={{ flex: 2 }} data-aos="fade-up">
          <ClientImage2 src={FrontOrganized} alt="" />
        </div>
      </Rows>
    </Container2>
  );
}

export default TeamOrganized;
