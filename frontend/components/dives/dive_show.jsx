import React from 'react';
import { Link } from 'react-router-dom';
import ShowMap from '../routes/show_map';
import { selectRoute } from '../../reducers/selectors';


class DiveShow extends React.Component {

  componentDidMount() {
    const { diveId } = this.props;
    this.props.fetchDive(diveId).then(dive => this.props.fetchRoute(dive.dive.route_id));
  }
  render() {
    const { dive, routes } = this.props;

    const date = new Date(dive.start_time * 1000);
    const time = date.toLocaleTimeString('en-US');

    const route = selectRoute({routes}, dive.route_id);
    if (Object.keys(route).length === 0) return null;

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
              <h3>Duration: <p>{dive.duration_string}</p></h3>
              <h3>Air consumption: <p>{dive.air_consumed} psi</p></h3>
            </div>

            <div className="notes-div">
              <h3>Notes:</h3>
              <h3 className="dive-notes"><p>{dive.notes}</p></h3>
            </div>
          </div>

          <figure className="route-fig">
            <ShowMap route={route}/>
          </figure>

        </div>
      </div>
    </div>
  );
}
}

export default DiveShow;
