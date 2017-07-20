import React from 'react';
import { Link } from 'react-router-dom';


const landingNav = () => (
  <nav className="nav-bar">
      <div className="dummy-div">.</div>
      <div className="center-div">
        <p className="nav-text">Here to join?</p>
        <Link className="create-account" to='/signup'>Create Account</Link>
        <div className="dummy-div">.</div>
      </div>
      <div><Link className="session-link" to='/signin'>Log In</Link></div>


  </nav>
);

const sessionFormNav = (pageType) => {
  const otherPage = pageType === 'signin' ? 'signup' : 'signin';
  const otherTitle = pageType === 'signin' ? 'Sign Up' : 'Sign In';

  return (
  <nav className="session-nav-bar">
    <div className="dummy-div">.</div>
    <img className="nav-bar-logo"
      src="http://res.cloudinary.com/syriebianco/image/upload/v1500485614/logo_v3_black_df4fiv.png"
      alt="logo"/>
    <Link
      className="session-link"
      to={'/' + otherPage}>{otherTitle}</Link>
    <div className="dummy-div">.</div>
  </nav>
);
};

// const AuthNavbar = (argument) => {
//   console.log(argument);
//   console.log({pageType});
//   let pageType = argument.pageType;
//   return ( pageType === "" ? landingNav : sessionFormNav );
// };


const Navbar = ({ pageType }) => (
(pageType === 'signin' || pageType === 'signup') ? sessionFormNav(pageType) : landingNav()
);

export default Navbar;
