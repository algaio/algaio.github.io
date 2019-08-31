/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import Segment from '../components/segment/segment';
import SEO from '../components/seo';
import segmentsData from '../data/segments.json';
import '../styles/__index.scss';
import './index.scss';

const IndexPage = () => (
  <main className="app">
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
    <section>
      {segmentsData.segments.map(segment => (
        <Segment data={segment} key={segment.id} />
      ))}
    </section>
  </main>
);

export default IndexPage;
