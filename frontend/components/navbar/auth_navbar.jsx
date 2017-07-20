import React from 'react';
import { Link } from 'react-router-dom';


const landingNav = () => (
  <nav className="nav-bar">
      <p className="nav-text">Here to join?</p>
      <Link className="session-link" to='/signup'>Create Account</Link>
      <Link className="session-link" to='/signin'>Log In</Link>
  </nav>
);

const sessionFormNav = (pageType) => (
  <nav className="session-nav-bar">
    <img className="nav-bar-logo"
      src="http://res.cloudinary.com/syriebianco/image/upload/v1500485614/logo_v3_black_df4fiv.png"
      alt="logo"/>
    <Link
      className="session-link"
      to={'/' + pageType}>{pageType === 'signin' ? 'Sign Up' : 'Sign In'}</Link>
  </nav>
);

// const AuthNavbar = (argument) => {
//   console.log(argument);
//   console.log({pageType});
//   let pageType = argument.pageType;
//   return ( pageType === "" ? landingNav : sessionFormNav );
// };


const Navbar = ({ pageType }) => (
(pageType === ('signin' || 'signup')) ? sessionFormNav(pageType) : landingNav()
);

export default Navbar;
