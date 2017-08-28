import React from 'react';
import { Link } from 'react-router-dom';
import ShowMap from './show_map';

class RouteShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: ""
    };
    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.routeId);
  }

  setLocation(location) {
    this.setState({location});
  }

  render() {
    const { route } = this.props;
    // <li>Elevation change: {route.elevation_change}</li>
    return (
    <div className="route-show-page">
      <h2 className="form-header">{route.name}</h2>

      <div className="route-show-info">
        <h2 className="route-info">Location: Near {this.state.location}</h2>
        <h2 className="route-info">Distance: {Math.round(100 * route.distance / 1609.34) / 100} miles</h2>
        <h2 className="route-info">Notes: {route.notes}</h2>
        <ShowMap
          setLocation={this.setLocation}
          route={route}
          />
      </div>


    </div>
  );
}
}

export default RouteShow;
