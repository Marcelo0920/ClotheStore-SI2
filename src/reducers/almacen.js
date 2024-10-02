import {
  GET_WARE_HOUSE,
  GET_WARE_HOUSES,
  POST_WARE_HOUSE,
  DELETE_WARE_HOUSE,
  UPDATE_WARE_HOUSE,
  WARE_HOUSE_ERROR,
} from "../actions/types";

const initialState = {
  warehouses: [],
  warehouse: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WARE_HOUSES:
      return {
        ...state,
        warehouses: payload,
        loading: false,
      };
    case GET_WARE_HOUSE:
      return {
        ...state,
        warehouse: payload,
        loading: false,
      };
    case POST_WARE_HOUSE:
      return {
        ...state,
        warehouses: [...state.warehouses, payload],
        loading: false,
      };
    case UPDATE_WARE_HOUSE:
      return {
        ...state,
        warehouses: state.warehouses.map((warehouse) =>
          warehouse.id === payload.id ? payload : warehouse
        ),
        loading: false,
      };
    case DELETE_WARE_HOUSE:
      return {
        ...state,
        warehouses: state.warehouses.filter(
          (warehouse) => warehouse.id !== payload
        ),
        loading: false,
      };
    case WARE_HOUSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
