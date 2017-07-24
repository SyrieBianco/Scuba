import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {


  render() {
    const signout = this.props.signout;
    return(
      <nav className="nav-bar">
        <div className="left-nav">
          <img className="nav-bar-logo"
            src="http://res.cloudinary.com/syriebianco/image/upload/v1500904176/scuba_blue_tight_rvx8r2.png"
            alt="logo"/>
          <div className="nav-links">
            <NavLink
              className="nav-link"
              to="/dives">Dive Log</NavLink>
            <NavLink
              className="nav-link"
              to="/routes">Dive Routes</NavLink>
            <NavLink
              className="nav-link"
              to="/dashboard">Dashboard</NavLink>
          </div>
        </div>
        <div className="right-nav">
        <button className="nav-logout" onClick={signout}>Logout</button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
