import { connect } from 'react-redux';

import RouteShowSidebar from './route_show_sidebar';

import { fetchRoutes } from '../../actions/route_actions';
import { allRoutes } from '../../reducers/selectors';


const mapStateToProps = state => ({
    routes: allRoutes(state)
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShowSidebar);
