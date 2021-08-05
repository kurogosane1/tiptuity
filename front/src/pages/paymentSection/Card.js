import React from "react";
import { CardDesign } from "../../style";

function Card() {
  return (
    <CardDesign
      options={{
        hidePostalCode: true,
        style: {
          base: {
            letterSpacing: "2px",
            lineHeight: "3.5",
            fontSize: "20px",
            color: "#171718",
            fontFamily: "Poppins, sans-serif",
            height: "60px",
            ":focus": {
              outline: "none",
              border: "2px solid #006726",
            },
          },

          invalid: {
            iconColor: "red",
            color: "red",
          },
        },
      }}
    />
  );
}

export default Card;
