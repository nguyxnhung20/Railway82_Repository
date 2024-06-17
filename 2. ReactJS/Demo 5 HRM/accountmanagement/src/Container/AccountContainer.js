import React, { useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";

function AccountContainer(props) {
  // Khai báo State để quản lý trạng thái đóng mở của ModalCreateNewAccount(InputForm)
  let [showForm, setShowForm] = useState(false);

  // Hàm Callback xử lý khi nhấn nút CreateNewAccount
  let onHandleCreateButtuon = () => {
    // console.log("click!!");
    setShowForm(true);
  };

  let onHandleCloseCreateButtuon = () => {
    setShowForm(false);
  };

  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      {/* Form thêm mới Account*/}
      <ModalCreateNewAccount
        showForm={showForm}
        closeMadal={onHandleCloseCreateButtuon}
      />
      {/* Form kết quả */}
      <ResultForm />
    </Container>
  );
}

export default AccountContainer;
