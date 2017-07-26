import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteIndexItemContainer from './index_item_container';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const {routes} = this.props;
    if (!routes) {return null};
    const routeItems = this.props.routes.map(route => (
        <RouteIndexItemContainer
          key={ route.id }
          route={ route }/>
      )
    );
    return (
      <div className="routes-index-page">
        <h1>dem routes</h1>
        <ul className="routes-list">
          {routeItems}
        </ul>

        <Link to='/new_route'><button className="new-route-btn">New Route</button></Link>
      </div>
    );
  }
}

export default withRouter(RoutesIndex);
