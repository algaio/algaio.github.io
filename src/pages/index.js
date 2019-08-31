/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../components/layout/layout';
import Segment from '../components/segment/segment';
import segmentsData from '../data/segments.json';
import '../styles/__index.scss';

const IndexPage = () => (
  <Layout>
    <section>
      {segmentsData.segments.map(segment => (
        <Segment data={segment} key={segment.id} />
      ))}
    </section>
  </Layout>
);

export default IndexPage;
