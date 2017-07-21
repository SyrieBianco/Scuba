import * as API from '../util/dive_util';

export const RECEIVE_DIVES = 'RECEIVE_DIVES';
export const RECEIVE_DIVE = 'RECEIVE_DIVE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const REQUEST_DIVE = 'REQUEST_DIVE';

export const receiveDives = dives => ({
  type: RECEIVE_DIVES,
  dives
});

export const receiveDive = dive => ({
  type: RECEIVE_DIVE,
  dive
});


export const fetchDives = filters => dispatch => (
  API.fetchDives(filters).then(dives => (
    dispatch(receiveDives(dives))
  ))
);

export const fetchDive = id => dispatch => (
  API.fetchDive(id).then(dive => (
    dispatch(receiveDive(dive))
  ))
);

export const createDive = dive => dispatch => (
  API.createDive(dive).then(dive => (
    dispatch(receiveDive(dive))
  ))
);

export const deleteDive = dive => dispatch => (
  API.deleteDive(dive).then(dive => (
    dispatch(receiveDive(dive))
  ))
);
