import React from "react";
import {
  Rows,
  Container2,
  SubContainers,
  SubImage,
} from "../../style";
import Iphone from "../../Assets/frontside/FrontEnd.svg";
import QRcode from "qrcode.react";

function FrontMobileSide() {
  return (
    <Container2 id="Mobile">
      <h1 data-aos="fade-up" data-aos-delay="50">
        Mobile App Coming Soon!
      </h1>
      <Rows style={{ flexWrap: "wrap-reverse" }}>
        <SubContainers data-aos="fade-right" data-aos-delay="50">
          <span>
            Tips can be paid via the phone by simply scanning from the phone
            camera
          </span>
          <span>
            Simply point the camera and scan and it will lead you to the payment
          </span>
          <span>
            Payment is done securely via Stripe and no personal information is
            stored
          </span>
          <span>Go ahead Scan the QRcode below</span>
          <span>
            Use card number 4242-4242-4242-4242 and any date and any late date
            for CVC for demo purpose
          </span>
          <div className="qrs">
            <QRcode value="https://tiptuityv2.herokuapp.com/Demo" size={248} />
          </div>
        </SubContainers>
        <div style={{ flex: 1 }} data-aos="fade-left" data-aos-delay="50">
          <SubImage src={Iphone} alt="mobileversion" />
        </div>
      </Rows>
    </Container2>
  );
}

export default FrontMobileSide;
