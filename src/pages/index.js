/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../components/layout/layout';
import Segment from '../components/segment/segment';
import { content } from '../data/indexContent.json';
import '../styles/__index.scss';

const IndexPage = ({location}) => (
  <Layout {...location}>
    <section>
      {content.map(segment => (
        <Segment data={segment} key={segment.id} />
      ))}
    </section>
  </Layout>
);

export default IndexPage;
