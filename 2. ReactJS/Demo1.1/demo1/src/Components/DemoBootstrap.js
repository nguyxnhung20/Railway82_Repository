import React from "react";

function DemoBootstrap(props) {
  return (
    <div>
      <button class="btn btn-primary">Demo Boostrap</button>

      <button type="button" class="btn btn-danger">
        Button Danger
      </button>

      <button type="button" class="btn btn-success">
        Button Success
      </button>

      {/* Tạo bảng hiển thị dữ liệu */}

      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>DaoNQ</td>
          </tr>
          <tr>
            <td>2</td>
            <td>DaoNQ2</td>
          </tr>
        </tbody>
      </table>

      <ul class="pagination">
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
      </ul>
    </div>
  );
}

export default DemoBootstrap;
