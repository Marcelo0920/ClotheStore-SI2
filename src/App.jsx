import React, { useEffect } from "react";
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
import AperturarCajaPage from "./pages/AperturarCajaPage";
import HistorialVentasPage from "./pages/HistorialVentasPage";
import UserEditListPage from "./pages/UserEditListPage";
import ClientEditListPage from "./pages/ClientEditListPage";
import ProtectedRoute from "./security/ProtectedRoute";

import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import FacturaEditListPage from "./pages/FacturaEditListPage";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />

        <Route
          path="/producteditlist"
          element={
            <ProtectedRoute>
              <ProductEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers"
          element={
            <ProtectedRoute>
              <ProviderEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pedidos"
          element={
            <ProtectedRoute>
              <PedidosEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles"
          element={
            <ProtectedRoute>
              <RolesEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sucursales"
          element={
            <ProtectedRoute>
              <SucursalesEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/almacenes"
          element={
            <ProtectedRoute>
              <AlmacenesEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cajas"
          element={
            <ProtectedRoute>
              <CajasEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoriesEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cajasapertura"
          element={
            <ProtectedRoute>
              <AperturarCajaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historialventas"
          element={
            <ProtectedRoute>
              <HistorialVentasPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserEditListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <ProtectedRoute>
              <ClientEditListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/facturas"
          element={
            <ProtectedRoute>
              <FacturaEditListPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
