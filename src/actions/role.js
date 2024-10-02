import axios from "axios";
import {
  GET_ROLE,
  GET_ROLES,
  POST_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE,
  ROLE_ERROR,
} from "./types";

// Get all roles
export const getRoles = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/rol/read");

    dispatch({
      type: GET_ROLES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get role by ID
export const getRoleById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/rol/${id}`);

    dispatch({
      type: GET_ROLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new role
export const createRole = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/rol/crear",
      formData,
      config
    );

    dispatch({
      type: POST_ROLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update role
export const updateRole = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/rol/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_ROLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete role
export const deleteRole = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/rol/${id}`);

    dispatch({
      type: DELETE_ROLE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
