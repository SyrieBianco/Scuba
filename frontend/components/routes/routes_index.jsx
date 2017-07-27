import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteIndexItemContainer from './index_item_container';
import RouteShowContainer from './route_show';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
    this.menuOpen = true;
  }


  render() {
    const {routes} = this.props;
    if (!routes) {return null;}

    const routeItems = this.props.routes.map(route => (
        <RouteIndexItemContainer
          key={ route.id }
          route={ route }/>
      )
    );
    return (
      <div className="full-page-component">

        <hgroup className="routes-index-header-group">
          <h1 className="form-header">My Dive Routes</h1>
          <Link to='/new_route' className="new-route-button">Create New Route</Link>
        </hgroup>

        <ul className="route-list">
          {routeItems}
        </ul>

      </div>
    );
  }
}

export default withRouter(RoutesIndex);
