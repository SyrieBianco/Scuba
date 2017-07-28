import React from 'react';
import { Link } from 'react-router-dom';
import DecodedMap from './decoded_map';
// <img src="https://www.maps.com/media/catalog/product/cache/1/thumbnail/2500x/17f82f742ffe127f42dca9de82fb58b1/2/0/200002_us_political_im_z.jpg" alt={workout.title} />
class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

 }
  handleDelete(){
    this.props.destroyRoute();
  }
  // <Link to={`/routes/${route.id}/edit`}>
  //   <button className="edit-button">Edit</button>
  // </Link>

 render() {
    const { route, destroyRoute } = this.props;

    const distance = Math.round(route.distance * 100)/ 100;

    return (
     // <span> { route.elevation_change } </span>
      <li className="route-feed-item">

        <Link to={`/routes/${route.id}`}>
          <DecodedMap route={route}/>
        </Link>

        <div className="route-info-box">

          <h3><Link to={`/routes/${route.id}`} className="route-title">
            { route.name }</Link></h3>

            <div className="distance">
              <b>{distance} meters </b>
              <span> distance </span>
            </div>

        </div>

        <span className="timestamps">

        </span>

      </li>
    );
  }
}

export default RouteIndexItem;
