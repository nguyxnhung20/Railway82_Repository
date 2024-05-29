import React from "react";

function DemoLayout(props) {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col" style={{ backgroundColor: "red" }}>
            One of three columns
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ backgroundColor: "blue" }}>
            One of three columns
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ backgroundColor: "green" }}>
            One of three columns
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoLayout;
