import React from 'react';
import { Link } from 'react-router-dom';


const landingNav = () => (
  <nav className="nav-bar">
    <ul className="signin-signup">
      <li className="session-link">
        <Link to='/signin'>Log In</Link>
      </li>
      <li className="session-link">
        <Link to='/signup'>Create Account</Link>
      </li>
    </ul>
  </nav>
);

const sessionFormNav = () => (
  <nav className="signin-login">
    <Link to='/signin'>Sign In</Link> | <Link to='/signup'>Sign Up</Link>
  </nav>
);

// const AuthNavbar = (argument) => {
//   console.log(argument);
//   console.log({pageType});
//   let pageType = argument.pageType;
//   return ( pageType === "" ? landingNav : sessionFormNav );
// };


const Navbar = ({ pageType }) => (
(pageType === ('signin' || 'signup')) ? sessionFormNav() : landingNav()
);

export default Navbar;
