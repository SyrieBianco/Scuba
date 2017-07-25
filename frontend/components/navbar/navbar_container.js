import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});


export default connect(
  mapStateToProps,
  null
)(Navbar);
