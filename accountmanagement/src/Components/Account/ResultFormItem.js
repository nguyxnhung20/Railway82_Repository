import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  return (
    <tr>
      <td>1</td>
      <td>hungnd105@fpt.com</td>
      <td>nguyxnhung20</td>
      <td>Nguyen Hung</td>
      <td>Sale</td>
      <td>Dev</td>
      <td>2022-02-22</td>
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
