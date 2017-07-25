import React from 'react';
import { Link } from 'react-router-dom';


class DiveShow extends React.Component {

  componentDidMount() {
    this.props.fetchDive(this.props.diveId);
  }
  render() {
    const { dive } = this.props;
    const date = new Date(dive.start_time);
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
