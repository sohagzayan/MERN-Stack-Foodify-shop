import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/ForgotPasswordn/ForgotPassword";
import Login from "../components/Login/Login";
import NotFound404 from "../components/NotFound404/NotFound404";
import RequireAuth from "../components/privateRoute/RequireAuth";
import Signup from "../components/Signup/Signup";
import AddProduct from "../pages/AddProduct";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import InventoryDetails from "../pages/InventoryDetails";
import ManageProduct from "../pages/ManageProduct";
import MyProducts from "../pages/MyProducts";
import Register from "../pages/Register";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Blog" element={<RequireAuth> <Blog /> </RequireAuth>} />
      <Route path="/manage" element={<ManageProduct />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/myProducts" element={<MyProducts />} />
      <Route path="/inventory/:id" element={<RequireAuth> <InventoryDetails /> </RequireAuth>} />
      <Route path="/register" element={<Register />}>
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default AllRoutes;
