import React from 'react';
import ReactDOM from 'react-dom';

//test imports
import {signup, signin, signout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  window.signin = signin;
  window.signup = signup;
  window.signout = signout;
});
