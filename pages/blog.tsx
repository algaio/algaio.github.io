// Modules
import Head from "next/head";
import Link from "next/link";

// Components
import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import Segment from "../components/Segment";

// Data
import { getSortedPosts } from "../lib/posts";
import { content } from "../data/blogContent.json";

// TS
import { Posts } from "../types/posts";
import { GetStaticProps } from "next";

// Styles
import utilStyles from "../styles/utils.module.css";

export default function Blog({ allPosts }: { allPosts: Posts }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {content.map((segment: any) => (
          <Segment data={segment} key={segment.id} />
        ))}
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
