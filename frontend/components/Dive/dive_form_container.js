import { connect } from 'react-redux';

import { createDive } from '../../actions/dive_actions';
import DiveForm from './dive_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
  createDive: dive => dispatch(createDive(dive))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiveForm);
