import React, { Component } from "react";
import ComponentsTopChild from "./ComponentsTopChild";

class ComponentTop extends Component {
  // Khai báo hàm contructor
  constructor(props) {
    super(props);
    this.state = {
      click_Number: 0,
    };
  }

  // Khai báo biến lưu số lần click vào nút SentData
  //   clickNumber = 0;
  // khai báo hàm sử lý sự kiện khi người dùng nhấn nút SentData
  handleClick = () => {
    // this.clickNumber = this.clickNumber + 1;
    // console.log("clickNumber: ", this.clickNumber);
    // let x = this.state.click_Number;
    // this.setState({
    //   click_Number: this.state.click_Number + 1,
    // });
    // console.log("click_Number: ", this.state.click_Number);
    // Khai báo 1 dữ liệu bất kỳ
    let myNameVTI = "Hưng đẹp trai VTI Academy!!! ";
    this.props.prop_getDataFromTop(myNameVTI);
  };
  // render
  render() {
    // Gọi dữ liệu từ App truyền xuống để sử dụng
    // let prop_dataFromAppToTop = this.props.prop_dataFromAppToTop; // "Hưng đẹp trai VTI Academy"
    // let prop_headingTop = this.props.prop_headingTop;
    // ... Destructuring
    let {
      prop_dataFromAppToTop,
      prop_headingTop,
      prop_myName,
      fromDataToTopChild,
    } = this.props;
    //
    console.log("prop_dataFromAppToTop: ", prop_dataFromAppToTop);
    console.log("prop_headingTop: ", prop_headingTop);

    console.log("prop_myName: ", prop_myName);
    //
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {/* Panel */}
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">{prop_headingTop}</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.click_Number}
                  />
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleClick}
                  >
                    Sent Data
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ComponentsTopChild fromDataToTopChild={fromDataToTopChild} />
        </div>
      </div>
    );
  }
}
//

export default ComponentTop;
