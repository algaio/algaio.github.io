import { FunctionComponent } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Nav from "../Nav";

export const siteTitle = "Alan Ionita - Fullstack developer from Manchester 🇬🇧";

type LayoutProps = {
  home: boolean;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Learn how to build a personal website using Next.js'
      />
      {/* <meta
        property='og:image'
        // content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png`}
        content={`https://u0oikxk9t0.execute-api.eu-west-2.amazonaws.com/dev/${encodeURI(
          siteTitle
        )}.png`}
      /> */}
      <meta name='og:title' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <header className={styles.header}>
      {home && (
        <>
          <Nav>
            <Link href='/blog'>Blog</Link>
          </Nav>
        </>
      )}
      {!home && (
        <>
          <Nav>
            <Link href='/'>Home</Link>
          </Nav>
        </>
      )}
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
