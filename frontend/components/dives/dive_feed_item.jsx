import React from 'react';
import { Link } from 'react-router-dom';

class DiveFeedItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { dive, destroyDive } = this.props;
    const date = new Date(dive.start_time * 1000);

    return (

      <li className="dive-feed-item">
        <div className="dive-info">
          <Link to={`/dives/${dive.id}`}>
            <span>{ dive.title }</span>
          </Link>
        </div>

        <span>{date.toDateString()}</span>

        <button onClick={destroyDive} className="delete-button">Delete</button>


      </li>
    );
  }
}

export default DiveFeedItem;
