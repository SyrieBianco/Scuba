import { connect } from 'react-redux';

import DiveFeedItem from './dive_feed_item';
import { deleteDive } from '../../actions/dive_actions';


const mapDispatchToProps = (dispatch, {dive}) => ({
  destroyDive: () => dispatch(deleteDive(dive))
});

export default connect(
  null,
  mapDispatchToProps
)(DiveFeedItem);
