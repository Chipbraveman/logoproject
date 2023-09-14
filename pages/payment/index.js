import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Payment from "../../components/Payment/Payment";
import { Helmet } from "react-helmet";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>payment</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <Payment />
      <Footer />
    </>
  );
};

export default index;
