import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DiveReducer from './dives_reducer';

const RootReducer = combineReducers ({
  dives: DiveReducer,
  session: SessionReducer
});

export default RootReducer;
