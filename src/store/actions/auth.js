import { setTokenHeader, apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';

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

// redux thunk
export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `${AUTH_PATH}${type}`, userData)
        .then( ( {token, ...user} ) => {
          // API return {id, username, token}
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          resolve();
        })
        .catch(err => {
          // add error here
          reject();
        });
    })
  }
}