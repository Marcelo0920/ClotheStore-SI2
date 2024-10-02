import axios from "axios";
import {
  GET_CLIENTE,
  GET_CLIENTES,
  POST_CLIENTE,
  DELETE_CLIENTE,
  UPDATE_CLIENTE,
  CLIENTE_ERROR,
} from "./types";

// Get all clients
export const getClients = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/cliente/read");

    dispatch({
      type: GET_CLIENTES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get client by ID
export const getClientById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/cliente/${id}`);

    dispatch({
      type: GET_CLIENTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new client
export const createClient = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/cliente/crear",
      formData,
      config
    );

    dispatch({
      type: POST_CLIENTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new client with user
export const createClientWithUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/cliente/crearUsuario",
      formData,
      config
    );

    dispatch({
      type: POST_CLIENTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update client
export const updateClient = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/cliente/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_CLIENTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete client
export const deleteClient = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/cliente/${id}`);

    dispatch({
      type: DELETE_CLIENTE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
