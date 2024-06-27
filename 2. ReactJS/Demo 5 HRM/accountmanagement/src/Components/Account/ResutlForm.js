import React from "react";
import { Table } from "reactstrap";
import ResultFormItem from "./ResultFormItem";

function ResutlForm(props) {
  let { listAccount, onHandleDelete, onHandleEdit } = props;
  return (
    <>
      <h3>Danh Sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>Cretate Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem
            listAccount={listAccount}
            onHandleDelete={onHandleDelete}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </Table>
    </>
  );
}

export default ResutlForm;
