/* eslint-disable no-unused-vars */
import React from 'react';
import Nav from '../nav/nav';
import SEO from '../seo';
import './layout.scss';

export default ({ children, pathname }) => (
  <main className="layout">
    <SEO title="Home" />
    <Nav pathname={pathname} />
    {children}
  </main>
);