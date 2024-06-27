import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function InputForm(props) {
  // Destructuring props để lấy các hàm và danh sách từ props
  let { onHandleCreateNewAccount, listDepartment, listPosition } = props;

  // Khai báo state lưu trữ dữ liệu cho các ô nhập liệu
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [fullname, setFullname] = useState("");
  let [Department, setDepartment] = useState("");
  let [Position, setPosition] = useState("");

  // Hàm xử lý sự kiện khi nhấn nút Create
  let handleCreate = () => {
    // Tạo đối tượng tài khoản mới từ các giá trị hiện tại
    let accountNew = {
      email: email,
      username: username,
      fullname: fullname,
      departmentId: Department,
      positionId: Position,
    };

    // Gọi hàm từ props để xử lý tạo tài khoản mới
    onHandleCreateNewAccount(accountNew);
  };

  // Tạo các mục cho dropdown Phòng ban
  let departmentOptions = listDepartment.map((dep, index) => {
    return (
      <option value={dep.id} key={index}>
        {dep.name}
      </option>
    );
  });

  // Tạo các mục cho dropdown Chức vụ
  let positionOptions = listPosition.map((position, index) => {
    return (
      <option value={position.id} key={index}>
        {position.name}
      </option>
    );
  });

  return (
    <>
      <Form>
        {/* Ô nhập liệu Email */}
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input
            id="email"
            name="email"
            placeholder="Nhập Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </FormGroup>

        {/* Ô nhập liệu Username */}
        <FormGroup>
          <Label for="username">Username: </Label>
          <Input
            id="username"
            name="username"
            placeholder="Nhập Username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Ô nhập liệu Fullname */}
        <FormGroup>
          <Label for="fullname">Họ và tên: </Label>
          <Input
            id="fullname"
            name="fullname"
            placeholder="Nhập Họ và tên"
            type="text"
            value={fullname}
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Dropdown chọn Phòng ban */}
        <FormGroup>
          <Label for="department">Chọn Phòng ban: </Label>
          <Input
            id="department"
            name="department"
            type="select"
            value={Department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            <option value="">-- Chọn Phòng ban --</option>
            {departmentOptions}
          </Input>
        </FormGroup>

        {/* Dropdown chọn Chức vụ */}
        <FormGroup>
          <Label for="position">Chọn Chức vụ: </Label>
          <Input
            id="position"
            name="position"
            type="select"
            value={Position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option value="">-- Chọn Chức vụ --</option>
            {positionOptions}
          </Input>
        </FormGroup>
      </Form>

      {/* Nút tạo tài khoản */}
      <Button color="primary" onClick={handleCreate}>
        Tạo
      </Button>

      {/* Nút đặt lại */}
      <Button color="danger" type="reset">
        Đặt lại
      </Button>
    </>
  );
}

export default InputForm;
