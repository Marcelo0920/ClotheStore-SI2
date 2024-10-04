import axios from "axios";
import {
  GET_CAJA,
  GET_CAJAS,
  POST_CAJA,
  DELETE_CAJA,
  UPDATE_CAJA,
  CAJA_ERROR,
  OPEN_CAJA,
  CLOSE_CAJA,
  GET_USER_CAJA,
  GET_CAJA_ARQUEO,
  VERIFY_CAJA,
} from "./types";

// Get all cajas
export const getCajas = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/caja/read");

    dispatch({
      type: GET_CAJAS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get caja by ID
export const getCajaById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/caja/${id}`);

    dispatch({
      type: GET_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new caja
export const createCaja = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/caja/crear",
      formData,
      config
    );

    dispatch({
      type: POST_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update caja
export const updateCaja = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/caja/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete caja
export const deleteCaja = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/caja/${id}`);

    dispatch({
      type: DELETE_CAJA,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Verify caja
export const verifyCaja = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/caja/verifica/${id}`);

    dispatch({
      type: VERIFY_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Open caja
export const openCaja = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(formData);

    const res = await axios.post(
      "http://localhost:8080/caja_usuario/abrir",
      formData,
      config
    );

    console.log(res);

    dispatch({
      type: OPEN_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get user's caja
export const getUserCaja = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/caja_usuario/${userId}`);

    dispatch({
      type: GET_USER_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Close caja
export const closeCaja = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      " http://localhost:8080/caja_usuario/cerrar",
      formData,
      config
    );

    dispatch({
      type: CLOSE_CAJA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get caja arqueo
export const getCajaArqueo = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/caja_usuario/arqueo",
      formData,
      config
    );

    dispatch({
      type: GET_CAJA_ARQUEO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CAJA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
