import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchDives } from '../../actions/dive_actions';
import { fetchRoutes } from '../../actions/route_actions';
import { allDives, allRoutes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  dives: allDives(state),
  routes: allRoutes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchDives: () => dispatch(fetchDives()),
  fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
