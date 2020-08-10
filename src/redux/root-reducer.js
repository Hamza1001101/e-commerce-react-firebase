import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
//this function comes from redux.

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
