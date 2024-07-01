import "./App.css";

import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Menu from "./Menu/Menu";
import { routes } from "./Router/Routes";

function App() {
  return (
    <div className="container">
      {/* Menu */}
      <Menu />
      {/* Content */}
      {routes}
    </div>
  );
}

export default App;
