import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/about">
        About
      </NavLink>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
