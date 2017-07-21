import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//test imports
import * as SessionAPI from './util/session_api_util';
import * as DiveAPI from './util/dive_api_util';
import * as Action from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);


  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.signin = Action.signin;
  // window.signup = Action.signup;
  // window.signout = Action.signout;
  //
  // window.fetchDives = DiveAPI.fetchDives;
  // window.fetchDive = DiveAPI.fetchDive;
  // window.createDive = DiveAPI.createDive;
  // window.deleteDive = DiveAPI.deleteDive;
});
