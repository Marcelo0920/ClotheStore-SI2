import axios from "axios";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  POST_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERROR,
} from "./types";

// Get all products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/producto/listar");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get product by ID
export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/producto/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new product
export const createProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/producto/crear",
      formData,
      config
    );

    dispatch({
      type: POST_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update product
export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/producto/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/producto/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
