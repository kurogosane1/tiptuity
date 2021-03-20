import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Check from "../../Assets/green-checkmark-line.svg";
import "../../style/Success.css";

export default function Failure() {
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
          <h2>Unsuccessful</h2>
        </div>
        <div className="icon checkmark">
          <svg
            id="Layer_1"
            enable-background="new 0 0 512.292 512.292"
            height="512"
            viewBox="0 0 512.292 512.292"
            width="512"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <g>
                <g>
                  <ellipse
                    cx="256.146"
                    cy="256.146"
                    fill="#ff0031"
                    rx="256.064"
                    ry="256.146"
                  />
                </g>
                <path
                  d="m256.404 0v512.286c141.301-.14 255.806-114.764 255.806-256.143s-114.505-256.003-255.806-256.143z"
                  fill="#ae2538"
                />
              </g>
              <path
                d="m372.338 182.874-43.712-43.712c-2.148-2.148-5.631-2.148-7.779 0l-61.172 61.172c-2.148 2.148-5.631 2.148-7.779 0l-61.172-61.172c-2.148-2.148-5.631-2.148-7.779 0l-43.712 43.712c-2.148 2.148-2.148 5.631 0 7.779l61.172 61.172c2.148 2.148 2.148 5.631 0 7.779l-61.172 61.172c-2.148 2.148-2.148 5.631 0 7.779l43.712 43.712c2.148 2.148 5.631 2.148 7.779 0l61.172-61.172c2.148-2.148 5.631-2.148 7.779 0l61.172 61.172c2.148 2.148 5.631 2.148 7.779 0l43.712-43.712c2.148-2.148 2.148-5.631 0-7.779l-61.172-61.172c-2.148-2.148-2.148-5.631 0-7.779l61.172-61.172c2.148-2.148 2.148-5.63 0-7.779z"
                fill="#fff5f5"
              />
              <path
                d="m372.338 190.654c2.148-2.148 2.148-5.631 0-7.779l-43.712-43.712c-2.148-2.148-5.631-2.148-7.779 0l-61.172 61.172c-1.008 1.008-2.312 1.525-3.632 1.586v107.589c1.32.062 2.624.578 3.632 1.586l61.172 61.172c2.148 2.148 5.631 2.148 7.779 0l43.712-43.712c2.148-2.148 2.148-5.631 0-7.779l-61.172-61.172c-2.148-2.148-2.148-5.631 0-7.779z"
                fill="#dfebf1"
              />
            </g>
          </svg>
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
