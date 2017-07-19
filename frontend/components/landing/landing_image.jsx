import React from 'react';

class LandingImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-image">
        <img className="hero-logo"
          src="http://res.cloudinary.com/syriebianco/image/upload/v1500485614/logo_v3_white_p3cvek.png"
          alt="logo"/>
      </div>
    );
  }

}

export default LandingImage;
