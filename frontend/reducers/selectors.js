export const allDives = state => (
  Object.keys(state.dives).map(id => state.dives[id])
);


export const selectDive = ({ dives }, id) => {
   const dive = dives[id] || {};
   return dive;
};

export const allRoutes = state => (
  Object.keys(state.routes).map(id => state.routes[id])
);


export const selectRoute = ({ routes }, id) => {
   const route = routes[id] || {};
   return route;
};
