import {createReducer} from '@reduxjs/toolkit';
import {storeLoginData} from '../../action/auth/authAction';

export const initialData = {
  userData: {
    userName: '',
    emailID: '',
    mobileNumber: '',
  },
};

export default createReducer(initialData, {
  [storeLoginData]: (state, {payload}) => {
    state.userData = payload;
  },
});
