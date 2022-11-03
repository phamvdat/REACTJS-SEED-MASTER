import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'core/store/auth/slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
