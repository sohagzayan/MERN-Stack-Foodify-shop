import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import RequireAuth from "../components/privateRoute/RequireAuth";
import Signup from "../components/Signup/Signup";
import AddProduct from "../pages/AddProduct";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import InventoryDetails from "../pages/InventoryDetails";
import ManageProduct from "../pages/ManageProduct";
import Register from "../pages/Register";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Blog" element={<RequireAuth> <Blog /> </RequireAuth>} />
      <Route path="/manage" element={<ManageProduct />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/inventory/:id" element={<RequireAuth> <InventoryDetails /> </RequireAuth>} />
      <Route path="/register" element={<Register />}>
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
