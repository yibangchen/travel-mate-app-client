import { setTokenHeader, apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

const AUTH_PATH = '/api/auth/';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

// redux thunk
export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `${AUTH_PATH}${type}`, userData)
        .then( ({ token, ...user }) => {
          const { id, username } = user
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('userData', user);
          setAuthorizationToken(token);
          dispatch(setCurrentUser({ id, username }));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err));
          reject();
        });
    })
  }
}