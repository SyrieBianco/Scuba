import React from 'react';
import { Link } from 'react-router-dom';


class DiveShow extends React.Component {

  componentDidMount() {
    this.props.fetchDive(this.props.diveId);
  }
  render() {
    const { dive } = this.props;
    const date = new Date(dive.start_time);
    const time = date.toLocaleTimeString('en-US')

    return (
    <div>
      <div className="dive-show">

        <h1 className="form-header">{dive.title}</h1>

        <div className="dive-route-and-info">

          <div className="dive-info">

            <div className="date-time-div">
              <h3>Locaton:</h3>
              <h3>Dive Date: {date.toDateString()}</h3>
              <h3>Time: {time}</h3>
            </div>

            <div className="stats-div">
              <h3>Duration: {dive.duration}</h3>
              <h3>Air consumption: {dive.air_consumed}</h3>
              <h3>Avg Depth: </h3>
            </div>

            <div className="notes-div">
              <h3>Notes</h3>
              <h3>{dive.notes}</h3>
            </div>

          </div>

          <figure className="route-fig">
              <img className="sample-route-img"
                src="http://res.cloudinary.com/syriebianco/image/upload/v1500995415/Screen_Shot_2017-07-25_at_8.09.47_AM_offhdm.png"
                alt="dive route map"/>
          </figure>

        </div>
      </div>
    </div>
  );
}
}

export default DiveShow;
