import React from 'react';
import ReactDOM from 'react-dom';

//test imports
import {signup, signin, signout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Scuba</h1>, root);


  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.signin = signin;
  // window.signup = signup;
  // window.signout = signout;


});
