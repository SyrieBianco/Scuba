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
import SessionFormContainer from "./session_form/session_form_container";
import DiveFormContainer from "./dives/dive_form_container";
import LandingImage from './landing/landing_image';
import RoutesIndexContainer from './routes/routes_index_container';
import NewRouteContainer from './routes/new_route_container';
import RouteShowContainer from './routes/route_show_container';

import NewDiveContainer from './dives/dive_form_container';
import DiveFeedContainer from './dives/dive_feed_container';
import DiveShowContainer from './dives/dive_show_container.js';


const App = () => {

  return (
  <div>
    <Route path="/" component={NavbarContainer} />

    <Route exact path="/" component={LandingImage} />
    <ProtectedRoute path="/routes" component={RoutesIndexContainer} />
    <ProtectedRoute path="/routes/:routeId" component={RouteShowContainer}/>
    <Switch>
      <ProtectedRoute exact path="/new_dive" component={DiveFormContainer}/>
      <ProtectedRoute exact path="/new_route" component={NewRouteContainer} />


      <ProtectedRoute exact path="/dives" component={DiveFeedContainer}/>
      <ProtectedRoute exact path="/dives/:diveId" component={DiveShowContainer}/>

      <AuthRoute path="/signin" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
  );
};

export default App;

// <figure>
//   <img className="logo" src="https://res.cloudinary.com/syriebianco/image/upload/c_scale,w_611/v1500469044/logo_v2_lwcbzf.png" alt="logo"></img>
// </figure>
// <Route path="/signout" component={SessionFormContainer} />
