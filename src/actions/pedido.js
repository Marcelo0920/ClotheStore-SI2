import axios from "axios";
import {
  GET_PEDIDO,
  GET_PEDIDOS,
  POST_PEDIDO,
  DELETE_PEDIDO,
  UPDATE_PEDIDO,
  PEDIDO_ERROR,
} from "./types";

// Get all orders
export const getPedidos = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/pedido/read");

    dispatch({
      type: GET_PEDIDOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PEDIDO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get order by ID
export const getPedidoById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/pedido/${id}`);

    dispatch({
      type: GET_PEDIDO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PEDIDO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new order
export const createPedido = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/pedido/crear",
      formData,
      config
    );

    dispatch({
      type: POST_PEDIDO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PEDIDO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update order
export const updatePedido = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/pedido/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PEDIDO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PEDIDO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete order
export const deletePedido = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/pedido/${id}`);

    dispatch({
      type: DELETE_PEDIDO,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PEDIDO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
