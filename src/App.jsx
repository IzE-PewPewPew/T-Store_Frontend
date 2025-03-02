import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import Home from "views/pages/Home";
import Login from "views/auth/Login";
import Register from "views/auth/Register";
import AddProduct from "views/admin/pruduct/AddProduct";
import { getAccessToken } from "service/Auth";
import AddCategory from "views/admin/category/AddCategory";
import EditCategory from "views/admin/category/EditCategory";
import Category from "views/admin/category/Category";
const App = () => {
const token = getAccessToken();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      {/* Private Routes */}
      {token ? (
        <>
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="rtl/*" element={<RtlLayout />} />
          {/* <Route path="/category" element={<Category/>} /> */}
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/editcategory" element={<EditCategory />} />
        </>
      ) : (
        <Route path="/*" element={<Navigate to="/login"/>} />
      )}
      {/* Unauthorized and 404 Routes */}
      <Route
        path="/unauthorized"
        element={<div>403 - Unauthorized Access</div>}
      />
  
    </Routes>
  );
};

export default App;