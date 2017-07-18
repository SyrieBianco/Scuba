import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
