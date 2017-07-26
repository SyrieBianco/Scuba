import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

//make start marker green flag, end checkered
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      waypoints: [],
      latLngs: [],
      waypoints_text: "",
      distance: 0,
      name: "",
      notes: ""
    };

    this.listenforClick = this.listenforClick.bind(this);
    this.resetLine = this.resetLine.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMarkers = this.deleteMarkers.bind(this);
    this.undo = this.undo.bind(this);
  }

  componentDidMount() {/*
     * ReactDOM.findDOMNode gets us a pointer to the actual html DOM
     * element, not its React component class instance, this is what
     * Google maps wants to render the map into this.refs is an object
     * populated by giving children a 'ref' prop when we render
     */
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: 13,
      mapTypeControl: true,
      mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DEFAULT
          }
    };
    this.map = new google.maps.Map(map, options);
    this.resetLine();
    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    this.registerListeners(searchBox, this.map);
    // this.listenForMove();
    this.listenforClick();
  }

  resetLine() {
    this.pathLine =  new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1,
      strokeWeight: 3,
      map: this.map
    });
    google.maps.event.addListener(this.map, 'click', (e) => {
      this.addLatLngToPath(e.latLng, this.pathLine);
    });
  }

  listenforClick() {
    const {markers} = this.state;
    const {waypoints} = this.state;
    const {latLngs} = this.state;
    this.map.addListener('click', (e) => {
      placeMarker(e.latLng, this.map);
    });

    const placeMarker = (position, map) => {
      let loc = new google.maps.LatLng(
        position.lat(),
        position.lng()
      );
      latLngs.push(loc);
      waypoints.push({location: loc });
      if (markers.length > 1) {
        this.calcAndDisplayInfo();
        markers.push(
          new google.maps.Marker({
            position: position,
            map: map,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 4,
              strokeWeight: 2.2
            }
          }));
        } else if (markers.length === 1){
          this.calcAndDisplayInfo();
          markers.push(
            new google.maps.Marker({
              position: position,
              map: map,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                strokeWeight: 2.2
              }
            }));
        } else {
        markers.push(new google.maps.Marker({
          position: position,
          map: map,
        }));
      }
    };
  }

  addLatLngToPath(latLng, poly) {
     let path = poly.getPath();
     // Because path is an MVCArray, we can simply append a new coordinate
     // and it will automatically appear
     path.push(latLng);

     // Update the text field to display the polyline encodings
     let encodeString = google.maps.geometry.encoding.encodePath(path);
     if (encodeString) {
       this.setState({waypoints_text: encodeString});
     }
   }

   deleteMarkers() {
    //  this.state.markers.forEach(marker => {marker.setMap(null);});
    //  this.pathLine.setMap(null);
    //  this.oldPathLine = this.pathLine;
    //  this.oldMarkers = this.state.markers;
    //  this.prevState = this.state;
    //  this.setState({
    //    markers: [],
    //    waypoints: [],
    //    latLngs: [],
    //    waypoints_text: "",
    //    distance: 0,
    //    name: "",
    //    notes: ""}, () => {
    //      this.resetLine();
    //    }
    //  );
   }

   undo(){
    //  this.setState(this.prevState);
    //  this.oldPathLine.setMap(this.map);
   }


  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let prop = {
      waypoints_text: this.state.waypoints_text,
      distance: this.state.distance,
      // elevation: this.state,
      name: this.state.name,
      notes: this.state.notes,
    };
    this.props.createRoute(prop).then(data => this.props.history.push(`/routes/${data.route.id}`));
  }

  registerListeners(searchBox, map){
    let self = this;

    searchBox.addListener('places_changed', function() {
      var place = searchBox.getPlaces()[0];
      const latt = place.geometry.location.lat();
      const long = place.geometry.location.lng();
      map.panTo(new google.maps.LatLng(latt, long));
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  calcAndDisplayInfo(){
    const {markers} = this.state;
    const {waypoints} = this.state;
    const {latLngs} = this.state;
    let dist = 0;
    let dur = 0;
    //reference : https://developers.google.com/maps/documentation/javascript/3.exp/reference#spherical
    this.setState({
      distance: google.maps.geometry.spherical.computeLength(latLngs)});

  }


  displayElevation() { //for later
    // Create an ElevationService.
    let elevator = new google.maps.ElevationService;
    let path = this.state.waypoints.map((waypoint) => waypoint.location);
  }

  render() {
    const { distance } = this.state;
  /*
   * the div that will become the map is just an empty div
   * we give it a 'ref' so we can easily get a pointer to the
   * actual dom node up in componentDidMount
   */

   // <button onClick={this.undo}>Undo</button>
   // <button onClick={this.deleteMarkers}>Clear Map</button>
    return (
      <div>
        <ul>{this.errors()}</ul>
        <input className="name-route-input" onChange={this.update('name')} placeholder="Route name"/>
        <textarea className="notes-route-input" onChange={this.update('notes')} placeholder="Route notes"/>
        <button onClick={this.handleSubmit}>Save Route</button>
        <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
        <ul className="route-info-list">
          <li>Distance: {Math.round(100 * distance / 1609.34) / 100} miles</li>
        </ul>
        <div id='map' ref='map'/>
        <div id="elevation_chart"></div>
      </div>
    );
  }
}

export default withRouter(Map);
