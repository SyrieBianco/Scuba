import React from 'react';
import { Link } from 'react-router-dom';

class DiveFeedItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { dive, destroyDive } = this.props;
    console.log(dive);

    return (

      <li className="dive-feed-item">
        <Link to={`/dives/${dive.id}`}>
          <span> { dive.title } </span>
          <span> { dive.title } </span>
      </Link>

      <button onClick={destroyDive} className="delete-button">Delete</button>


      </li>
    );
  }
}

export default DiveFeedItem;
