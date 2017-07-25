import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});


export default withRouter(connect(
  mapStateToProps,
  null
)(Navbar));
