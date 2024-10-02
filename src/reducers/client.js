import {
  GET_CLIENTE,
  GET_CLIENTES,
  POST_CLIENTE,
  DELETE_CLIENTE,
  UPDATE_CLIENTE,
  CLIENTE_ERROR,
} from "../actions/types";

const initialState = {
  clients: [],
  client: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CLIENTES:
      return {
        ...state,
        clients: payload,
        loading: false,
      };
    case GET_CLIENTE:
      return {
        ...state,
        client: payload,
        loading: false,
      };
    case POST_CLIENTE:
      return {
        ...state,
        clients: [...state.clients, payload],
        loading: false,
      };
    case UPDATE_CLIENTE:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === payload.id ? payload : client
        ),
        loading: false,
      };
    case DELETE_CLIENTE:
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== payload),
        loading: false,
      };
    case CLIENTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
