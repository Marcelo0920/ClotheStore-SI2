import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "./types";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};

export const updateCartItemQuantity = (productId, quantity) => (dispatch) => {
  dispatch({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { id: productId, quantity },
  });
};
