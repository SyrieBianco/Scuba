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
    if (!routes) return null;
    // if (Object.keys(routes).length === 0) return null;

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
          {routeItems.length === 0 ? <li className="empty-index"> <p className="emptyRoutes">
            You haven't created any routes yet!
            <br/>
            <Link to="/new_route" className="inline-link">Create a route</Link> to get started </p>
          </li>
          : routeItems}
        </ul>


      </div>
    );
  }
}

export default withRouter(RoutesIndex);
