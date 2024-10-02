import {
  GET_CAJA,
  GET_CAJAS,
  POST_CAJA,
  DELETE_CAJA,
  UPDATE_CAJA,
  CAJA_ERROR,
  OPEN_CAJA,
  CLOSE_CAJA,
  GET_USER_CAJA,
  GET_CAJA_ARQUEO,
  VERIFY_CAJA,
} from "../actions/types";

const initialState = {
  cajas: [],
  caja: null,
  userCaja: null,
  cajaArqueo: [],
  verifiedCaja: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CAJAS:
      return {
        ...state,
        cajas: payload,
        loading: false,
      };
    case GET_CAJA:
    case VERIFY_CAJA:
      return {
        ...state,
        caja: payload,
        loading: false,
      };
    case POST_CAJA:
      return {
        ...state,
        cajas: [...state.cajas, payload],
        loading: false,
      };
    case UPDATE_CAJA:
      return {
        ...state,
        cajas: state.cajas.map((caja) =>
          caja.id === payload.id ? payload : caja
        ),
        loading: false,
      };
    case DELETE_CAJA:
      return {
        ...state,
        cajas: state.cajas.filter((caja) => caja.id !== payload),
        loading: false,
      };
    case OPEN_CAJA:
    case CLOSE_CAJA:
      return {
        ...state,
        caja: payload,
        loading: false,
      };
    case GET_USER_CAJA:
      return {
        ...state,
        userCaja: payload,
        loading: false,
      };
    case GET_CAJA_ARQUEO:
      return {
        ...state,
        cajaArqueo: payload,
        loading: false,
      };
    case CAJA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
