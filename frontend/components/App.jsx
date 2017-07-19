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
import LandingImage from './landing/landing_image';

const App = () => (
  <div>
    <nav className="nav-bar">
      <NavbarContainer />
    </nav>
    <Route exact path="/" component={LandingImage} />
    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

// <figure>
//   <img className="logo" src="https://res.cloudinary.com/syriebianco/image/upload/c_scale,w_611/v1500469044/logo_v2_lwcbzf.png" alt="logo"></img>
// </figure>
// <Route path="/signout" component={SessionFormContainer} />
