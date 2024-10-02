import axios from "axios";
import {
  GET_PROVIDER,
  GET_PROVIDERS,
  POST_PROVIDER,
  DELETE_PROVIDER,
  UPDATE_PROVIDER,
  PROVIDER_ERROR,
} from "./types";

// Get all providers
export const getProviders = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/proveedor/read");

    dispatch({
      type: GET_PROVIDERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get provider by ID
export const getProviderById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/proveedor/${id}`);

    dispatch({
      type: GET_PROVIDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new provider
export const createProvider = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/proveedor/crear",
      formData,
      config
    );

    dispatch({
      type: POST_PROVIDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update provider
export const updateProvider = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/proveedor/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROVIDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete provider
export const deleteProvider = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/proveedor/${id}`);

    dispatch({
      type: DELETE_PROVIDER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
