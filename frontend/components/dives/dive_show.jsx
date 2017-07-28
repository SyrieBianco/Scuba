import React from 'react';
import { Link } from 'react-router-dom';
import ShowMap from '../routes/show_map';

class DiveShow extends React.Component {

  componentDidMount() {
    const { dive } = this.props;
    this.props.fetchDive(dive.id);
    this.props.fetchRoute(dive.route_id);
  }
  render() {
    const { dive } = this.props;
    const date = new Date(dive.start_time * 1000);
    const time = date.toLocaleTimeString('en-US');

    return (
    <div>
      <div className="dive-show">

        <h1 className="form-header">{dive.title}</h1>

        <div className="dive-route-and-info">

          <div className="dive-info">

            <div className="date-time-div">
              <h3>Location:<p></p></h3>
              <h3>Dive Date:
                <p>{date.toDateString()}</p></h3>
              <h3>Time: <p>{time}</p></h3>
            </div>

            <div className="stats-div">
              <h3>Duration: <p>{dive.duration}</p></h3>
              <h3>Air consumption: <p>{dive.air_consumed} psi</p></h3>
              <h3>Avg Depth: <p></p></h3>
            </div>

            <div className="notes-div">
              <h3>Notes:</h3>
              <h3 className="dive-notes"><p>{dive.notes}</p></h3>
            </div>
          </div>

          <figure className="route-fig">
          </figure>

        </div>
      </div>
    </div>
  );
}
}
// <ShowMap route={dive.route}/>

export default DiveShow;
