import React from "react";
import Header from "../../components/Header/Header";
import Workflow from "../../components/Workflow/Workflow";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import OurPortfolio from "../../components/OurPortfolio/OurPortfolio";
import PortfolioTab from "../../components/PortfolioTab/PortfolioTab";
import { Helmet } from "react-helmet";

import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Our Portfolio Speaks Louder Than Words.</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>portfolio</title>
        <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}
      <div
        style={{ transition: "background 1s ease", backgroundColor: "#FE882B" }}
        // className="home-section rvbody"
      >
        <Header />
        <OurPortfolio />
        <PortfolioTab />
        {/* <Workflow /> */}
        <Footer />
      </div>
    </>
  );
};

export default index;
