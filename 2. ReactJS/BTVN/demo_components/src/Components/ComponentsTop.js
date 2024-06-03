import React, { Component } from "react";

class ComponentsTop extends Component {
  // khai báo hàm contructor, tạo ra 1 bảng state
  constructor(props) {
    super(props);
    this.state = {
      clickNumber: 0,
    };
  }

  handleClick = () => {
    // thay đổi giá trị state
    this.setState(
      {
        clickNumber: this.state.clickNumber + 1,
      },
      () => {
        console.log("Số lần nhấp: " + this.state.clickNumber);
      }
    );
  };

  render() {
    // gọi dữ liệu từ app xuông để sử dụng
    // let v_prop_dataFromAppToTop = this.props.prop_dataFromAppToTop; // "Hưng đẹp trai"
    // let prop_headingTop = this.props.prop_headingTop;

    // Detructuring
    let { prop_headingTop, prop_dataFromAppToTop, prop_Name } = this.props;

    console.log("dataFromAppToTop: ", prop_dataFromAppToTop);
    console.log("headingTop: ", prop_headingTop);
    console.log("Name: ", prop_Name);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{prop_headingTop}</div>
        <div className="panel-body">
          <form method="" id="Main_Form_ID" className="form-inline">
            <div className="form-group">
              <input
                type="text"
                name="Input_Name"
                id="input"
                className="form-control input-field"
                required="required"
                placeholder={this.state.clickNumber}
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleClick}
            >
              Gửi Dữ Liệu
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ComponentsTop;
