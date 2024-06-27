import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResutlForm from "../Components/Account/ResutlForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import {
  getListAccountAPI,
  createNewAccountAPI,
  deleteAccountAPI,
  updateAccountAPI,
} from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/Department";
import { getListPositionAPI } from "../API/PositionAPI";

function AccountContainer(props) {
  // Khai báo state showForm để quản lý ẩn hiện của Modal
  let [showForm, setShowForm] = useState(false);
  // Khai báo State ListAccount để quản lý danh sách Account đang có trên hệ thống
  let [listAccount, setListAccount] = useState([]);

  // Khai báo State để quản lý danh sách Department trên hệ thống
  let [listDepartment, setListDepartment] = useState([]);
  // Khai báo State để quản lý danh sách Position trên hệ thống
  let [listPosition, setListPosition] = useState([]);

  // Khai báo hàm callback để hiển thị modal
  let onHandleCreateButton = () => {
    // console.log("CLICK");
    setShowForm(true);
  };
  // Khai báo hàm callback để đóng Modal
  let onHandleCloseModal = () => {
    //
    setShowForm(false);
  };
  // Khai báo hàm callback để tạo mới Account
  let onHandleCreateNewAccount = (account_New) => {
    //
    // console.log("account_New: ", account_New);
    // listAccount.push(account_New);
    // setListAccount(listAccount);

    // Lưu listAccount xuống LocalStorage
    // localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // Đóng form thêm mới
    createNewAccountAPI(account_New).then(() => {
      getListAccountAPI().then((res) => {
        setListAccount(res);
      });
    });
    setShowForm(false);
  };

  // Hàm callback khi ấn nút delete
  const onHandleDelete = (id) => {
    // console.log("id: ", id);
    deleteAccountAPI(id).then((response) => {
      getListAccountAPI().then((res) => {
        setListAccount(res);
      });
    });
  };

  // Hàm callback khi ấn vào nút edit
  const onHandleEdit = (id) => {};

  //
  // let fetchListAccount = () => {
  //   // Axios.get(`http://localhost:8080/api/v1/accounts`).then((response) => {
  //   //   // ...
  //   //   // console.log("response: ", response.data);

  //   //   setListAccount(response.data);
  //   // });

  //   getListAccountAPI().then((res) => {
  //     setListAccount(res);
  //   });
  // };

  //
  // let fetchListDepartment = function () {
  //   Axios.get(`http://localhost:8080/api/v1/departments`).then((response) => {
  //     console.log(response.data);

  //     setListDepartment(response.data);
  //   });
  // };

  //
  // let fetchListPosition = function () {
  //   Axios.get(`http://localhost:8080/api/v1/possitions`).then((response) => {
  //     console.log(response.data);

  //     setListPosition(response.data);
  //   });
  // };

  //
  useEffect(() => {
    // load dữ liệu từ LocalStorage vào state listAccount, load 1 lần trong chương trình
    // let listAccount_LocalStorage = JSON.parse(
    //   localStorage.getItem("listAccount")
    // );
    // setListAccount(listAccount_LocalStorage);
    // fetchListAccount();
    // fetchListDepartment();
    // fetchListPosition();

    getListAccountAPI().then((res) => {
      setListAccount(res);
    });

    getListDepartmentAPI().then((res) => {
      setListDepartment(res);
    });

    getListPositionAPI().then((res) => {
      setListPosition(res);
    });
  }, []);

  return (
    <>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      <br /> <br />
      <ResutlForm listAccount={listAccount} onHandleDelete={onHandleDelete} />
    </>
  );
}

export default AccountContainer;
