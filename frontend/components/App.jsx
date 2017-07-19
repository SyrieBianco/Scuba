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

import NavbarContainer from "./navbar/navbar_container.js";
import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    <nav class ="nav-bar">
      <figure>
        <img className="logo" src="https://res.cloudinary.com/syriebianco/image/upload/c_scale,w_611/v1500469044/logo_v2_lwcbzf.png" alt="logo"></img>
      </figure>
      <NavbarContainer />
    </nav>

    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/signout" component={SessionFormContainer} />
  </div>
);

export default App;
