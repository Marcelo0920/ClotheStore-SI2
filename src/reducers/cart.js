import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "../actions/types";

const initialState = {
  items: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.precio,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.precio,
        };
      }

    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - itemToRemove.precio * itemToRemove.quantity,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
      };

    case UPDATE_CART_ITEM_QUANTITY:
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const newTotal = updatedItems.reduce(
        (total, item) => total + item.precio * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
      };

    default:
      return state;
  }
}
