import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ModalBackGroundContainer,
  LoginContainer,
  InputContainer,
  InputLabel,
  InputText,
  OutLinedButtons,
} from "../../style";

function AddEmployeeModal({ setModalIsOpen, setEmployee, GetAllData }) {
  const firstname = useRef("");
  const lastname = useRef("");
  const streetaddress = useRef("");
  const email = useRef("");
  const trues = useRef("");
  const falsies = useRef("");

  const handleclick = () => {
    let payload = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      streetaddress: streetaddress.current.value,
      email: email.current.value,
      isAdmin: trues.current.checked ? true : false,
    };

    setEmployee({ type: "ADD_NEW_EMPLOYEE", payload });
    GetAllData();
    setModalIsOpen(false);
  };

  return (
    <AnimatePresence onExitComplete={() => setModalIsOpen(false)}>
      <ModalBackGroundContainer>
        <LoginContainer style={{ borderRadius: "20px" }}>
          <h1>Add Employees</h1>
          <p>Note: Currently adding images is disabled</p>
          <InputContainer>
            <InputLabel>First Name</InputLabel>
            <InputText type="text" ref={firstname} />
          </InputContainer>
          <InputContainer>
            <InputLabel>Last Name</InputLabel>
            <InputText type="text" ref={lastname} />
          </InputContainer>
          <InputContainer>
            <InputLabel>Street Address</InputLabel>
            <InputText type="text" ref={streetaddress} />
          </InputContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputText type="email" ref={email} />
          </InputContainer>
          <span>Administrative Access?</span>
          <InputContainer>
            <label>True</label>
            <InputText type="checkbox" id="isAdmin" name="True" ref={trues}>
              {/* <label>True</label> */}
            </InputText>
            <label>False</label>
            <InputText type="checkbox" id="false" name="False" ref={falsies}>
              {/* <label>False</label> */}
            </InputText>
          </InputContainer>
          <OutLinedButtons onClick={handleclick}>Add Client</OutLinedButtons>
        </LoginContainer>
      </ModalBackGroundContainer>
    </AnimatePresence>
  );
}

export default AddEmployeeModal;
