import "./App.css";
// import React from "react";

function App() {
  //
  //
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "HELLO VTI")
  // );
  let handleClick = () => {
    alert("Hello DAONQ!");
  };
  return (
    <div className="App">
      <h1>Hello VTI</h1>
      <button type="button" onClick={handleClick}>
        Click me!!
      </button>
    </div>
  );
}

export default App;
