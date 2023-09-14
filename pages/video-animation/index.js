import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Workflow from "../../components/Workflow/Workflow";
import VideoAnimation from "../../components/VideoAnimation/VideoAnimation";
import { Helmet } from "react-helmet";
import Head from "next/head";

const index = () => {
  useEffect(() => {
    if (typeof window === "object") {
      let home = document.querySelector(".home-section");

      // console.log(scroll, "itemscroll");
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
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>video animation</title>
        <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}
      <Head>
        <title>
          Using vibrant animated videos to promote businesses and creating
          starry animations is our love, and it takes a lot of time streaks of
          drawing, and beats of pondering.
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div
        style={{ transition: "background 1s ease", backgroundColor: "#FE882B" }}
        className="home-section"
      >
        <Header
          style={{
            zIndex: "9999 !important",
          }}
        />
        <VideoAnimation />
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

export default index;
