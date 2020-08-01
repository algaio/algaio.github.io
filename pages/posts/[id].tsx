import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import { getAllPostIds, getPost } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import * as PostTypes from "../../types/posts";

export default function Post({ Post }: { Post: PostTypes.Post }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{Post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{Post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={Post.date} />
        </div>
        {Post.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: Post.contentHtml }} />
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
