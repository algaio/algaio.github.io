// Modules
import Head from "next/head";
// import Link from "next/link";

// Components
// import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import Segment from "../components/Segment";

// Data
import { getSortedSegments } from "../lib/segments";

// TS
import { Segments } from "../types/segments";
import { GetStaticProps } from "next";

// Styles
// import utilStyles from "../styles/utils.module.css";

export default function Blog({ allSegments }: { allSegments: Segments }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {allSegments.map((segment: any) => (
          <Segment {...segment} key={segment.id} />
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
  const allSegments = await getSortedSegments("blog");
  return {
    props: {
      allSegments,
    },
  };
};
