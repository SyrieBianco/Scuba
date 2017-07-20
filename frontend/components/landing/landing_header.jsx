import React from 'react';
import { Link } from 'react-router-dom';



const LandingHeader = ({ currentUser, signout }) => (
    <ul className="signin-signup">
      <li className="session-link">
        <Link to='/signin'>Log In</Link>
    </li>
      <li className="session-link">
        <Link to='/signup'>Sign Up</Link>
    </li>
    </ul>
);

export default LandingHeader;
