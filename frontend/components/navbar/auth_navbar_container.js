import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import AuthNavbar from './auth_navbar';

// const mapStateToProps = ({ location }) => ({
//   pageType: location.pathname.slice(1)
// });

const mapDispatchToProps = (dispatch, { location }) => {
  return ({
    pageType: location.pathname.slice(1)
  });
};

export default connect(
  null,
  mapDispatchToProps
)(AuthNavbar);
