import {
  GET_PEDIDO,
  GET_PEDIDOS,
  POST_PEDIDO,
  DELETE_PEDIDO,
  UPDATE_PEDIDO,
  PEDIDO_ERROR,
} from "../actions/types";

const initialState = {
  pedidos: [],
  pedido: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PEDIDOS:
      return {
        ...state,
        pedidos: payload,
        loading: false,
      };
    case GET_PEDIDO:
      return {
        ...state,
        pedido: payload,
        loading: false,
      };
    case POST_PEDIDO:
      console.log(payload[0].id_pedido);
      console.log(state.pedidos);
      return {
        ...state,
        pedidos: [...state.pedidos, payload[0].id_pedido],
        loading: false,
      };
    case UPDATE_PEDIDO:
      return {
        ...state,
        pedidos: state.pedidos.map((pedido) =>
          pedido.id === payload.id ? payload : pedido
        ),
        loading: false,
      };
    case DELETE_PEDIDO:
      return {
        ...state,
        pedidos: state.pedidos.filter((pedido) => pedido.id !== payload),
        loading: false,
      };
    case PEDIDO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
