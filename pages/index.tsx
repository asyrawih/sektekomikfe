import Head from "next/head";
import React from "react";
import Layout from "../base/layout";
import { Content } from "../dummy/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sektekomik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Content />
      </Layout>
    </>
  );
}
