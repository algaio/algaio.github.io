/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Segment from '../components/segment/segment';
import { content } from '../data/articlesContent.json';
import SEO from '../components/seo';

const Articles = ({ location }) => (
  <Layout {...location}>
    <SEO title="Articles" />
    <section>
      {content.map(segment => (
        <Segment data={segment} key={segment.id} />
      ))}
    </section>
  </Layout>
);

export default Articles;
