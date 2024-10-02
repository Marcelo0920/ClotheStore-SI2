import axios from "axios";
import {
  GET_SUCURSAL,
  GET_SUCURSALS,
  POST_SUCURSAL,
  DELETE_SUCURSAL,
  UPDATE_SUCURSAL,
  SUCURSAL_ERROR,
} from "./types";

// Get all sucursals
export const getSucursals = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/sucursal/read");

    dispatch({
      type: GET_SUCURSALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUCURSAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get sucursal by ID
export const getSucursalById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/sucursal/${id}`);

    dispatch({
      type: GET_SUCURSAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUCURSAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new sucursal
export const createSucursal = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/sucursal/crear",
      formData,
      config
    );

    dispatch({
      type: POST_SUCURSAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUCURSAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update sucursal
export const updateSucursal = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/sucursal/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_SUCURSAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUCURSAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete sucursal
export const deleteSucursal = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/sucursal/${id}`);

    dispatch({
      type: DELETE_SUCURSAL,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: SUCURSAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
