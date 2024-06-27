import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  let { listAccount, onHandleDelete, onHandleEdit } = props;
  // Hiển thị dữ liệu: sử dụng vòng lặp map(account, index)  ==> tạo ra 1 mảng mới từ mảng ban đầu
  let items = listAccount.map((account, index) => {
    return (
      <tr>
        <td>{account.id}</td>
        <td>{account.email}</td>
        <td>{account.username}</td>
        <td>{account.fullname}</td>
        <td>{account.department}</td>
        <td>{account.position}</td>
        <td>{account.createDate}</td>
        <td>
          <Button color="warning" onClick={() => onHandleEdit(account.id)}>
            Edit
          </Button>
        </td>
        <td>
          <Button color="warning" onClick={() => onHandleDelete(account.id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });
  //
  return items;
}

export default ResultFormItem;
