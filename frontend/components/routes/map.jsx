import React from 'react';
import ReactDOM from 'react-dom';


//make start marker green flag, end checkered
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    this.listenForMove();
    // this.listenForClick();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  // listenForClick() {
  //
  //   marker.addListener('click', () => {
  //     // alert(`clicked on: ${waypoint.name}`);
  //     waypoints.push(new google.maps.Marker({
  //       map: this.map,
  //       icon: icon,
  //       title: place.name,
  //       position: place.geometry.locatio
  //     }));
  //   });
  // }


  listenForMove() {
   /*
    * we listen for the map to emit an 'idle' event, it does this when
    * the map stops moving
    */
   google.maps.event.addListener(this.map, 'idle', () => {
     const bounds = this.map.getBounds();

     console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
      console.log("zoom", this.map.getZoom());
    });
  }

    render() {
    /*
     * the div that will become the map is just an empty div
     * we give it a 'ref' so we can easily get a pointer to the
     * actual dom node up in componentDidMount
     * DO NOT FORGET: you must style your map div and give it width + height
     * or else it won't be visible!
     */
    return (
      <div>
        <span>MAP DEMO</span>
        <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
        <div className="route-type-btns">
          <button>"Hi, I'm a button! Click ME!! "</button>
        </div>
        <div id='map' ref='map'/>
        <p>
          wuzzzuuuup
        </p>
      </div>
    );
  }
}

export default Map;
