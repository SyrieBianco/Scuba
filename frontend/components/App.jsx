import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// components

import WelcomeContainer from "./welcome/welcome_container.js";
// import SessionForm from "./session_form/session";

const App = () => (
  <div>
    <header>
      <h1>Scuba</h1>
      <WelcomeContainer />
    </header>
  </div>
);

export default App;
