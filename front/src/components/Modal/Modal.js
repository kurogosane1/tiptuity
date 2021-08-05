import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ModalBackGroundContainer,
  ModalContainer,
  OutLinedButtons,
  SolidButtons2,
} from "../../style";

const modalVariant = {
  visible: { opacity: 1, y: 0 },
  notvisible: { opacity: 0, y: "-100vh" },
  exit: { opacity: 0, y: 100 },
};

function Modal({ tipAmount, formatter, setModalOpen, setConfirm }) {
  return (
    <ModalBackGroundContainer onClick={() => setModalOpen(false)}>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setModalOpen(false)}>
        <ModalContainer
          variants={modalVariant}
          initial="notvisible"
          animate="visible"
          exit="exit">
          <h1>Do you Agree to Pay</h1>
          <h1>The Amount of {formatter.format(tipAmount)}</h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              marginTop: "50px",
            }}>
            <OutLinedButtons
              style={{ marginRight: "10px" }}
              onClick={() => {
                setConfirm(false);
                setModalOpen(false);
              }}>
              No
            </OutLinedButtons>
            <SolidButtons2 onClick={() => setConfirm(true)}>Yes</SolidButtons2>
          </div>
        </ModalContainer>
      </AnimatePresence>
    </ModalBackGroundContainer>
  );
}

export default Modal;
