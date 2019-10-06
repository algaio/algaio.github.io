/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import queryString from 'query-string';
import Layout from '../components/layout/layout';
import Segment from '../components/segment/segment';
import { list } from '../data/articleList.json';
import SEO from '../components/seo';

const Article = ({ location }) => {
  const queryID = queryString.parse(location.search).id;
  return (
    <Layout {...location}>
      <SEO title="Article" />
      <section>
        {list
          .reduce((acc, element) => {
            if (element.id === queryID) {
              acc = element;
            }
            return acc;
          }, {})
          .content.map(segment => (
            <Segment data={segment} key={segment.id} />
          ))}
      </section>
    </Layout>
  );
};

export default Article;
