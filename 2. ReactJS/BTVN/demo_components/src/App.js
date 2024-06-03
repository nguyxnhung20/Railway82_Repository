import React from "react";
import "./App.css";
import ComponentsBottom from "./Components/ComponentsBottom";
import ComponentsTop from "./Components/ComponentsTop";

function App() {
  let dataFromAppToTop = "Hưng đẹp trai";
  let headingTop = "-- Component Top --";
  let headingBottom = "-- Component Bottom --";

  return (
    <div className="App">
      <div className="centered-container">
        <div className="centered-content">
          <h1>Hello VTI</h1>
          <h2>My Name Is Hưng</h2>
          <ComponentsTop
            prop_dataFromAppToTop={dataFromAppToTop}
            prop_headingTop={headingTop}
            prop_Name="Duy Hưng"
          />
          <br />
          <br />
          <ComponentsBottom headingBottom={headingBottom} />
        </div>
      </div>
    </div>
  );
}

export default App;
