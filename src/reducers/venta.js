import {
  GET_ORDEN,
  GET_ORDENES,
  CREATE_ORDEN,
  UPDATE_ORDEN,
  DELETE_ORDEN,
  ORDEN_ERROR,
} from "../actions/types";

const initialState = {
  ordenes: [],
  orden: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDENES:
      return {
        ...state,
        ordenes: payload,
        loading: false,
      };
    case GET_ORDEN:
      return {
        ...state,
        orden: payload,
        loading: false,
      };
    case CREATE_ORDEN:
      return {
        ...state,
        ordenes: [...state.ordenes, payload],
        loading: false,
      };
    case UPDATE_ORDEN:
      return {
        ...state,
        ordenes: state.ordenes.map((orden) =>
          orden.id === payload.id ? payload : orden
        ),
        loading: false,
      };
    case DELETE_ORDEN:
      return {
        ...state,
        ordenes: state.ordenes.filter((orden) => orden.id !== payload),
        loading: false,
      };
    case ORDEN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
