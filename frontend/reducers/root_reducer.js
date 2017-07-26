import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DiveReducer from './dives_reducer';
import RouteReducer from './route_reducer';

const RootReducer = combineReducers ({
  dives: DiveReducer,
  routes: RouteReducer,
  session: SessionReducer
});

export default RootReducer;
