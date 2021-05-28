import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navigation;
