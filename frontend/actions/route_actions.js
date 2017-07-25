import * as Util from '../util/route_util'

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = "REMOVE_ROUTE";

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const removeRoute = route => ({
  type: REMOVE_ROUTE,
  route
});

export const fetchRoutes = () => dispatch => (
  Util.fetchRoutes().then(routes => (
    dispatch(receiveRoutes(routes))
  ))
);

export const fetchRoute = id => dispatch => (
  Util.fetchRoute(id).then(route => (
    dispatch(receiveRoute(route))
  ))
);

export const createRoute = route => dispatch => (
  Util.createRoute(route).then(route => {
    return (
      dispatch(receiveRoute(route))
    );
  }, err => {
  })
);

export const updateRoute = route => dispatch => (
  Util.updateRoute(route).then(route => dispatch(receiveRoute(route)))
);

export const deleteRoute = route => dispatch => (
  Util.deleteRoute(route).then(() => dispatch(removeRoute(route))));
