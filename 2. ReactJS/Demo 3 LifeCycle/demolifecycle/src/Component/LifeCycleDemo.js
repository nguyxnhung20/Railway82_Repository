import React, { Component } from "react";

class LifeCycleDemo extends Component {
  // Hàm Constructor
  constructor(props) {
    super(props);
    console.log("Hàm constructor được gọi");
    this.state = {
      content: "Hello Hưng đẹp trai !!!",
      color: "black", // Màu mặc định
    };
  }

  handleChangeState = () => {
    this.setState({
      content: "Hello Hưng đẹp trai vch k tin được !!!",
      color: "red", // Thay đổi màu thành đỏ khi nhấn nút
    });
  };

  // Hàm Render
  render() {
    console.log("Hàm render được gọi");
    return (
      <div>
        <h3 style={{ color: this.state.color }}>{this.state.content}</h3>
        <button onClick={this.handleChangeState}>Change State</button>
      </div>
    );
  }

  // Hàm componentDidMount
  componentDidMount() {
    console.log("Hàm componentDidMount được gọi");
  }

  // Hàm componentDidUpdate
  componentDidUpdate() {
    console.log("Hàm componentDidUpdate được gọi");
  }
}

export default LifeCycleDemo;
