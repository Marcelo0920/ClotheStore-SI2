import {
  GET_FACTURA,
  GET_FACTURAS,
  CREATE_FACTURA,
  UPDATE_FACTURA,
  DELETE_FACTURA,
  FACTURA_ERROR,
} from "../actions/types";

const initialState = {
  facturas: [],
  factura: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FACTURAS:
      return {
        ...state,
        facturas: payload,
        loading: false,
      };
    case GET_FACTURA:
      return {
        ...state,
        factura: payload,
        loading: false,
      };
    case CREATE_FACTURA:
      return {
        ...state,
        facturas: [...state.facturas, payload],
        loading: false,
      };
    case UPDATE_FACTURA:
      return {
        ...state,
        facturas: state.facturas.map((factura) =>
          factura.id === payload.id ? payload : factura
        ),
        loading: false,
      };
    case DELETE_FACTURA:
      return {
        ...state,
        facturas: state.facturas.filter((factura) => factura.id !== payload),
        loading: false,
      };
    case FACTURA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
