import { GetStaticProps } from "next";
import Head from "next/head";
// import Link from "next/link";
// import Date from "../components/Date";
import Segment from "../components/Segment";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedSegments } from "../lib/segments";
import { Segments } from "../types/segments";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allSegments }: { allSegments: Segments }) {
  console.log("allSegments", allSegments);
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
        {allSegments.map((segment) => (
          <Segment {...segment} key={segment.id} />
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allSegments = await getSortedSegments("home");
  return {
    props: {
      allSegments,
    },
  };
};
