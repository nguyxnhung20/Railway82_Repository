import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Content1 from "./Components/Content1";
import DemoLayout from "./Components/DemoLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Menu />
    <Banner />
    <Content1 />
    <App /> */}
    <DemoLayout />
  </React.StrictMode>
);
