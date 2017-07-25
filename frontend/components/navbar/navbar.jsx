import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProtectedNavbarContainer from './protected_navbar_container';
import AuthNavbarContainer from './auth_navbar_container';

const Navbar = ({currentUser}) => (
currentUser ? <ProtectedNavbarContainer /> : <AuthNavbarContainer />
);

export default Navbar;
