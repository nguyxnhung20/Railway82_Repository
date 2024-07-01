import React, { useEffect, useState } from "react";

function AccountManagement(props) {
  // Khai báo State ListAccount để lưu trữ danh sách Account trong chương trinh
  let [listAccounts, setListAccounts] = useState([]);
  useEffect(() => {
    // Call API lấy danh sách Account trên hệ thống
    let listAccounts_API_FAKE = [
      {
        ID: "1",
        Email: "Email1@gmail.com",
        Username: "Username1",
        Fullname: "Fullname1",
        Department: "Sale",
        Position: "Scrum Master",
      },
      {
        ID: "2",
        Email: "Email2@gmail.com",
        Username: "Username2",
        Fullname: "Fullname2",
        Department: "Sale",
        Position: "Scrum Master",
      },
      {
        ID: "3",
        Email: "Email3@gmail.com",
        Username: "Username3",
        Fullname: "Fullname3",
        Department: "Accounting",
        Position: "Scrum Master",
      },
      {
        ID: "4",
        Email: "Email4@gmail.com",
        Username: "Username4",
        Fullname: "Fullname4",
        Department: "Accounting",
        Position: "Scrum Master",
      },
    ];

    //
    setListAccounts(listAccounts_API_FAKE);
  }, []);

  // Hiển thị danh sách Account đang có trên hệ thống
  let trItems = listAccounts.map((account, index) => {
    return (
      <tr>
        <td>{account.ID}</td>
        <td>{account.Email}</td>
      </tr>
    );
  });
  //

  return (
    <div className="row">
      <h3>Thông tin Account</h3>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {trItems}
            {/* <tr>
              <td>1</td>
              <td>daonq</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountManagement;
