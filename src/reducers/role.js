import {
  GET_ROLE,
  GET_ROLES,
  POST_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE,
  ROLE_ERROR,
} from "../actions/types";

const initialState = {
  roles: [],
  role: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ROLES:
      return {
        ...state,
        roles: payload,
        loading: false,
      };
    case GET_ROLE:
      return {
        ...state,
        role: payload,
        loading: false,
      };
    case POST_ROLE:
      return {
        ...state,
        roles: [...state.roles, payload],
        loading: false,
      };
    case UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map((role) =>
          role.id === payload.id ? payload : role
        ),
        loading: false,
      };
    case DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== payload),
        loading: false,
      };
    case ROLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
