import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/Date";
import Segment from "../components/Segment";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPosts } from "../lib/posts";
import { Posts } from "../types/posts";
import { content } from "../data/indexContent.json";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPosts }: { allPosts: Posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
        
      </section> */}
      <section>
          {content.map((segment) => (
            <Segment data={segment} key={segment.id} />
          ))}
        </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Posts = getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
};
