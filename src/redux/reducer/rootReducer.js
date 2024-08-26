import {combineReducers} from 'redux';
import authReducer from '../reducer/auth';
export const appReducer = combineReducers({
  authReducer,
});
