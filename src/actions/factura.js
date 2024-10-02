import axios from "axios";
import {
  GET_FACTURA,
  GET_FACTURAS,
  CREATE_FACTURA,
  UPDATE_FACTURA,
  DELETE_FACTURA,
  FACTURA_ERROR,
} from "./types";

// Get all invoices
export const getFacturas = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/factura/read");

    dispatch({
      type: GET_FACTURAS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FACTURA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get invoice by ID
export const getFacturaById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/factura/${id}`);

    dispatch({
      type: GET_FACTURA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FACTURA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new invoice
export const createFactura = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/factura/crear",
      formData,
      config
    );

    dispatch({
      type: CREATE_FACTURA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FACTURA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update invoice
export const updateFactura = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/factura/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_FACTURA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FACTURA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete invoice
export const deleteFactura = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/factura/${id}`);

    dispatch({
      type: DELETE_FACTURA,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: FACTURA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
