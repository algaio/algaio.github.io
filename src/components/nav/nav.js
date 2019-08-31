import React from 'react';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <Link to="/articles/">Articles</Link>
  </nav>
);

export default Nav;
