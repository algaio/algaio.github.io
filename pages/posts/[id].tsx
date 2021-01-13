import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import { getAllPostIds, getPost } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import Segment from "../../components/Segment";
import * as PostTypes from "../../types/posts";
import segmentStyles from "../../components/Segment/segment.module.css";

export default function Post({ Post }: { Post: PostTypes.Post }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{Post.title}</title>
      </Head>
      <article>
        <Segment type='postHeadline'>
          <h1>{Post.title}</h1>
          <Date dateString={Post.created} />
        </Segment>
        {Post.contentHtml && (
          <section
            className={segmentStyles.post}
            dangerouslySetInnerHTML={{ __html: Post.contentHtml }}
          />
        )}
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const Post = await getPost(params?.id!);
  return {
    props: {
      Post,
    },
  };
};
