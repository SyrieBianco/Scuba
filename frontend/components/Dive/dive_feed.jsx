import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DiveFeedItemContainer from './dive_feed_item_container';


class DiveFeed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchDives();
  }

  render() {
    const {dives} = this.props;
    if (!dives) {return null};
    const diveItems = this.props.dives.map(dive => (
        <DiveFeedItemContainer
          key={ dive.id }
          dive={ dive }/>
      )
    );
    return (
      <div className="dives-feed">
        <h1>hi hope!</h1>
        <ul className="dive-list">
          {diveItems}
        </ul>

        <Link to='/new_dive'><button className="new-dive-btn">New Dive</button></Link>
      </div>
    );
  }
}

export default withRouter(DiveFeed);
