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
      <div className="dive-show">
        <h1 className="form-header">{dive.title}</h1>
        <figure className="sample-route-fig">
            <img className="sample-route-img"
              src="http://res.cloudinary.com/syriebianco/image/upload/v1500995415/Screen_Shot_2017-07-25_at_8.09.47_AM_offhdm.png"
              alt="dive route map"/>
        </figure>
        <div className="dive-info">
          
        </div>
      </div>
    </div>
  );
}
}

export default DiveShow;
