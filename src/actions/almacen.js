import axios from "axios";
import {
  GET_WARE_HOUSE,
  GET_WARE_HOUSES,
  POST_WARE_HOUSE,
  DELETE_WARE_HOUSE,
  UPDATE_WARE_HOUSE,
  WARE_HOUSE_ERROR,
} from "./types";

// Get all warehouses
export const getWarehouses = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/almacen/read");

    console.log(res);

    dispatch({
      type: GET_WARE_HOUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WARE_HOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get warehouse by ID
export const getWarehouseById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/almacen/${id}`);

    dispatch({
      type: GET_WARE_HOUSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WARE_HOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create new warehouse
export const createWarehouse = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8080/almacen/crear",
      formData,
      config
    );

    dispatch({
      type: POST_WARE_HOUSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WARE_HOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update warehouse
export const updateWarehouse = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:8080/almacen/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_WARE_HOUSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WARE_HOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete warehouse
export const deleteWarehouse = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/almacen/${id}`);

    dispatch({
      type: DELETE_WARE_HOUSE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: WARE_HOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
