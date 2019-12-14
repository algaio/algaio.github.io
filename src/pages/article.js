/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "gatsby"
import queryString from "query-string"
import Layout from "../components/layout/layout"
import Segment from "../components/segment/segment"
import { list } from "../data/articleList.json"
import SEO from "../components/seo"

const Article = ({ location }) => {
  const queryID = queryString.parse(location.search).id
  const currentArticle = list.reduce((acc, element) => {
    if (element.id === queryID) {
      acc = element
    }
    return acc
  }, {})
  return (
    <Layout {...location}>
      <SEO title={currentArticle.title} />
      <section>
        {currentArticle &&
          currentArticle.content &&
          currentArticle.content.map(segment => (
            <Segment data={segment} key={segment.id} />
          ))}
      </section>
    </Layout>
  )
}

export default Article
