import React from "react";
import {
  ModalBackGroundContainer,
  LoginContainer,
  InputContainer,
  InputLabel,
  InputText,
  OutLinedButtons,
} from "../../style";

function AddClientModal() {
  return (
    <ModalBackGroundContainer>
      <LoginContainer style={{ borderRadius: "20px" }}>
        <h1>Add Clients</h1>
        <p>Note: Currently adding images is disabled</p>
        <InputContainer>
          <InputLabel>Business Name</InputLabel>
          <InputText type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Business Address</InputLabel>
          <InputText type="text" />
        </InputContainer>
        <OutLinedButtons>Add Client</OutLinedButtons>
      </LoginContainer>
    </ModalBackGroundContainer>
  );
}

export default AddClientModal;
