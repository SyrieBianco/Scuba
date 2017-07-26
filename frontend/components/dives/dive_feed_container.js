import { connect } from 'react-redux';

import DiveFeed from './dive_feed';
import { fetchDives } from '../../actions/dive_actions';
import { allDives } from '../../reducers/selectors';

const mapStateToProps = state => ({
  dives: allDives(state)
});

const mapDispatchToProps = dispatch => ({
  fetchDives: () => dispatch(fetchDives())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiveFeed);
