import { connect } from 'react-redux';

import { fetchDive } from '../../actions/dive_actions';
import { fetchRoute } from '../../actions/route_actions';
import { selectDive } from '../../reducers/selectors';
import DiveShow from './dive_show';
//
const mapStateToProps = (state, { match }) => ({
  diveId: parseInt(match.params.diveId),
  dive: selectDive(state, match.params.diveId)
});

const mapDispatchToProps = dispatch => ({
  fetchDive: id => dispatch(fetchDive(id)),
  fetchRoute: id => dispatch(fetchRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiveShow);
