import { merge } from 'lodash';

import {
  RECEIVE_DIVES,
  RECEIVE_DIVE,
  REMOVE_DIVE } from '../actions/dive_actions';

const DivesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_DIVES:
      action.dives.forEach(dive => {
        newState[dive.id] = dive;
      });
      return newState;
    case RECEIVE_DIVE:
      newState[action.dive.id] = action.dive;
      return newState;
    case REMOVE_DIVE:
      delete newState[action.dive.id];
      return newState;
    default:
      return state;
  }
};

export default DivesReducer;
