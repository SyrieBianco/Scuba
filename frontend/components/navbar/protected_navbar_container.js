import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import ProtectedNavbar from './protected_navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedNavbar);
