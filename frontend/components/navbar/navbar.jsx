import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <ul className="signin-signup">
    <li className="session-link">
      <Link to='/signin'>Sign In</Link>
  </li>
    <li className="session-link">
      <Link to='/signup'>Sign Up</Link>
  </li>
  </ul>
);

// const sessionFormHeader = () => (
//   <nav className="signin-login">
//     <Link to='/siginin'>Sign In</Link> | <Link to='/siginup'>Sign Up</Link>
//   </nav>
// );

const personalWelcome = (currentUser, signout) => (
      <hgroup className="header-group">
    <h2 className="header-message"> Welcome, {currentUser.username}!</h2>
    <button className="header-button" onClick={ signout }>Sign Out</button>
      </hgroup>
);

const Navbar = ({ currentUser, signout }) => (
  currentUser ? personalWelcome(currentUser, signout) : sessionLinks()
);

export default Navbar;
