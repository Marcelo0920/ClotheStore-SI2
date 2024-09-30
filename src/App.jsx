import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import CreateProductPage from "./pages/CreateProductPage";
import CreateClientPage from "./pages/CreateClientPage";
import ProductEditListPage from "./pages/ProductEditListPage";
import ProviderEditListPage from "./pages/ProviderEditListPage";
import PedidosEditListPage from "./pages/PedidosEditListPage";
import RolesEditListPage from "./pages/RolesEditListPage";
import SucursalesEditListPage from "./pages/SucursalesEditListPage";
import AlmacenesEditListPage from "./pages/AlmacenesEditListPage";
import CajasEditListPage from "./pages/CajasEditListPage";
import CategoriesEditListPage from "./pages/CategoriesEditListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/createproduct" element={<CreateProductPage />} />
        <Route path="/createclient" element={<CreateClientPage />} />
        <Route path="/producteditlist" element={<ProductEditListPage />} />
        <Route path="/providers" element={<ProviderEditListPage />} />
        <Route path="/pedidos" element={<PedidosEditListPage />} />
        <Route path="/roles" element={<RolesEditListPage />} />
        <Route path="/sucursales" element={<SucursalesEditListPage />} />
        <Route path="/almacenes" element={<AlmacenesEditListPage />} />
        <Route path="/cajas" element={<CajasEditListPage />} />
        <Route path="/categories" element={<CategoriesEditListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
