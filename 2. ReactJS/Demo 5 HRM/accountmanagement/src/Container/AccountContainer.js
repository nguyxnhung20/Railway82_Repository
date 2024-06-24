import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import Axios from "axios"; // Import thư viện Axios để sử dụng

function AccountContainer(props) {
  // Khai báo State để quản lý trạng thái đóng mở của ModalCreateNewAccount(InputForm)
  let [showForm, setShowForm] = useState(false);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listAccount, setListAccount] = useState([]);

  // khai báo state để quản lý danh sách positipn
  const [listPosition, setListPosition] = useState([]);
  // khai báo state để quản lý danh sách department
  const [listDepartment, setListDepartment] = useState([]);

  // Hàm Callback xử lý khi nhấn nút CreateNewAccount
  let onHandleCreateButtuon = () => {
    // console.log("click!!");
    setShowForm(true);
  };
  // Hàm Callback xử lý khi nhấn nút Close ở ModalCreateNewAccount
  let onHandleCloseModal = () => {
    // console.log("click!!");
    setShowForm(false);
  };
  // Hàm Callback xử lý khi nhấn nút Create ở InputForm
  let onHandleCreateNewAccount = (accountNew) => {
    // console.log("accountNew: ", accountNew);
    listAccount.push(accountNew);
    // Set lại state listAccount
    setListAccount(listAccount);
    // Lưu dữ liệu vào LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // Thực hiện đóng Form sau khi thêm mới
    setShowForm(false);
  };

  // Hàm lấy dữ liệu Account từ API
  let fetchListAccount = function () {
    const baseURL = `http://localhost:8080`; // Link địa chỉ Server

    Axios.get(`${baseURL}/api/v1/accounts`)
      .then((response) => {
        // console.log(response.data);
        let listAccounts_API = response.data; // ListAcconunt nhân được khi Call API
        setListAccount(listAccounts_API); // Set lại State
      })
      .catch((error) => console.log(error));
  };

  // Hàm lấy dữ liệu position theo api
  const fetchListPosition = () => {
    const baseURL = `http://localhost:8080`; // Link địa chỉ Server

    Axios.get(`${baseURL}/api/v1/possitions`)
      .then((response) => {
        // console.log(response.data);
        let listPosition_API = response.data;
        setListPosition(listPosition_API);
      })
      .catch((error) => console.log(error));
  };

  // Hàm lấy dữ liệu department theo api
  const fetchListDepartment = () => {
    const baseURL = `http://localhost:8080`; // Link địa chỉ Server

    Axios.get(`${baseURL}/api/v1/departments`)
      .then((response) => {
        // console.log(response.data);
        let listDepartment_API = response.data;
        setListDepartment(listDepartment_API);
      })
      .catch((error) => console.log(error));
  };

  // setListAccount(listAccount);

  // Khai báo useEffect, useEffect này khi component được mount và mỗi khi State: listAccount thay đổi
  useEffect(() => {
    fetchListAccount();
    fetchListPosition();
    fetchListDepartment();
    // if (localStorage && localStorage.getItem("listAccount")) {

    // let listAccount_LocalStorage = JSON.parse(
    //   localStorage.getItem("listAccount")
    // );
    // console.log("listAccount_LocalStorage: ", listAccount_LocalStorage);
    // setListAccount(listAccount_LocalStorage);
    // }
  }, []);

  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      {/* Form thêm mới Account*/}
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
        listPosition={listPosition}
        listDepartment={listDepartment}
      />
      {/* Form kết quả */}
      <ResultForm listAccount={listAccount} />
    </Container>
  );
}

export default AccountContainer;
