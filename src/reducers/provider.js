import {
  GET_PROVIDER,
  GET_PROVIDERS,
  POST_PROVIDER,
  DELETE_PROVIDER,
  UPDATE_PROVIDER,
  PROVIDER_ERROR,
} from "../actions/types";

const initialState = {
  providers: [],
  provider: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROVIDERS:
      return {
        ...state,
        providers: payload,
        loading: false,
      };
    case GET_PROVIDER:
      return {
        ...state,
        provider: payload,
        loading: false,
      };
    case POST_PROVIDER:
      return {
        ...state,
        providers: [...state.providers, payload],
        loading: false,
      };
    case UPDATE_PROVIDER:
      return {
        ...state,
        providers: state.providers.map((provider) =>
          provider.id === payload.id ? payload : provider
        ),
        loading: false,
      };
    case DELETE_PROVIDER:
      return {
        ...state,
        providers: state.providers.filter(
          (provider) => provider.id !== payload
        ),
        loading: false,
      };
    case PROVIDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
