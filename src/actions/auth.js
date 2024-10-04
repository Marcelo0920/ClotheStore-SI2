import axios from "axios";
import {
  USER_LOADED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  AUTH_ERROR,
  LOGIN_START,
  DEFAULT_SESSION,
} from "./types";

import setAuthToken from "../utils/setAuthToken";

// LOAD USER
export const loadUser = () => (dispatch) => {
  console.log("loading user");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (token && username) {
    setAuthToken(token);

    dispatch({
      type: USER_LOADED,
      payload: { username },
    });
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// LOGIN
export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  dispatch({
    type: LOGIN_START,
  });

  try {
    const res = await axios.post("http://localhost:8080/login", body, config);

    const { token, username } = res.data;

    console.log(res.data);

    // Store token and username in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);

    // Set token to Auth header
    setAuthToken(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const setDefaultSession = () => (dispatch) => {
  dispatch({ type: DEFAULT_SESSION });
};

// LOGOUT
export const logout = () => (dispatch) => {
  console.log("logging out");
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  dispatch({ type: LOG_OUT });
  window.location.reload();
};
