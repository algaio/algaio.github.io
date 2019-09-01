/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = ({ pathname }) => (
  <nav className="nav">
    {pathname === '/articles/' ? (
      <Link to="/">Home</Link>
    ) : (
      <Link to="/articles/">Articles</Link>
    )}
  </nav>
);

export default Nav;
