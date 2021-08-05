import React from "react";
import { motion } from "framer-motion";

import {FrontContainer } from "../../style";
import Logo from "../../Assets/qr-code.svg";

const container = {
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 10,
    },
  },
};

function FrontLoadingPage({ setLoading }) {
  return (
    <FrontContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}>
      <motion.img
        src={Logo}
        alt="Main Front Logo"
        layoutId="FrontLoading"
        style={{ width: "50vw" }}
      />
      {/* <h1>This is the loading page</h1> */}
    </FrontContainer>
  );
}

export default FrontLoadingPage;
