import React from "react";
import { Button } from "reactstrap";

function CreateButton(props) {
  //
  let { onHandleCreateButton } = props;
  // Hàm xử lý sự kiện khi nhấn nút Create New Account
  let handleClick = () => {
    onHandleCreateButton();
  };
  //
  return (
    <>
      <Button color="primary" size="sm" onClick={handleClick}>
        Create New Account
      </Button>
    </>
  );
}

export default CreateButton;
