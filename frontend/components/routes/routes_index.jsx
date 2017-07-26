import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteIndexItemContainer from './index_item_container';
import { slide as Menu } from 'react-burger-menu';
import RouteShowContainer from './route_show';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoutes();
    this.menuOpen = true;
  }

  toggleSidebar() {
    console.log("here");
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  isMenuOpen () {
    return this.state.isOpen;
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

        <Menu
           right
           isOpen={ this.menuOpen }
           onStateChange={ this.isMenuOpen }
        >
          <Link to='/new_route'><button className="new-route-btn">New Route</button></Link>
          <ul className="menu-item"  onClick={this.toggleSidebar}>
            {routeItems}
          </ul>
        </Menu>

          <h1>dem routes</h1>
      </div>
    );
  }
}

export default withRouter(RoutesIndex);
