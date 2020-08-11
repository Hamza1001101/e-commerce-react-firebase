import CartActionTypes from './cart-type';
import { addItemToCart } from './cart-utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //the action.payload is just all the new values that would come
        cartItems: addItemToCart(state.cartItems, action.paylaod), //[...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
