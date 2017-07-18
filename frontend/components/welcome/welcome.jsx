import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <nav className="signin-login">
    <Link to='/signin'>Sign In</Link> | <Link to='/signup'>Sign Up</Link>
  </nav>
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

const Welcome = ({ currentUser, signout }) => (
  currentUser ? personalWelcome(currentUser, signout) : sessionLinks()
);

export default Welcome;
