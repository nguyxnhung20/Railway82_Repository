import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="row">
      <nav
        className="navbar navbar-inverse"
        style={{ backgroundColor: "black", color: "while" }}
      >
        <div className="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <NavLink to={"/home"}>VTI ACADEMY</NavLink>
            </li>
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/accountmanagement"}>Account Management</NavLink>
            </li>
            <li>
              <NavLink to={"/departmentmanagement"}>
                Department Management
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to={"/signup"}>
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>
                <span className="glyphicon glyphicon-log-in"></span> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
