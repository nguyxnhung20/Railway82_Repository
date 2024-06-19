import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  const { listAccount } = props;

  let items = "";
  if (listAccount) {
    items = listAccount.map((account, index) => {
      return (
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.username}</td>
          <td>{account.fullname}</td>
          <td>{account.department}</td>
          <td>{account.position}</td>
          <td>{account.createDate}</td>
          <td>
            <Button color="warning">Edit</Button>
          </td>
          <td>
            <Button color="danger">Delete</Button>
          </td>
        </tr>
      );
    });
  }

  return <>{items}</>;
}

export default ResultFormItem;
