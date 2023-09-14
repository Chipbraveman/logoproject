import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Workflow from "../../components/Workflow/Workflow";
import BannerImg from "../../assets/img/logo-branding-banner-img.png";
import { Helmet } from "react-helmet";

import Head from "next/head";

import brand1 from "../../assets/img/logo-branding-page-1.jpg";
import brand2 from "../../assets/img/logo-branding-page-2.jpg";
import brand3 from "../../assets/img/logo-branding-page-3.jpg";
import brand4 from "../../assets/img/logo-branding-page-4.jpg";

import logo1 from "../../assets/img/logo-branding-photography.jpg";
import logo2 from "../../assets/img/logo-portfolio-2.png";
import logo3 from "../../assets/img/logo-portfolio-3.png";
import logo4 from "../../assets/img/logo-portfolio-4.png";
import logo5 from "../../assets/img/logo-portfolio-5.png";
import logo6 from "../../assets/img/logo-portfolio-6.png";
import logo7 from "../../assets/img/logo-portfolio-7.png";
import logo8 from "../../assets/img/logo-portfolio-8.png";
import logo9 from "../../assets/img/logo-portfolio-9.png";
import logo10 from "../../assets/img/logo-portfolio-10.png";

import Portfolio1 from "../../assets/img/branding-portfolio-1.jpg";
import Portfolio2 from "../../assets/img/branding-portfolio-2.jpg";
import Portfolio3 from "../../assets/img/branding-portfolio-3.jpg";
import Portfolio4 from "../../assets/img/branding-portfolio-4.jpg";
import Portfolio5 from "../../assets/img/branding-portfolio-5.jpg";
import Portfolio6 from "../../assets/img/branding-portfolio-6.jpg";
import Portfolio7 from "../../assets/img/branding-portfolio-7.jpg";
import Portfolio8 from "../../assets/img/branding-portfolio-8.jpg";
import Portfolio9 from "../../assets/img/branding-portfolio-9.jpg";
import Portfolio10 from "../../assets/img/branding-portfolio-10.jpg";

import planlogo1 from "../../assets/img/icons/Basic.png";
import planlogo2 from "../../assets/img/icons/Standard.png";
import planlogo3 from "../../assets/img/icons/Prime.png";
import planlogo4 from "../../assets/img/icons/Deluxe.png";

import { FaCheck } from "react-icons/fa";
import { CheckLg } from "react-bootstrap-icons";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "object") {
      let home = document.querySelector(".logo-section");
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
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>logo branding</title>
        <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}
      <Head>
        <title>
          Every firm requires a unique logo. We create Wordmark, Abstract,
          Illustrative, and Emblem Logos with the utmost expertise.
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header
        style={{
          zIndex: "9999 !important",
        }}
      />
      <div className="logo-section rvbody">
        <div id="wrapper" className="wrapper">
          <div
          // className="rvbody"
          // className="logo-section"
          // style={{
          //   backgroundColor: "#ff9e00",
          // }}
          >
            <main class="page-content">
              <div
                class="revolution-slider-area slider-bg-1 slider-bg-2 rslide"
                // data-background="#fe882b"
                style={{
                  background:
                    "url(https://ik.imagekit.io/Logura/banner/slider-14_adqdwDRAJCT.png)",
                }}
              >
                <div class="revolution-slider logo-branding">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="logo-branding-img logo-branding-banner-img">
                          <div id="mega-packg">
                            {" "}
                            <img
                              class="parallax-layer"
                              src={BannerImg.src}
                              alt=""
                            />{" "}
                          </div>
                        </div>
                        <div class="inner pt--200 pb--210">
                          <h1 class="heading heading-h1 text-white font-120">
                            Beautiful Pixels in <br /> Logo Designs
                          </h1>
                          <div class="bkseparator--15"></div>
                          <h2 class="heading heading-h6 text-white letter-spacing-1 line-height-1-5 typewriter">
                            Consider our custom business branding for <br />{" "}
                            startups in the United States and logo design <br />{" "}
                            services, which are made with professional <br />{" "}
                            touches, the appropriate tone, and <br />{" "}
                            personalized inventiveness.{" "}
                          </h2>
                          <div class="slider-list">
                            <ul>
                              <li>
                                {/* <i class="fa fa-check"></i>{" "} */}
                                <FaCheck />
                                &nbsp;&nbsp;One-of-a-kind color combination
                              </li>
                              <li>
                                <FaCheck /> &nbsp;&nbsp;Logo designs that are
                                inspiring
                              </li>
                              <li>
                                <FaCheck /> &nbsp;&nbsp;Plans with reasonable
                                pricing
                              </li>
                            </ul>
                            <div class="view-portfolio-about inner-p">
                              {" "}
                              <a
                                class="cta"
                                onClick={(e) => {
                                  e.preventDefault();
                                  router.push("/slogan");
                                }}
                              >
                                Get A Custom Logo
                              </a>{" "}
                            </div>
                          </div>
                          <div
                            class="banner-carousel owl-carousel"
                            style={{ display: "none" }}
                          >
                            <div class="item">
                              {" "}
                              <img src="../../../assets/img/trusted-company.png" />
                            </div>
                            <div class="item">
                              {" "}
                              <img src="../../../assets/img/google-partner.png" />
                            </div>
                            <div class="item">
                              {" "}
                              <img src="../../../assets/img/bing-ads.png" />
                            </div>
                            <div class="item">
                              {" "}
                              <img src="../../../assets/img/clutch.png" />
                            </div>
                            <div class="item">
                              {" "}
                              <img src="../../../assets/img/top-digital-agency.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--<div class="brook-portfolio-area pb--150 rslide branding-banner-img-onmobile" data-background="#3f1084"> <div class="container"> <div class="row"> <div class="col-lg-12"> <div class="logo-branding-img"> <div id="mega-packg"> <img class="parallax-layer parallax-layer1" src="https://www.logura.com/assets/img/logo-branding/mega-package-img1.png" alt="layer1"> <img class="parallax-layer parallax-layer2" src="https://www.logura.com/assets/img/logo-branding/mega-package-img.png" alt="layer2"> <img class="parallax-layer parallax-layer3" src="https://www.logura.com/assets/img/logo-branding/mega-package-img2.png" alt="layer3"> </div> </div> </div> </div> </div> </div>--> */}
              {/* <!-- Image display on mobile --> */}
              <div
                class="brook-portfolio-area pt--60 rslide"
                // data-background="#fea300"
                id="logo-type"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="brook-section-title mb--20 text-center">
                        <h2 class="heading-title text-white">LOGO TYPE</h2>
                        <h1 class="heading heading-h3 text-white">
                          The team of Master <br />
                          Artists At Logo Design
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          Every firm requires a unique logo. We create Wordmark,
                          Abstract, Illustrative, and Emblem Logos with the
                          utmost expertise.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="row mb--35">
                    <div class="col-12">
                      <p class="text-white mb--10 desc">
                        We've worked with the industry's top companies and are
                        passionate about fostering innovation in the digital
                        realm. Understand that a good logo design influences
                        your client's perception of your company. Our logo
                        design artists and brand strategists understand the
                        importance of a company's colors, tone, and visual
                        identity. We are recognized for our flawless logo
                        designs, which result from extensive study combined with
                        years of expertise.
                      </p>
                      <p class="text-white mb--10 desc">
                        Our expertise is in company branding, and our reputation
                        is in beautiful design. We've been constructing
                        companies from the ground up, and mastering the logo
                        design game is the first step toward design brilliance.
                        Please leave all of your design needs to us and prepare
                        to be amazed at how fantastic the design looks.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="logo-type-tabs">
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#word-mark-tab"
                            >
                              {" "}
                              Word Mark Logo{" "}
                            </a>{" "}
                          </li>
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#abstract-tab"
                            >
                              {" "}
                              Abstract Logo{" "}
                            </a>{" "}
                          </li>
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#illustrative-tab"
                            >
                              {" "}
                              Illustrative Logo{" "}
                            </a>{" "}
                          </li>
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#emblem-tab"
                            >
                              Emblem Logo{" "}
                            </a>{" "}
                          </li>
                        </ul>
                        <div class="tab-content tab-heading">
                          <div
                            id="word-mark-tab"
                            class="tab-pane animated fadeIn active"
                          >
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <div class="brook-section-title mb--15">
                                  <h1 class="heading heading-h3 text-white">
                                    Word Mark Logo
                                  </h1>
                                  <h6 class="heading heading-h6 text-white letter-spacing-1">
                                    Font-based logos that reflect your company
                                  </h6>
                                </div>
                                <p class="text-white mb--10">
                                  Word Mark logo is all you need if you require
                                  wordmark logo design services in the United
                                  States to have your firm noticed by a
                                  distinctive typeface in your logo. It makes
                                  your company's name memorable, simple to
                                  remember, and snappy. An attractive
                                  typographic element serves as the foundation
                                  of the Word Mark logo. Because your company's
                                  name will be the center of attention, the font
                                  should be chosen after much thought, whether
                                  it be hefty, curved, edged, or thin.
                                </p>
                                <div class="mt--20">
                                  {" "}
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      router.push("/slogan");
                                    }}
                                    class="border-btn cta"
                                  >
                                    Get A Custom Logo
                                  </a>{" "}
                                  <a
                                    href="javascript:void(Tawk_API.toggle())"
                                    class="no-border-btn"
                                  >
                                    <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                    Discuss My Type
                                  </a>{" "}
                                </div>
                              </div>
                              <div class="col-md-6 pt--60">
                                {" "}
                                <img src={brand1.src} />
                              </div>
                            </div>
                          </div>
                          <div
                            id="abstract-tab"
                            class="tab-pane animated fadeIn"
                          >
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <div class="brook-section-title mb--15">
                                  <h1 class="heading heading-h3 text-white">
                                    Abstract Logo
                                  </h1>
                                  <h6 class="heading heading-h6 text-white letter-spacing-1">
                                    Logos based on your registered graphical
                                    signs
                                  </h6>
                                </div>
                                <p class="text-white mb--10">
                                  Abstract logos are ideal for firms who want to
                                  be recognized for their pictorial sign or any
                                  other picture form. Abstract logos are
                                  suitable for associating your business with a
                                  symbol. The fundamentals of abstract logos are
                                  determined by the gesture, character, or
                                  picture chosen per the logic and concepts of a
                                  brand. They are chosen based on the correct
                                  perception of the business topic, industry
                                  conventions, and, most crucially, the notion
                                  of representing a brand with its core
                                  thinking.
                                </p>
                                <div class="mt--20">
                                  {" "}
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      router.push("/slogan");
                                    }}
                                    class="border-btn cta"
                                  >
                                    Get A Custom Logo
                                  </a>{" "}
                                  <a
                                    href="javascript:void(Tawk_API.toggle())"
                                    class="no-border-btn"
                                  >
                                    <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                    Discuss My Type
                                  </a>{" "}
                                </div>
                              </div>
                              <div class="col-md-6 pt--60">
                                {" "}
                                <img src={brand2.src} />
                              </div>
                            </div>
                          </div>
                          <div
                            id="illustrative-tab"
                            class="tab-pane animated fadeIn"
                          >
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <div class="brook-section-title mb--15">
                                  <h1 class="heading heading-h3 text-white">
                                    Illustrative Logo
                                  </h1>
                                  <h6 class="heading heading-h6 text-white letter-spacing-1">
                                    Logos with illustrative mascots
                                  </h6>
                                </div>
                                <p class="text-white mb--10">
                                  We have created various illustrated logo
                                  designs for US businesses. Illustrative logos
                                  are the way to go when it comes to developing
                                  a character for your brand or designing a logo
                                  that leads the way for brand storytelling.
                                  They might be amusing, aggressive, or simply
                                  an essential mascot, but they are a great tool
                                  to humanize your service or product.
                                  Considering the current marketing approach,
                                  illustrative logos tend to be the most
                                  effective in establishing a unique brand
                                  identity.
                                </p>
                                <div class="mt--20">
                                  {" "}
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      router.push("/slogan");
                                    }}
                                    class="border-btn cta"
                                  >
                                    Get A Custom Logo
                                  </a>{" "}
                                  <a
                                    href="javascript:void(Tawk_API.toggle())"
                                    class="no-border-btn"
                                  >
                                    <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                    Discuss My Type
                                  </a>{" "}
                                </div>
                              </div>
                              <div class="col-md-6 pt--60">
                                {" "}
                                <img src={brand3.src} />
                              </div>
                            </div>
                          </div>
                          <div id="emblem-tab" class="tab-pane animated fadeIn">
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <div class="brook-section-title mb--15">
                                  <h1 class="heading heading-h3 text-white">
                                    Emblem Logo
                                  </h1>
                                  <h6 class="heading heading-h6 text-white letter-spacing-1">
                                    Logos combined with typefaces and pictures
                                  </h6>
                                </div>
                                <p class="text-white mb--10">
                                  Consider monograms, team slogans, cultural
                                  representation, brand building, and
                                  localization. Emblem logos easily dominate all
                                  of the aforementioned categories. They are
                                  sure to leave an impression and are commonly
                                  employed in government institutions, the car
                                  sector, schools, etc. Emblem logos can be
                                  updated or crocheted with a vintage touch.
                                  They are extremely thorough, carefully
                                  constructed, and formatted per the business's
                                  versatility.
                                </p>
                                <div class="mt--20">
                                  {" "}
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      router.push("/slogan");
                                    }}
                                    class="border-btn cta"
                                  >
                                    Get A Custom Logo
                                  </a>{" "}
                                  <a
                                    href="javascript:void(Tawk_API.toggle())"
                                    class="no-border-btn"
                                  >
                                    <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                    Discuss My Type
                                  </a>{" "}
                                </div>
                              </div>
                              <div class="col-md-6 pt--60">
                                {" "}
                                <img src={brand4.src} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="brook-about-area pt--60 rslide bg-shape"
                // data-background="#fa8fa0"
                id="portfolio"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="about-content text-center">
                        <h2 class="heading-title text-white">Portfolio</h2>
                        <h1 class="heading heading-h3 text-white">
                          Brilliantly Carved Logo Designs
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          We've been making wonderfully carved logo designs for
                          over a decade, and we do it with pure ingenuity when
                          it comes to boosting a brand.
                        </h6>
                      </div>
                      {/* <!-- <div class="max-width--40-per view-portfolio-about"> <a href="portfolio.html">Explore More In Our Portfolio</a> </div> --> */}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="portfolio-2-tabs">
                      <ul class="nav nav-tabs">
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#logo-design-tab"
                          >
                            {" "}
                            Logo Design{" "}
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#branding-tab"
                          >
                            Branding{" "}
                          </a>{" "}
                        </li>
                      </ul>
                      <div class="tab-content portfolio-sec">
                        <div
                          id="logo-design-tab"
                          class="tab-pane animated fadeIn active"
                        >
                          <br />
                          <ul>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo1.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo2.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo3.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo4.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo5.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo6.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo7.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo8.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo9.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={logo10.src} />
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                        <div id="branding-tab" class="tab-pane animated fadeIn">
                          <br />
                          <ul>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio1.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio2.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio3.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio4.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio5.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio6.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio7.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio8.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio9.src} />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a data-fancybox="images">
                                {" "}
                                <img src={Portfolio10.src} />
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="testimonial-carousel">
                        <div class="testimonial-stars">
                          {" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i>{" "}
                        </div>
                        <p>
                          <i>
                            Folks think we're rad. We're rated 4.8/5 from 100+
                            customer reviews.
                          </i>
                        </p>
                      </div>
                      <div class="view-portfolio-about">
                        {" "}
                        <a class="cta" routerLink="/portfolio">
                          Explore More Here
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="brook-portfolio-area pt--60 pb--60 rslide"
                // data-background="#ef9d45"
                id="pricing"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="brook-section-title mb--45 text-center">
                        <h2 class="heading-title text-white">Pricing</h2>
                        <h1 class="heading heading-h3 text-white">
                          Stunning Logo, Branding
                          <br />
                          and Website Designs
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          We've been making wonderfully carved logo designs for
                          over a decade, and we do it
                          <br /> with pure ingenuity when it comes to boosting a
                          brand.{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="pricing-tabs">
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#logo-price-tab"
                            >
                              {" "}
                              Logo Design{" "}
                            </a>{" "}
                          </li>
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#branding-price-tab"
                            >
                              {" "}
                              Branding{" "}
                            </a>{" "}
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div
                            id="logo-price-tab"
                            class="tab-pane animated fadeIn active"
                          >
                            <br />
                            <div class="row mlr--7">
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$49</h2>
                                    <h1>Basic</h1> <img src={planlogo1.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>2 Logo Design Concepts</li>
                                      <li>By 1 Experienced Designer</li>
                                      <li>4 Free Revisions</li>
                                      <li>Dedicated Project Manager</li>
                                      <li>24 - 48 Hours Delivery</li>
                                    </ul>
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li>1 Finalized Logo</li>
                                      <li>100% Ownership</li>
                                      <li>No Print Ready .PDF File</li>
                                      <li>No Vector .EPS File</li>
                                      <li>No Editable Vector .AI File</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$99</h2>
                                    <h1>Standard</h1>{" "}
                                    <img src={planlogo2.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>4 Logo Design Concepts</li>
                                      <li>By 3 Experienced Designers</li>
                                      <li>8 Free Revisions</li>
                                      <li>Dedicated Project Manager</li>
                                      <li>24 - 48 Hours Delivery</li>
                                    </ul>
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li> 1 Finalized Logo</li>
                                      <li>100% Ownership</li>
                                      <li>Online . JPEG & .PNG Files</li>
                                      <li>Print Ready .PDF File</li>
                                      <li>No Vector .EPS File</li>
                                      <li>No Editable Vector .AI File</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$149</h2>
                                    <h1>Prime</h1> <img src={planlogo3.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>6 Logo Design Concepts</li>
                                      <li>By 5 Experienced Designers</li>
                                      <li>Unlimited Revisions</li>
                                      <li>Dedicated Project Manager</li>
                                      <li>24 - 48 Hours Delivery</li>
                                    </ul>
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li> Finalized Logo</li>
                                      <li>100% Ownership</li>
                                      <li>Online .JPEG & .PNG Files</li>
                                      <li>Print Ready .PDF Files</li>
                                      <li>Vector .EPS File</li>
                                      <li>No Editable Vector AI File</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$199</h2>
                                    <h1>Deluxe</h1> <img src={planlogo4.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>Unlimited Logo Concepts</li>
                                      <li>By 8 Experienced Designers</li>
                                      <li>Unlimited Revisions</li>
                                      <li>Dedicated Project Manager</li>
                                      <li>24 - 48 Hours Delivery</li>
                                    </ul>
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li>1 Finalized Logo</li>
                                      <li>100% Ownership</li>
                                      <li>Online .JPEG & .PNG Files</li>
                                      <li>Print Ready .PDF Files</li>
                                      <li>Vector .EPS File</li>
                                      <li>Editable Vector .AI File</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="branding-price-tab"
                            class="tab-pane animated fadeIn"
                          >
                            <br />
                            <div class="row mlr--7">
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$99</h2>
                                    <h1>Starter</h1> <img src={planlogo1.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>Business Card Design</li>
                                      <li>Letter head Design</li>
                                      <li>Envelope Design</li>
                                      <li>MS Word Letterhead</li>
                                      <li>Email Signature Design</li>
                                      <li>Invoice Design</li>
                                      <li>Facebook Banner Design</li>
                                      <li>Youtube Banner Design</li>
                                      <li>Twitter Banner Design</li>
                                      <li>Linkedin Banner Design</li>
                                      <li>Logo Watermark</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$139</h2>
                                    <h1>Essential</h1>{" "}
                                    <img src={planlogo2.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>Business Card Design</li>
                                      <li>Letter head Design</li>
                                      <li>Envelope Design</li>
                                      <li>MS Word Letterhead</li>
                                      <li>Email Signature Design</li>
                                      <li>Invoice Design</li>
                                      <li>Facebook Banner Design</li>
                                      <li>Youtube Banner Design</li>
                                      <li>Twitter Banner Design</li>
                                      <li>Linkedin Banner Design</li>
                                      <li>Logo Watermark</li>
                                      <li>Favicon Design</li>
                                      <li>Polo/T-Shirt Design</li>
                                      <li>Cap/Hat Design</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$249</h2>
                                    <h1>Professional</h1>{" "}
                                    <img src={planlogo3.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>Business Card Design</li>
                                      <li>Letter head Design</li>
                                      <li>Envelope Design</li>
                                      <li>MS Word Letterhead</li>
                                      <li>Email Signature Design</li>
                                      <li>Invoice Design</li>
                                      <li>Facebook Banner Design</li>
                                      <li>Youtube Banner Design</li>
                                      <li>Twitter Banner Design</li>
                                      <li>Linkedin Banner Design</li>
                                      <li>Logo Watermark</li>
                                      <li>Favicon Design</li>
                                      <li>Polo/T-Shirt Design</li>
                                      <li>Cap/Hat Design</li>
                                      <li>Bag Design</li>
                                      <li>Signage Design</li>
                                      <li>Flyer Design</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$299</h2>
                                    <h1>Corporate</h1>{" "}
                                    <img src={planlogo4.src} />
                                  </div>
                                  <div class="price-detail">
                                    <h5>Features</h5>
                                    <ul>
                                      <li>Business Card Design</li>
                                      <li>Letter head Design</li>
                                      <li>Envelope Design</li>
                                      <li>MS Word Letterhead</li>
                                      <li>Email Signature Design</li>
                                      <li>Invoice Design</li>
                                      <li>Facebook Banner Design</li>
                                      <li>Youtube Banner Design</li>
                                      <li>Twitter Banner Design</li>
                                      <li>Linkedin Banner Design</li>
                                      <li>Logo Watermark</li>
                                      <li>Favicon Design</li>
                                      <li>Polo/T-Shirt Design</li>
                                      <li>Cap/Hat Design</li>
                                      <li>Bag Design</li>
                                      <li>Signage Design</li>
                                      <li>Flyer Design</li>
                                      <li>Car Wrap/Vinyl Design</li>
                                      <li>PPT Design</li>
                                      <li>Magnet Design</li>
                                      <li>Door Sign Design</li>
                                      <li>Menu Design</li>
                                      <li>Mug/Cup Design</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payments");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="view-portfolio-about">
                          {" "}
                          <a
                            class="cta"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/pricing");
                            }}
                          >
                            Pocket - Plans
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Workflow />
      </div>
      <Footer />
    </>
  );
};

export default index;
