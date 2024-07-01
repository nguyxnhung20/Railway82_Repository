import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AccountManagement from "../Pages/AccountManagement";
import DepartmentManagement from "../Pages/DepartmentManagement";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Error from "./../Pages/Error";

export const routes = (
  <Routes>
    {/* http://localhost:3000/ */}
    <Route path="/" element={<Home />} />
    {/* http://localhost:3000/home */}
    <Route path="/home" element={<Home />} />
    {/* http://localhost:3000/about */}
    <Route path="/about" element={<About />} />
    <Route path="/accountmanagement" element={<AccountManagement />} />
    <Route path="/departmentmanagement" element={<DepartmentManagement />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error />} />
  </Routes>
);
