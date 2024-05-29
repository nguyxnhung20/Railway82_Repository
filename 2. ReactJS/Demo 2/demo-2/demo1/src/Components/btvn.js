import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Components_Bottom from "./Components_Bottom";

class btvn extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Components_Top */}
        <div
          className="components-top rounded p-3"
          style={{ backgroundColor: "#007bff", color: "white" }}
        >
          <h5>Components_Top</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Input something here"
            />
            <div className="input-group-append">
              <button className="btn btn-danger" type="button">
                Sent Data
              </button>
            </div>
          </div>
        </div>

        {/* Components_Bottom */}
        <Components_Bottom />
      </div>
    );
  }
}

export default btvn;
