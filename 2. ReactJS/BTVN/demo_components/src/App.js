import React, { Component } from "react";
import "./App.css";
import ComponentBottom from "./Components/ComponentsBottom";
import ComponentTop from "./Components/ComponentsTop";

// function App() {
//   //
//   let dataFromAppToTop = "Hưng đẹp trai VTI Academy";
//   let headingTop = "-- Component TOP APP  --";
//   let headingBottom = "-- Component Bottom  -- ";
//   // Tạo biến để lưu trữ dữ liệu nhận đc từ Top
//   let dataTopToBottom = "";
//   // Khai báo hàm getDataFromTop
//   let getDataFromTop = (dataApp) => {
//     // console.log("Bạn vừa gọi hàm: getDataFromTop");
//     // console.log(`Dữ liệu nhận được từ Top: ${dataApp}`); // "Hưng đẹp trai VTI Academy!!! "
//     // gán dữ liệu nhận đc từ Top vào biến khai báo phía trên dataTopToBottom
//     dataTopToBottom = dataApp;
//   };

//   // Khai báo hàm callback getDataFromBottom
//   let getDataFromBottom = (dataBottom) => {
//     //
//     console.log("Bạn vừa gọi hàm: getDataFromBottom");
//     console.log("dataBottom: ", dataBottom);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <br />
//         <ComponentTop
//           prop_dataFromAppToTop={dataFromAppToTop}
//           prop_headingTop={headingTop}
//           prop_myName="Daonq"
//           prop_getDataFromTop={getDataFromTop}
//         />
//         <br />
//         <br />
//         <ComponentBottom
//           prop_headingBottom={headingBottom}
//           prop_other="123"
//           prop_getDataFromBottom={getDataFromBottom}
//           prop_dataTopToBottom={dataTopToBottom}
//         />
//       </div>
//     </div>
//   );
// }

// rcc
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTopToBottom: "", // khai báo ra state lưu dữ liệu nhận đc từ Top
    };
  }

  dataFromAppToTop = "Hưng đẹp trai VTI Academy";
  headingTop = "-- Component TOP APP  --";
  headingBottom = "-- Component Bottom  -- ";
  fromDataToTopChild = "Hưng dẹp trai vãi cả lồng";
  fromDataToBottomChild = "Đây là bottom child nhá hehe!!";
  // Tạo biến để lưu trữ dữ liệu nhận đc từ Top
  // dataTopToBottom = "";
  // Khai báo hàm getDataFromTop
  getDataFromTop = (dataTop) => {
    // console.log("Bạn vừa gọi hàm: getDataFromTop");
    // console.log(`Dữ liệu nhận được từ Top: ${dataApp}`); // "Hưng đẹp trai VTI Academy!!! "
    // gán dữ liệu nhận đc từ Top vào biến khai báo phía trên dataTopToBottom
    // this.dataTopToBottom = dataTop;
    this.setState({
      dataTopToBottom: dataTop,
    });
  };

  // Khai báo hàm callback getDataFromBottom
  getDataFromBottom = (dataBottom) => {
    //
    console.log("Bạn vừa gọi hàm: getDataFromBottom");
    console.log("dataBottom: ", dataBottom);
  };

  // Hàm render
  render() {
    return (
      <div className="container">
        <br />
        <ComponentTop
          prop_dataFromAppToTop={this.dataFromAppToTop}
          prop_headingTop={this.headingTop}
          prop_myName="Daonq"
          prop_getDataFromTop={this.getDataFromTop}
          fromDataToTopChild={this.fromDataToTopChild}
        />
        <br />
        <br />
        <ComponentBottom
          prop_headingBottom={this.headingBottom}
          prop_other="123"
          prop_getDataFromBottom={this.getDataFromBottom}
          prop_dataTopToBottom={this.state.dataTopToBottom}
          fromDataToBottomChild={this.fromDataToBottomChild}
        />
      </div>
    );
  }
}

export default App;
