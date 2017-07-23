import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/router_util';

// components

import NavbarContainer from "./navbar/navbar_container.js";
import AuthNavbarContainer from "./navbar/auth_navbar_container.js";
import SessionFormContainer from "./session_form/session_form_container";
import DiveFormContainer from "./dive/dive_form_container";
import LandingImage from './landing/landing_image';


const App = () => (
  <div>
    <AuthRoute path="/" component={AuthNavbarContainer} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <Route path="/new_dive" component={DiveFormContainer}/>

    <Route exact path="/" component={LandingImage} />

    <AuthRoute path="/signin" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

// <figure>
//   <img className="logo" src="https://res.cloudinary.com/syriebianco/image/upload/c_scale,w_611/v1500469044/logo_v2_lwcbzf.png" alt="logo"></img>
// </figure>
// <Route path="/signout" component={SessionFormContainer} />
