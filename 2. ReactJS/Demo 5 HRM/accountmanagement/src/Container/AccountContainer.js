import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
// import Axios from "axios"; // Import thư viện Axios để sử dụng
import {
  getListAccountAPI,
  addAccountNewAPI,
  deleteAccountAPI,
} from "../API/AccountAPI";
import { getListDepartmentAPI } from "../API/DepartmentAPI";
import { getListPositionAPI } from "../API/PositionAPI";

function AccountContainer(props) {
  // Khai báo State để quản lý trạng thái đóng mở của ModalCreateNewAccount(InputForm)
  const [showForm, setShowForm] = useState(false);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  const [listAccount, setListAccount] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  const [listDepartment, setListDepartment] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  const [listPosition, setListPosition] = useState([]);
  // Hàm Callback xử lý khi nhấn nút CreateNewAccount
  const onHandleCreateButtuon = () => {
    // console.log("click!!");
    setShowForm(true);
  };
  // Hàm Callback xử lý khi nhấn nút Close ở ModalCreateNewAccount
  const onHandleCloseModal = () => {
    // console.log("click!!");
    setShowForm(false);
  };
  // Hàm Callback xử lý khi nhấn nút Create ở InputForm
  const onHandleCreateNewAccount = (accountNew) => {
    console.log("accountNew: ", accountNew);
    // Chuyển accountNew về Account cần thêm mới API
    const accountNew_API = {
      email: accountNew.email,
      username: accountNew.username,
      fullname: accountNew.fullname,
      departmentId: accountNew.department,
      positionId: accountNew.position,
    };
    // Gọi hàm call API
    addAccountNewAPI(accountNew_API).then((response) => {
      // Sau khi tạo dữ liệu để load lại listAccount
      fetchListAccount();
    });
    // listAccount.push(accountNew);
    // Set lại state listAccount
    // setListAccount(listAccount);
    // Lưu dữ liệu vào LocalStorage
    // localStorage.setItem("listAccount", JSON.stringify(listAccount));

    // Thực hiện đóng Form sau khi thêm mới
    setShowForm(false);
  };

  // Hàm callback khi ấn nút delete
  const onHandleDelete = (id) => {
    // console.log("id: ", id);
    deleteAccountAPI(id).then((response) => {
      fetchListAccount();
    });
  };

  // Hàm load dữ liệu API cho Account
  const fetchListAccount = function () {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/accounts`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listAccounts_API = response.data; // ListAccounts nhân được khi Call API
    //     setListAccount(listAccounts_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));

    getListAccountAPI().then((response) => {
      setListAccount(response);
    });
    // console.log("listAccounts_API", listAccounts_API);
  };

  // Hàm load dữ liệu API cho Account
  const fetchListDepartment = function () {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/departments`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listDepartment_API = response.data; // ListDepartment nhân được khi Call API
    //     setListDepartment(listDepartment_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));
    getListDepartmentAPI().then((response) => {
      setListDepartment(response);
    });
  };

  // Hàm load dữ liệu API cho Account
  const fetchListPosition = function () {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/possitions`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listPosition_API = response.data; // ListPosition nhân được khi Call API
    //     setListPosition(listPosition_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));
    getListPositionAPI().then((response) => {
      setListPosition(response);
    });
  };

  // Khai báo useEffect, useEffect này khi component được mount và mỗi khi State: listAccount thay đổi
  useEffect(() => {
    fetchListAccount();
    fetchListDepartment();
    fetchListPosition();
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
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      {/* Form kết quả */}
      <ResultForm listAccount={listAccount} onHandleDelete={onHandleDelete} />
    </Container>
  );
}

export default AccountContainer;
