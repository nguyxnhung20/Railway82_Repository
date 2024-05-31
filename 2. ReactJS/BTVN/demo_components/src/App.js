import React from "react";
import "./App.css";
import ComponentsBottom from "./Components/ComponentsBottom";
import ComponentsTop from "./Components/ComponentsTop";

function App() {
  return (
    <div className="App">
      <div className="centered-container">
        <div className="centered-content">
          <h1>Hello VTI</h1>
          <h2>My Name Is Hưng</h2>
          <ComponentsTop />
          <br />
          <br />
          <ComponentsBottom />
        </div>
      </div>
    </div>
  );
}

export default App;
