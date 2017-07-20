import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import AuthNavbar from './auth_navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  pageType: location.pathname.slice(1)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNavbar);
