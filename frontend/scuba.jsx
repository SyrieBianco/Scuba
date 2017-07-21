import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//test imports
// import * as SessionAPI from './util/session_api_util';
import * as DiveAPI from './util/dive_api_util';
// import * as SessionAction from './actions/session_actions';
import * as DiveAction from './actions/dive_actions';


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

  // window.signin = SessionAction.signin;
  // window.signup = SessionAction.signup;
  // window.signout = SessionAction.signout;
  //
  // window.fetchDives = DiveAPI.fetchDives;
  // window.fetchDive = DiveAPI.fetchDive;
  // window.createDive = DiveAPI.createDive;
  // window.deleteDive = DiveAPI.deleteDive;

  window.receiveDives = DiveAction.receiveDives;
  window.receiveDive = DiveAction.receiveDive;
  window.fetchDive = DiveAction.fetchDive;
  window.fetchDives = DiveAction.fetchDives;
  window.createDive = DiveAction.createDive;
  window.deleteDive = DiveAction.deleteDive;



});
