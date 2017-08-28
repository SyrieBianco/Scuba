import React from 'react';
import ReactDOM from 'react-dom';


class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latLngs: google.maps.geometry.encoding.decodePath(
        this.props.route.waypoints_text)
    };
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs[`${this.props.route.id}`]);
    this.map = new google.maps.Map(map);
    this.pathLine = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1,
      strokeWeight: 3,
      map: this.map,
      draggable: false
    });

    this.bounds = new google.maps.LatLngBounds();
    this.state.latLngs.forEach(latLng => {
      this.pathLine.getPath().push(latLng);
      this.bounds.extend(latLng);
    });
    this.map.fitBounds(this.bounds);
    this.map.panToBounds(this.bounds);

    const latLng = this.map.getCenter();
    const location = this.geocodeLocation(latLng);


  }

  geocodeLocation({lat, lng}){
    const latLng = {lat: lat(), lng: lng()};
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'location': latLng}, (results, status) => {
      if (status == 'OK') {
        if (results[0]) {
          console.log('results', results);
          this.props.setLocation(results[0].formatted_address);
        } else {
          this.props.setLocation('Exact location not available');
        }
      } else {
        this.props.setLocation('Exact location not available');
      }
    });
  }

  render() {
    const { route } = this.props;
    const idName = route.id;
    return(
      <div id={idName} ref={idName} className="show-map"></div>
    );
  }
}

export default ShowMap;
