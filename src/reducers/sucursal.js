import {
  GET_SUCURSAL,
  GET_SUCURSALS,
  POST_SUCURSAL,
  DELETE_SUCURSAL,
  UPDATE_SUCURSAL,
  SUCURSAL_ERROR,
} from "../actions/types";

const initialState = {
  sucursals: [],
  sucursal: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUCURSALS:
      return {
        ...state,
        sucursals: payload,
        loading: false,
      };
    case GET_SUCURSAL:
      return {
        ...state,
        sucursal: payload,
        loading: false,
      };
    case POST_SUCURSAL:
      return {
        ...state,
        sucursals: [...state.sucursals, payload],
        loading: false,
      };
    case UPDATE_SUCURSAL:
      return {
        ...state,
        sucursals: state.sucursals.map((sucursal) =>
          sucursal.id === payload.id ? payload : sucursal
        ),
        loading: false,
      };
    case DELETE_SUCURSAL:
      return {
        ...state,
        sucursals: state.sucursals.filter(
          (sucursal) => sucursal.id !== payload
        ),
        loading: false,
      };
    case SUCURSAL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
