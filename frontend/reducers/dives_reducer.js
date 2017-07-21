import { merge } from 'lodash';

import { RECEIVE_DIVES, RECEIVE_DIVE } from '../actions/dive_actions';

const DivesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_DIVES:
      return action.dives;
    case RECEIVE_DIVE:
      const newDive = {[action.dive.id]: action.dive};
      return merge({}, state, newDive);
    default:
      return state;
  }
};

export default DivesReducer;
