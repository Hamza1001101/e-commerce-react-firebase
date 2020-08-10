import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

//this function comes from redux.

export default combineReducers({
  user: userReducer,
});
