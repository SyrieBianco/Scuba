import * as API from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_STORE = "CLEAR_STORE";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearStore = () => {
  return {
    type: CLEAR_STORE
  };
};


export const signup = user => dispatch => (
  API.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const signin = user => dispatch => (
  API.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);


export const signout = () => dispatch => {
  return API.signout()
    .then(
      () => {
        dispatch(receiveCurrentUser(null));
        dispatch(clearStore());
      }
    );
};
