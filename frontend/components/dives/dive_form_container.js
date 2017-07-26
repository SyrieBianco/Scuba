import { connect } from 'react-redux';

import { createDive } from '../../actions/dive_actions';
import DiveForm from './dive_form';

import { fetchRoutes } from '../../actions/route_actions';
import { allRoutes } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  routes: allRoutes(state)
});


const mapDispatchToProps = (dispatch) => ({
  createDive: dive => dispatch(createDive(dive)),
  fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiveForm);
