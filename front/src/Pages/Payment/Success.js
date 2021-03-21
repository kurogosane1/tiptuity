import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Check from "../../Assets/green-checkmark-line.svg";
import "../../style/Success.css";

export default function Success() {
  const location = useLocation();
  const [tips, setTip] = useState();

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    setTip(location.state.data);
  }, []);

  return (
    <div className="success_page">
      <div className="succ-page">
        <div className="Thank_Success">
          <h2>Thank you so much!</h2>
        </div>
        <div className="icon checkmark">
          <img src={Check} alt=""/>
        </div>
        <div className="info">
          <span>{`You have successfully paid tip of ${formatter.format(
            tips
          )} to ${location.state.emp.firstname} ${
            location.state.emp.firstname
          }`}</span>
        </div>
        <div className="end">
          <h2>You can now close the page/window</h2>
        </div>
      </div>
    </div>
  );
}
