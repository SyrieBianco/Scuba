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
    if (!dives) {return null}
    const diveItems = this.props.dives.map(dive => (
        <DiveFeedItemContainer
          key={ dive.id }
          dive={ dive }/>
      )
    );
    return (
      <div className="dives-feed">
        <h1 className="form-header">Your Logged Dives</h1>
        <ul className="dive-list">
          {diveItems}
        </ul>
        <div className="new-dive-links">
          <Link className="feed-plus-button" to="/new_dive"></Link>
          <Link to='/new_dive' className="new-dive">Log a new dive</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(DiveFeed);
