import axios from "axios";
import {
  GET_USER,
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ERROR,
} from "./types";

// Get all users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/usuario/read");

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get user by ID
export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/usuario/${id}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new user
export const createUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/usuario/crear",
      formData,
      config
    );

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update user
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/usuario/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/usuario/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
