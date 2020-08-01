import { GetStaticProps } from "next";
import Head from "next/head";

// Components
import Segment from "../components/Segment";
import Layout, { siteTitle } from "../components/Layout";

// Data
import { getSortedSegments } from "../lib/segments";

// TS
import { Segments } from "../types/segments";

export default function Home({ allSegments }: { allSegments: Segments }) {
  return <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    {allSegments.map((segment) => (
      <Segment {...segment} key={segment.id} />
    ))}
  </Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const allSegments = await getSortedSegments("home");
  return {
    props: {
      allSegments,
    },
  };
};
