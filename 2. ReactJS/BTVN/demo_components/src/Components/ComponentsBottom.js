import React from "react";

function ComponentsBottom({ headingBottom }) {
  console.log(headingBottom);
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">{headingBottom}</div>
      <div className="panel-body">
        <textarea
          id="input"
          className="form-control"
          rows="3"
          required="required"
        >
          Hello Hưng
        </textarea>
      </div>
    </div>
  );
}

export default ComponentsBottom;
