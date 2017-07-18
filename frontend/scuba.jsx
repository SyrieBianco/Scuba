import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//test imports
import {signup, signin, signout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);


  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  // window.signin = signin;
  // window.signup = signup;
  // window.signout = signout;


});
