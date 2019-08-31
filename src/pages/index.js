/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../components/layout/layout';
import Segment from '../components/segment/segment';
import { segments } from '../data/indexContent.json';
import '../styles/__index.scss';

const IndexPage = () => (
  <Layout>
    <section>
      {segments.map(segment => (
        <Segment data={segment} key={segment.id} />
      ))}
    </section>
  </Layout>
);

export default IndexPage;
