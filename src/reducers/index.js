import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth";
import caja from "./caja";
import almacen from "./almacen";
import client from "./client";
import factura from "./factura";
import pedido from "./pedido";
import product from "./product";
import provider from "./provider";
import role from "./role";
import sucursal from "./sucursal";
import user from "./user";
import venta from "./venta";

export default combineReducers({
  auth,
  caja,
  almacen,
  client,
  factura,
  pedido,
  product,
  provider,
  role,
  sucursal,
  user,
  venta,
});
