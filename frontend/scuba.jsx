import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//test imports
import * as API from './util/session_api_util';
import * as Action from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);


  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signin = Action.signin;
  window.signup = Action.signup;
  window.signout = Action.signout;


});
