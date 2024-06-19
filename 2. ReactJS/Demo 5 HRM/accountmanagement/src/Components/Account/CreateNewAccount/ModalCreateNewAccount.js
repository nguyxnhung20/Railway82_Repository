import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

import InputForm from "./InputForm";

function ModalCreateNewAccount(props) {
  // Gọi lại các props truyền từ bên ngoài vào
  const { showForm, closeMadal, onHandleCreateNewAccount } = props;
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeMadal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
