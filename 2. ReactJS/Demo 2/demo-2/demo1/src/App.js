import React from "react";
import "./App.css";

function App() {
  let user = "Hưng đẹp trai";
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hưng đẹp trai")
  // );
  const handleClick = () => {
    alert(`Hello ${user}`);
  };
  return (
    <div className="App">
      <h1>Helloo VTI</h1>
      <h2>Nguyen Hung</h2>
      <button type="button" onClick={handleClick}>
        Click me!!
      </button>
    </div>
  );
}

export default App;
