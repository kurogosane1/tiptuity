import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  LoginSection,
  LoginContainer,
  InputContainer,
  InputLabel,
  InputText,
  OutLineButton,
  SolidButton,
  MessageContainer,
  ErrorSpan,
} from "../../style";
import { useUserData } from "../../context/LogContext";

export const LoadVariance = {
  initial: { opacitiy: 0, y: "100" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100" },
};

function Login() {
  const { setLogged } = useUserData();
  const [error, setError] = useState();
  let history = useHistory();
  const emailAddress = useRef();
  const password = useRef();

  const handleClick = async () => {
    console.log(emailAddress.current.value);
    if (!emailAddress.current.value) {
      console.log("This ran");
      setError("Please enter a valid Email address");
    } else if (!password.current.value) {
      setError("Please enter a valid Password");
    } else if (!password.current.value && !emailAddress.current.value) {
      setError("Please enter valid email and password");
    } else if (password.current.value.length < 6) {
      setError("Please enter a valid Password");
    } else {
      await axios
        .post(
          "/api/Login",
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
          if (res.data.message === "success") {
            setLogged({ type: "LOG_IN" });
            history.push("/dash");
          } else {
            if (res.data.message.message) setError(res.data.message.message);
            setError(res.data.message);
          }
        })
        .catch((err) => {
          setError(err);
        });
    }
  };
  const GuestLogin = async () => {
    emailAddress.current.value = "jdoe@email.com";
    password.current.value = "passwordsucks";
    await axios
      .post(
        "/api/Login",
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
        if (res.data.message === "success") {
          setLogged({ type: "LOG_IN" });
          history.push("/dash");
        } else {
          if (res.data.message.message) setError(res.data.message.message);
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <AnimatePresence initial={false}>
      <LoginSection
        variants={LoadVariance}
        initial="initial"
        animate="animate"
        exit="exit">
        <LoginContainer>
          <h1>User Login</h1>
          <span>Please login to access Dashboard</span>
          {error && <ErrorSpan>{error}</ErrorSpan>}
          <InputContainer>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <InputText type="email" ref={emailAddress} />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputText type="password" ref={password} />
          </InputContainer>
          <div>
            <OutLineButton
              style={{
                width: "150px",
                fontSize: "14px",
                padding: "15px 15px",
                borderRadius: "20px",
              }}
              onClick={handleClick}>
              Login
            </OutLineButton>
            <SolidButton
              style={{
                width: "150px",
                fontSize: "14px",
                padding: "15px 15px",
                borderRadius: "20px",
              }}
              onClick={GuestLogin}>
              Guest Login
            </SolidButton>
          </div>
          <MessageContainer
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <p>
              For viewing the Demo, please click the Guest Login Button. Then
              Press the Login Button to get see the Demo. To go back home, click
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
            <p>
              If you want to signup then click{" "}
              <strong
                onClick={() => history.push("/signup")}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
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

export default Login;
