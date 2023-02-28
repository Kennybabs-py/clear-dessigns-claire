import React from "react";
import Head from "next/head";

import { montserrat } from "@/utils/fonts";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Clear Designs by Claire</title>
        <meta name="description" content="Clear Designs By Claire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={montserrat.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
