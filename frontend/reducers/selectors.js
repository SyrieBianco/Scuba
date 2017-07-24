export const allDives = state => (
  Object.keys(state.dives).map(id => state.dives[id])
);


export const selectDive = ({ dives }, id) => {
   const dive = dives[id] || {};
   return dive;
};
