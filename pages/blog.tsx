// Modules
import Head from "next/head";

// Components
import Layout, { siteTitle } from "../components/Layout";
import List from "../components/List";
import Segment from "../components/Segment";

// Data
import { getSortedPosts } from "../lib/posts";
import { getSortedSegments } from "../lib/segments";

// TS
import { Segments } from "../types/segments";
import { Posts } from "../types/posts";
import { GetStaticProps } from "next";

export default function Blog({
  segments,
  posts,
}: {
  segments: Segments;
  posts: Posts;
}) {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {segments.map((segment: any) => (
        <Segment {...segment} key={segment.id} />
      ))}
      <List list={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const segments = await getSortedSegments("blog");
  const posts = getSortedPosts();
  return {
    props: {
      segments,
      posts,
    },
  };
};
