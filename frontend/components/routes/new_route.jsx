import React from 'react';
import MapContainer from './map_container';

class NewRoute extends React.Component {
  constructor() {
    super();

  }

  render() {
    const mapCenter = { lat: 37.7758, lng: -122.435 };

    return(
      <div className="full-page-component">
        <div className="route-builder">
          <h1 className="form-header">Build A Route</h1>
          <MapContainer center={mapCenter}/>,
        </div>
      </div>
    );
  }
}

export default NewRoute;
