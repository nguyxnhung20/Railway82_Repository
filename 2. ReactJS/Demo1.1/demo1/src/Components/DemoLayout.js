import React from "react";

function DemoLayout(props) {
  return (
    <div class="container">
      {/* Menu */}
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          style={{ backgroundColor: "blue" }}
        >
          Menu
        </div>
      </div>
      {/* Banner */}

      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          style={{ backgroundColor: "red" }}
        >
          Banner
        </div>
      </div>
      {/* Content */}

      <div class="row">
        <div
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          style={{ backgroundColor: "blue", height: "300px" }}
        >
          Content 1
        </div>

        <div
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          style={{ backgroundColor: "green", height: "300px" }}
        >
          Content 3
        </div>

        <div
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          style={{ backgroundColor: "pink", height: "300px" }}
        >
          Content 3
        </div>
      </div>
    </div>
  );
}

export default DemoLayout;
