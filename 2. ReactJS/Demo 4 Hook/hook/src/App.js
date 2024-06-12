import "./App.css";
import CountClass from "./Component/CountClass";
import CountFunction from "./Component/CountFunction";

function App() {
  return (
    <div className="App">
      <h1>
        <CountClass />
        <CountFunction />
      </h1>
    </div>
  );
}

export default App;
