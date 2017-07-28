import { connect } from 'react-redux';

import Actions from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
  return {
    //sections of state
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
