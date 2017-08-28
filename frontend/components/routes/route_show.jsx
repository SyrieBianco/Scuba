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
    console.log('setting location!', location);
    this.setState({location});
  }

  render() {
    const { route } = this.props;
    // <li>Elevation change: {route.elevation_change}</li>
    return (
    <div className="route-show-page">

      <div className="route-show-info">
        <h2 className="form-header">{route.name}</h2>
        <h2></h2>
        <h2>Distance: {Math.round(100 * route.distance / 1609.34) / 100} miles</h2>
        <h2>Notes: {route.notes}</h2>
      </div>

      <ShowMap
        setLocation={this.setLocation}
        route={route}
      />

    </div>
  );
}
}

export default RouteShow;
