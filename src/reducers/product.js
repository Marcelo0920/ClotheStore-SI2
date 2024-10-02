import {
  GET_PRODUCT,
  GET_PRODUCTS,
  POST_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERROR,
} from "../actions/types";

const initialState = {
  products: [],
  product: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product
        ),
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
