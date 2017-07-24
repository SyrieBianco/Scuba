import React from 'react';
import { Link } from 'react-router-dom';


class DiveShow extends React.Component {

  componentDidMount() {
    this.props.fetchDive(this.props.diveId);
  }
  render() {
    const { dive } = this.props;
    return (
    <div>
      <ul className="dive-show">
        <li>Title: {dive.title}</li>
        <li>This is the dive show page</li>
      </ul>
    </div>
  );
}
}

export default DiveShow;
