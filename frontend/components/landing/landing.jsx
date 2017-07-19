import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state
    //bindings
  }

// instance methods

  render() {
    return (
      <div className="landing-image">
        <img
          src="https://cloudinary.com/console/media_library#/dialog/image/upload/logo_v3_white_p3cvek"
          alt="logo"/>
      </div>
    );
  }

}

export default withRouter(SessionForm);
