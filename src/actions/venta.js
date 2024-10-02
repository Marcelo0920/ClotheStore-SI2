import axios from "axios";
import {
  GET_ORDEN,
  GET_ORDENES,
  CREATE_ORDEN,
  UPDATE_ORDEN,
  DELETE_ORDEN,
  ORDEN_ERROR,
} from "./types";

// Get all orders
export const getOrdenes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/orden/read");

    dispatch({
      type: GET_ORDENES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDEN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get order by ID
export const getOrdenById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/orden/${id}`);

    dispatch({
      type: GET_ORDEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDEN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new order
export const createOrden = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/orden/crear",
      formData,
      config
    );

    dispatch({
      type: CREATE_ORDEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDEN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update order
export const updateOrden = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/orden/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_ORDEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDEN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete order
export const deleteOrden = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/orden/${id}`);

    dispatch({
      type: DELETE_ORDEN,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: ORDEN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
