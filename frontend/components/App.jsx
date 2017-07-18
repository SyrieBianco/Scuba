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
import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    <header>
      <h1>Scuba</h1>
      <WelcomeContainer />
    </header>

    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/signout" component={SessionFormContainer} />
  </div>
);

export default App;
