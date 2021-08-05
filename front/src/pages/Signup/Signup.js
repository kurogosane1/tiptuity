import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  LoginSection,
  LoginContainer,
  InputContainer,
  InputLabel,
  InputText,
  OutLineButton,
  MessageContainer,
} from "../../style";
import { useUserData } from "../../context/LogContext";

export const LoadVariance = {
  initial: { opacitiy: 0, y: "100" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100" },
};

function Signup() {
  let history = useHistory();
  const { setLogged } = useUserData();
  const emailAddress = useRef();
  const password = useRef();
  const password2 = useRef();

  const [error, setError] = useState("");

  const handleChange = async () => {
    setError("");

    if (password.current.value === password2.current.value) {
      await axios
        .post(
          "/api/signup",
          {
            email: emailAddress.current.value,
            password: password.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.message === "User Already Exists. Please Login") {
            setError("User Already Exists. Please Login");
          } else if (res.data.message === "success") {
            setError("");
            history.push("/Login");
          } else {
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    } else {
      setError("Passwords do not match");
    }
  };
  return (
    <AnimatePresence initial={false}>
      <LoginSection
        variants={LoadVariance}
        initial="initial"
        animate="animate"
        exit="exit">
        <LoginContainer>
          <h1>User Signup</h1>
          <span>Please signup to access Dashboard</span>
          <h3 style={{ color: "red" }}>{error}</h3>
          <InputContainer>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <InputText type="email" ref={emailAddress} />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputText type="password" ref={password} />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputText type="password" ref={password2} />
          </InputContainer>
          <div>
            <OutLineButton
              style={{
                width: "150px",
                fontSize: "14px",
                padding: "15px 15px",
                borderRadius: "20px",
              }}
              onClick={handleChange}>
              Signup
            </OutLineButton>
            {/* <SolidButton
              style={{
                width: "150px",
                fontSize: "14px",
                padding: "15px 15px",
                borderRadius: "20px",
              }}>
              Guest Login
            </SolidButton> */}
          </div>
          <MessageContainer style={{ textAlign: "center" }}>
            <p>
              If you've already signed up or just want to check demo then click
              <strong
                onClick={() => history.push("/Login")}
                style={{
                  cursor: "pointer",
                  hover: { backgroundColor: "green" },
                }}>
                {" "}
                here
              </strong>
            </p>
            <p>
              Admin access requires special permission. Please contact us to be
              granted Admin access. To go back home, click
              <strong
                onClick={() => history.push("/")}
                style={{
                  cursor: "pointer",
                  hover: { backgroundColor: "green" },
                }}>
                {" "}
                here
              </strong>
            </p>
          </MessageContainer>
        </LoginContainer>
      </LoginSection>
    </AnimatePresence>
  );
}

export default Signup;
