import axios from "axios";
import {
  GET_CATEGORY,
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY_ERROR,
} from "./types";

// Get all categories
export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/categoria/read");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get category by ID
export const getCategoryById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/categoria/${id}`);

    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new category
export const createCategory = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/categoria/crear",
      formData,
      config
    );

    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update category
export const updateCategory = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/categoria/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/categoria/${id}`);

    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
