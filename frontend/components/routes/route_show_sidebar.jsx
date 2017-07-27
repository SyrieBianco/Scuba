import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RouteShowSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render(){
    const {routes} = this.props;

    return (
      <div id="sidebar" className="sidebar-index">

        <h2 className="sidebar-header">all routes</h2>

        <ul>

          {routes.map((route) => {
            return (
              <li value={route.id} key={route.id}>
                <Link to={"/routes/"+ route.id}>
                  {route.name}
                </Link>
              </li>
            );
            })}

        </ul>

      </div>
    );
  }
}

export default withRouter(RouteShowSidebar)
