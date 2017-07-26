import React from 'react';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.routeId);
  }
  render() {
    const { route } = this.props;
    // <li>Elevation change: {route.elevation_change}</li>
    return (
    <div>
      <ul className="route-show">
        <li>Name: {route.name}</li>
        <li>Distance: {Math.round(100 * route.distance / 1609.34) / 100} miles</li>
        <li>Notes: {route.notes}</li>
      </ul>
    </div>
  );
};
};

export default RouteShow;
