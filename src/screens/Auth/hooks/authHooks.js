/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {storeLoginData} from '../../../redux/action/auth/authAction';

export const useAuthStore = () => {
  const authUserData = useSelector(state => state.authReducer.userData);
  const dispatch = useDispatch();

  const setAuthUserData = useCallback(data => dispatch(storeLoginData(data)));

  return {
    authUserData,
    setAuthUserData,
  };
};
