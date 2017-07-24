import { connect } from 'react-redux';

import DiveFeedItem from './dive_feed_item';
import { deleteWorkout } from '../../actions/dive_actions';


const mapDispatchToProps = (dispatch, {dive}) => ({
  destroyWorkout: () => dispatch(deleteWorkout(dive))
});

export default connect(
  null,
  mapDispatchToProps
)(DiveFeedItem);
