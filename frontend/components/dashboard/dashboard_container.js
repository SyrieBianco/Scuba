import { connect } from 'react-redux';

import Actions from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = ( { session } ) => {

  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    //actions
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
