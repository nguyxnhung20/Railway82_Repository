import React, { Component } from "react";

class ComponentsTop extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Components_Top</div>
        <div className="panel-body">
          <form method="" id="Main_Form_ID" className="form-inline">
            <div className="form-group">
              <input
                type="text"
                name="Input_Name"
                id="input"
                className="form-control input-field"
                required="required"
                placeholder="Input something here"
              />
            </div>
            <button type="button" className="btn btn-danger">
              Sent Data
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ComponentsTop;
