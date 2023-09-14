import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import FooterNote from "../../components/FooterNote/FooterNote";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Redcar from "../../assets/img/redcar.jpg";
import Insta from "../../assets/img/insta-post.jpg";
import BrandImg from "../../assets/img/brand-img.jpg";
import VideoBlog from "../../assets/img/video-blog-post.jpg";
import { styled } from "@mui/system";
import Pricing from "../../components/Pricing/Pricing";
import Services from "../../components/Services/Services";
import Card from "../../components/Card/Card";

import { Helmet } from "react-helmet";
import Head from "next/head";

// Workflow
import Workflow from "../../components/Workflow/Workflow";
// portfolio
import Portfolio from "../../components/Portfolio/Portfolio";

export const CardWrapper = styled("div")({
  background: "#ffa81a",
});

const index = () => {
  useEffect(() => {
    if (typeof window === "object") {
      let home = document.querySelector(".home-section");
      console.log(home, "logo-section");

      console.log(scroll, "itemscroll");
      window.onscroll = function () {
        let scroll = window.scrollY;
        console.log(scroll, "scrollvalue");
        if (scroll > 50 && scroll < 1500) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 1500 && scroll < 3000) {
          home.style.backgroundColor = "#3f1084";
        } else if (scroll > 3000 && scroll < 4500) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 4500 && scroll < 5300) {
          home.style.backgroundColor = "#FE8800;";
        } else if (scroll > 5300 && scroll < 6100) {
          home.style.backgroundColor = "#FE88A0";
        } else if (scroll > 6100 && scroll < 6900) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 6900 && scroll < 7700) {
          home.style.backgroundColor = "#3f1084";
        } else if (scroll > 7700 && scroll < 8500) {
          home.style.backgroundColor = "#FE8800;";
        } else {
          home.style.backgroundColor = "#FE88A0";
        }
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Logo Designs Make a Statement Our creative artists bring value to your
          brand by producing beautiful logos imprinted in your target audience's
          minds.
        </title>
        <meta
          property="og:title"
          content="Logo Designs Make a Statement Our creative artists bring value to your
          brand by producing beautiful logos imprinted in your target audience's
          minds."
          key="title"
        />
        <link rel="icon" href="/public/images/favicon.ico" type="image/png" />
      </Head>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>
          Unleashing the Power of Exceptional Web Design for Your Online Success
        </title>
        {/* <link rel="icon" href="/static/apple-touch-icon.ico" type="image/png" /> */}
      {/* <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}{" "}
      <div
        style={{ transition: "background 1s ease", backgroundColor: "#FE882B" }}
        className="home-section"
      >
        <Header />
        <HeroSection />
        <Portfolio />
        <Services />
        <Pricing />
        <Workflow />
        <Card />
        <Footer />
      </div>
    </>
  );
};

// export default index;
export default index;
