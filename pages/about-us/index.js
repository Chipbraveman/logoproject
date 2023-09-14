import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Workflow from "../../components/Workflow/Workflow";
import AboutUs from "../../components/AboutUs/AboutUs";
import { Helmet } from "react-helmet";
import Head from "next/head";

const index = () => {
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>About us</title>
        <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}
      <Head>
        <title>A single goal unifies our purpose and vision</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div style={{ backgroundColor: "#fea300" }}>
        <Header
          style={{
            zIndex: "9999 !important",
          }}
        />
        <AboutUs />
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

// export default index;
export default index;
