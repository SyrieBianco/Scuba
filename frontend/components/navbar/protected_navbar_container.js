import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

import ProtectedNavbar from './protected_navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedNavbar));
