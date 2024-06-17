import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  return (
    <tr>
      <td>1</td>
      <td>hungnd105@fpt.com</td>
      <td>nguyxnhung20</td>
      <td>Nguyễn Duy Hưng</td>
      <td>Intern</td>
      <td>Dev</td>
      <td>2024-06-17</td>
      <td>
        <Button color="warning">Edit</Button>
      </td>
      <td>
        <Button color="warning">Delete</Button>
      </td>
    </tr>
  );
}

export default ResultFormItem;
