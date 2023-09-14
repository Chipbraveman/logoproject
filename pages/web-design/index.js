import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Workflow from "../../components/Workflow/Workflow";
import HtmlBanner from "../../assets/img/Htmo.png";
import { Helmet } from "react-helmet";
import Head from "next/head";

import Image1 from "../../assets/img/HTML1.jpg";
import Image2 from "../../assets/img/HTML2.png";
import Image3 from "../../assets/img/HTML3.png";
import Image4 from "../../assets/img/HTML4.png";
import Image5 from "../../assets/img/HTML5.png";
import Image6 from "../../assets/img/HTML6.jpg";
import Image7 from "../../assets/img/HTML7.png";
import Image8 from "../../assets/img/web-development.png";
import { useRouter } from "next/router";

import {
  FaCog,
  FaImage,
  FaLaptopHouse,
  FaFileContract,
  FaLaptopCode,
  FaLaptop,
  FaWindowMaximize,
  FaBuilding,
  FaAddressCard,
  FaUserPlus,
  FaPencilRuler,
  FaBezierCurve,
  FaShareAlt,
  FaUserCog,
} from "react-icons/fa";

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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Unlock Your Business Potential: Pricing Packages, All-In-One Solution,
          Logo & Branding, Website Development, E-Commerce, Portal Site
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>web design</title>
        <link rel="icon" href="/static/apple-touch-icon.png" type="image/png" />
      </Helmet> */}
      <div
        style={{ transition: "background 1s ease", backgroundColor: "#FE882B" }}
        className="home-section"
      >
        <Header
          style={{
            zIndex: "9999 !important",
          }}
        />
        <div>
          <main class="page-content">
            <div
              class="revolution-slider-area slider-bg-1 slider-bg-2 rslide"
              // data-background="#3f1084"
              // data-background:"#ff9e00"
              style={{
                background:
                  "url(https://ik.imagekit.io/Logura/website-page/web-background_jRKezWDIpH.png) center bottom",
                backgroundSize: "cover",
              }}
            >
              <div class="revolution-slider logo-branding">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="web-branding-img logo-branding-banner-img">
                        <div
                          id="mega-packg"
                          style={{
                            width: "100%",
                            position: "relative",
                            zIndex: "1",
                          }}
                        >
                          <img
                            class="parallax-layer"
                            src="https://ik.imagekit.io/Logura/website-page/web-banner_j4bES7-0H.png"
                            alt=""
                          />{" "}
                        </div>
                      </div>
                      <div class="inner pt--200 pb--210">
                        <h1 class="heading heading-h1 text-white font-120">
                          Sharp Websites Driven
                          <br /> by Loud Marketing
                          <br /> Strategies
                        </h1>
                        <div class="bkseparator--15"></div>
                        <h2 class="heading heading-h6 text-white letter-spacing-1 line-height-1-5 typewriter">
                          Custom website design services are built a <br />{" "}
                          robust backend, a gorgeous front end,
                          <br /> traffic-driving branding techniques.
                        </h2>
                        <div class="slider-list">
                          <ul>
                            <li>
                              <i class="fa fa-check"></i> &nbsp;&nbsp;Beautiful
                              graphics
                            </li>
                            <li>
                              <i class="fa fa-check"></i>{" "}
                              &nbsp;&nbsp;High-security coding
                            </li>
                            <li>
                              <i class="fa fa-check"></i> &nbsp;&nbsp;Branding
                              services that outperform
                            </li>
                          </ul>
                          <div class="view-portfolio-about inner-p">
                            {" "}
                            <a style={{ color: "blueviolet" }} class="cta">
                              Develop My Website
                            </a>{" "}
                          </div>
                        </div>
                        <div
                          class="banner-carousel owl-carousel"
                          style={{ display: "none" }}
                        >
                          <div class="item">
                            {" "}
                            <img src="https://ik.imagekit.io/Logura/logo-branding-page/3_TjdUp_aBip.png" />
                          </div>
                          <div class="item">
                            {" "}
                            <img src="https://ik.imagekit.io/Logura/logo-branding-page/2_bopBJpP49.png" />
                          </div>
                          <div class="item">
                            {" "}
                            <img src="https://ik.imagekit.io/Logura/logo-branding-page/1_t2vfektIgW.png" />
                          </div>
                          <div class="item">
                            {" "}
                            <img src="https://ik.imagekit.io/Logura/logo-branding-page/5_fdBYfTjxub.png" />
                          </div>
                          <div class="item">
                            {" "}
                            <img src="https://ik.imagekit.io/Logura/logo-branding-page/4_s4z-LxjZBX.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="brook-portfolio-area pt--60 rslide"
              data-background="#ae2883"
              id="web-type"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="brook-section-title mb--20 text-center">
                      <h2 class="heading-title text-white">Website TYPE</h2>
                      <h1 class="heading heading-h3 text-white">
                        Web design and social <br /> media are at their peak
                      </h1>
                      <h6 class="heading heading-h6 text-white letter-spacing-1">
                        It will be overshadowed if a company does not have an
                        internet presence. Your company website requires skilled
                        coding, appealing designs, and efficient marketing to
                        grab the attention of your target audience.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="row mb--35">
                  <div class="col-12">
                    <p class="text-white mb--10 desc">
                      We are well-known for delivering websites driven by
                      traffic-hungry algorithms, thanks to our decades of
                      expertise and a skilled fleet of web developers and web
                      design strategists that understand out-of-the-box tactics
                      of modern-world web development. We understand how tough
                      it is to rise above the competition, yet we tend to
                      deliver the impossible. Whatever it is related to your
                      website, we ensure that everything that needs to be
                      addressed in your company website to help it rank higher
                      and faster on search engines.
                    </p>
                    <p class="text-white mb--10 desc">
                      Whether it's a professional blog, your company's website,
                      an e-commerce store, or a business portfolio website, seal
                      the deal with our expert web development and design
                      services that will increase your business leads and online
                      visibility.
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
                            HTML Website{" "}
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#abstract-tab"
                          >
                            CMS Website{" "}
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
                            E-Commerce Solutions{" "}
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#emblem-tab"
                          >
                            Business Websites{" "}
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
                                  HTML Website
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  HTML creation that makes a difference
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                Regardless of how unique pre-built templates
                                are, HTML websites outperform their competitors
                                regarding a customized website developed for
                                tailor-made technological feature-packed
                                specifications. After extensively researching
                                your company and its rivals, we create HTML
                                websites from the ground up. Our objective is to
                                make your HTML website stand out among your
                                competition. Therefore we build with the proper
                                flow, gorgeous style, and incredibly fascinating
                                features that meet all essential criteria. We
                                believe in developing HTML websites that appeal
                                to your target audience and produce the best
                                outcomes.
                              </p>
                              <div class="mt--20">
                                {/* <!--<a href="https://www.logura.com/brief/slogan?cname=" class="border-btn">Develop My Website</a>--> */}
                                <a
                                  href="javascript:void(Tawk_API.toggle())"
                                  class="no-border-btn cta"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Discuss My Type
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6 pt--15 web-tab-sec-img">
                              {" "}
                              <img src={HtmlBanner.src} />
                            </div>
                          </div>
                        </div>
                        <div id="abstract-tab" class="tab-pane animated fadeIn">
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              <div class="brook-section-title mb--15">
                                <h1 class="heading heading-h3 text-white">
                                  CMS Website
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  CMS advancement at its peak
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                Using a Material Management System, you can
                                manage and control all of your graphic and
                                textual content on your website (CMS). The most
                                astonishing thing about these websites is how
                                simple it is to modify the backend and front
                                end. CMS websites adapt quickly to changes and
                                are easy to administer even without technical
                                knowledge. Our CMS website development team has
                                firsthand knowledge of creating aesthetically
                                beautiful and highly innovative CMS websites
                                that effectively reflect your company. A
                                flawless combination of peculiar UX and
                                appealing UI.
                              </p>
                              <div class="mt--20">
                                {/* <!--<a href="https://www.logura.com/brief/slogan?cname=" class="border-btn">Develop My Website</a>--> */}
                                <a
                                  href="javascript:void(Tawk_API.toggle())"
                                  class="no-border-btn cta"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Discuss My Type
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6 pt--15 web-tab-sec-img">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/website-page/CMS-mockup_da4RIHm_h.png" />
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
                                  E-Commerce Solutions
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  With our streamlined e-commerce development,
                                  you can sell things faster
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                Your e-commerce store should be visually
                                appealing and up to date, with the newest
                                technology adequately integrated. At Design
                                Perfecto, we understand the science of creating
                                highly sellable e-commerce businesses with
                                secure payment methods, a solid backend, and a
                                website look to die for. Our e-commerce
                                professionals create niche-specific bespoke web
                                storefronts. This is why we have a reputation in
                                the market for providing insanely
                                high-performing e-commerce stores
                              </p>
                              <div class="mt--20">
                                {/* <!-- <a href="https://www.logura.com/brief/slogan?cname=" class="border-btn">Develop My Website</a>--> */}
                                <a
                                  href="javascript:void(Tawk_API.toggle())"
                                  class="no-border-btn cta"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Discuss My Type
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6 pt--15 web-tab-sec-img">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/website-page/ecommerce-website_6jVvYdIOj.png" />
                            </div>
                          </div>
                        </div>
                        <div id="emblem-tab" class="tab-pane animated fadeIn">
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              <div class="brook-section-title mb--15">
                                <h1 class="heading heading-h3 text-white">
                                  Business Websites
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  We develop business websites that are elegant
                                  and powerful
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                Business websites have no room for error since
                                they instantly convey everything about your
                                company. With our innovatively enabled company
                                website construction, you can keep it
                                attractive, accessible, organized, and
                                optimized. We create company websites with
                                stunning visual representation, an
                                industry-standard theme, a visible portfolio,
                                and more. Our team has been providing unexpected
                                outcomes, and our technologically savvy web
                                developers have made it all happen with
                                dedication.
                              </p>
                              <div class="mt--20">
                                {/* <!-- <a href="https://www.logura.com/brief/slogan?cname=" class="border-btn">Develop My Website</a>--> */}
                                <a
                                  href="javascript:void(Tawk_API.toggle())"
                                  class="no-border-btn cta"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Discuss My Type
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6 pt--15 web-tab-sec-img">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/website-page/portal-mockup_z422fjpm1l.png" />
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
              data-background="#f05874"
              id="portfolio"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="about-content text-center">
                      <h2 class="heading-title text-white">Portfolio</h2>
                      <h1 class="heading heading-h3 text-white">
                        Lead Focused Design
                        <br /> And Optimization
                      </h1>
                      <h6 class="heading heading-h6 text-white letter-spacing-1">
                        We precisely target your industry, market, and clients
                        to <br />
                        help you grow and achieve your primary goal.
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
                          href="#html-website-tab"
                        >
                          {" "}
                          HTML{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#cms-website-tab"
                        >
                          CMS{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#e-com-website-tab"
                        >
                          E-Commerce{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#portal-website-tab"
                        >
                          Portal{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <div class="tab-content portfolio-sec">
                      <div
                        id="html-website-tab"
                        class="tab-pane animated fadeIn active"
                      >
                        <br />
                        <ul>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image1.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image2.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image3.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image4.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image5.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image6.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src={Image7.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img
                                src={Image8.src}
                                style={{ backgroundColor: "rgb(231, 231, 231" }}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/website-page/html-portfolio/9_ZFudEGfXT.jpg" />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a data-fancybox="images">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/website-page/html-portfolio/10_pHPJAdFHGs.jpg" />
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div
                        id="cms-website-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <ul>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image7.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image6.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image5.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image4.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image3.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image2.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image1.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img
                                src={Image8.src}
                                style={{
                                  backgroundColor: "rgb(231, 231, 231)",
                                }}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/9.jpg" />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/10.jpg" />
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div
                        id="e-com-website-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <ul>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image2.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image7.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image6.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image1.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image3.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image5.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image4.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img
                                src={Image8.src}
                                style={{
                                  backgroundColor: "rgb(231, 231, 231)",
                                }}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/9.jpg" />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/10.jpg" />
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div
                        id="portal-website-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <ul>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img
                                src={Image8.src}
                                style={{
                                  backgroundColor: "rgb(231, 231, 231)",
                                }}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image3.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image2.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image1.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image5.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image4.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image6.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={Image7.src} />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/9.jpg" />
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src="https://www.logura.com/assets/img/portfolio/website/10.jpg" />
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
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="view-portfolio-about">
                      {" "}
                      <a class="cta" href="javascript:void(Tawk_API.toggle())">
                        Discuss Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="brook-portfolio-area pb--60 rslide"
              data-background="#ff5b51"
              id="web-package"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="brook-section-title mb--45 text-center">
                      <h2 class="heading-title text-white">Pricing</h2>
                      <h1 class="heading heading-h3 text-white">
                        Web Design And social media <br />
                        marketing are at their peak
                      </h1>
                      <h6 class="heading heading-h6 text-white letter-spacing-1">
                        Our web design pricing and combo packages are affordable
                        and customized to match your business goals with a
                        unique approach that maximizes your brand’s revenue.
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
                            href="#html-price-tab"
                            id="html-price-tab-link"
                          >
                            {" "}
                            HTML{" "}
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#cms-price-tab"
                            id="cms-price-tab-link"
                          >
                            {" "}
                            CMS{" "}
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#e-commerce-price-tab"
                            id="e-commerce-price-tab-link"
                          >
                            {" "}
                            E-Commerce
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#portal-price-tab"
                            id="portal-price-tab-link"
                          >
                            {" "}
                            Portal{" "}
                          </a>{" "}
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          id="html-price-tab"
                          class="tab-pane animated fadeIn active"
                        >
                          <br />
                          <div class="row justify-content-center mlr--7">
                            <div class="col-12 col-md-11">
                              <div class="single-picing single-picing-style">
                                <div class="row">
                                  <div class="col-12">
                                    <h2
                                      class="html-heading01 text-center"
                                      style={{ color: "#fff" }}
                                    >
                                      HTML Features
                                    </h2>
                                    <p class="html-heading html-heading2 text-center ">
                                      We offer a full range of HTML-related
                                      services such as design, development,
                                      integration, migration, and support.
                                    </p>
                                  </div>
                                  <div class="col-xl-3 mt-3">
                                    <div class="single-pricing-head ">
                                      {" "}
                                      <img
                                        src="https://www.logura.com/assets/img/pricing-icons/5.png"
                                        width="30%"
                                      />
                                      <h5 style={{ color: "#fff" }}>
                                        HMTL Website Package
                                      </h5>
                                      <h6 style={{ color: "#fff" }}>
                                        <sup style={{ color: "#fff" }}>$</sup>
                                        499
                                      </h6>
                                    </div>
                                    <div class="single-pricing-link">
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
                                      </a>
                                    </div>
                                  </div>
                                  <div class="col-xl-9">
                                    <div class="row">
                                      <div class="col-xl-4 col-md-6">
                                        <div class="single-pricing-body">
                                          <ul>
                                            <li>
                                              {/* <i class="fas fa-cog ca"></i> */}
                                              <i>
                                                <FaCog />
                                              </i>
                                              Product/Service Page
                                            </li>
                                            <li>
                                              {/* <i class="fas fa-image ca"></i> */}
                                              <i>
                                                <FaImage />
                                              </i>
                                              Portfolio/Gallery Page
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptopHouse />
                                              </i>
                                              5 Pages Static Website
                                            </li>
                                            <li>
                                              <i>
                                                <FaFileContract />
                                              </i>
                                              W3C Certified HTML
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptopCode />
                                              </i>
                                              JQuery Slider Banner
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptop />
                                              </i>
                                              Mobile Responsive Layout
                                            </li>
                                            <li>
                                              <i>
                                                <FaWindowMaximize />
                                              </i>
                                              Home Page Layout
                                            </li>
                                            <li>
                                              <i>
                                                <FaBuilding />
                                              </i>
                                              Company Profile Page
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-md-6">
                                        <div class="single-pricing-body single-pricing-body2">
                                          {/* <!--<h4>Logo Design</h4>--> */}
                                          <ul>
                                            <li>
                                              <i>
                                                <FaAddressCard />
                                              </i>
                                              Contact Us Page
                                            </li>
                                            <li>
                                              <i>
                                                <FaUserPlus />
                                              </i>
                                              Lead Inquiry Form
                                            </li>
                                            <li>
                                              <i>
                                                <FaPencilRuler />
                                              </i>
                                              Website Favicon Design
                                            </li>
                                            <li>
                                              <i>
                                                <FaImage />
                                              </i>{" "}
                                              5 Web Page Banners Design
                                            </li>
                                            <li>
                                              <i>
                                                <FaImage />
                                              </i>{" "}
                                              5 Royalty-Free Stock Images
                                            </li>
                                            <li>
                                              <i>
                                                <FaBezierCurve />
                                              </i>{" "}
                                              Advanced UI & Effects
                                            </li>
                                            <li>
                                              <i>
                                                <FaShareAlt />
                                              </i>
                                              Social Media Integrations
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-xl-3 col-md-6 text-center my-auto">
                                        <img
                                          src="https://www.logura.com/assets/img/pricing-icons/certificate_b1DwBy0XX.png"
                                          class="gurantee"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="cms-price-tab"
                          class="tab-pane animated fadeIn"
                        >
                          <br />
                          <div class="row justify-content-center mlr--7">
                            <div class="col-12 col-md-11">
                              <div class="single-picing single-picing-style">
                                <div class="row">
                                  <div class="col-12">
                                    <h2
                                      class="html-heading01 text-center"
                                      style={{ color: "#fff" }}
                                    >
                                      CMS Features
                                    </h2>
                                    <p class="html-heading html-heading2 text-center ">
                                      Manage and control all of your visual and
                                      textual content on your website via
                                      Content Management System (CMS).
                                    </p>
                                  </div>
                                  <div class="col-xl-3 mt-3">
                                    <div class="single-pricing-head ">
                                      {" "}
                                      <img
                                        src="https://www.logura.com/assets/img/pricing-icons/5.png"
                                        width="30%"
                                      />
                                      <h5 style={{ color: "#fff" }}>
                                        CMS Website Package
                                      </h5>
                                      <h6 style={{ color: "#fff" }}>
                                        <sup>$</sup>999
                                      </h6>
                                    </div>
                                    <div class="single-pricing-link">
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
                                      </a>
                                    </div>
                                  </div>
                                  <div class="col-xl-9">
                                    <div class="row">
                                      <div class="col-xl-4 col-md-6">
                                        <div class="single-pricing-body">
                                          <ul>
                                            <li>
                                              <i>
                                                <FaLaptopHouse />
                                              </i>
                                              5-10 Pages Custom Website
                                            </li>
                                            <li>
                                              <i>
                                                <FaUserCog />
                                              </i>
                                              CMS Admin Panel
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptopCode />
                                              </i>
                                              JQuery Slider Banner
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptop />
                                              </i>
                                              Mobile Responsive
                                            </li>
                                            <li>
                                              <i>
                                                <FaWindowMaximize />
                                              </i>
                                              Home Page Layout
                                            </li>
                                            <li>
                                              <i>
                                                <FaBuilding />
                                              </i>
                                              Company Profile Section
                                            </li>
                                            <li>
                                              <i>
                                                <FaCog />
                                              </i>{" "}
                                              Main Product/Service Page
                                            </li>
                                            <li>
                                              <i>
                                                <FaImage />
                                              </i>
                                              Portfolio/Gallery Section
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-md-6">
                                        <div class="single-pricing-body single-pricing-body2">
                                          <ul>
                                            <li>
                                              <i>
                                                <FaAddressCard />
                                              </i>
                                              Contact Us Section
                                            </li>
                                            <li>
                                              <i>
                                                <FaUserPlus />
                                              </i>
                                              Lead Inquiry Form
                                            </li>
                                            <li>
                                              <i>
                                                <FaPencilRuler />
                                              </i>
                                              Website Favicon Design
                                            </li>
                                            <li>
                                              <i>
                                                <FaLaptopCode />
                                              </i>
                                              12 Web Page Banners Design
                                            </li>
                                            <li>
                                              <i>
                                                <FaImage />
                                              </i>{" "}
                                              12 Royalty-Free Stock Images
                                            </li>
                                            <li>
                                              <i>
                                                <FaBezierCurve />
                                              </i>{" "}
                                              Advanced UI & Effects
                                            </li>
                                            <li>
                                              <i>
                                                <FaShareAlt />
                                              </i>
                                              Social Media Integrations
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-xl-3 col-md-6 text-center my-auto">
                                        <img
                                          src="https://www.logura.com/assets/img/pricing-icons/certificate_b1DwBy0XX.png"
                                          class="gurantee"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="e-commerce-price-tab"
                          class="tab-pane animated fadeIn"
                        >
                          <br />
                          <div class="row mlr--7">
                            <div class="col-md-3 plr-7">
                              <div class="single-pricing">
                                <div class="price-header">
                                  <h2>$1499</h2>
                                  <h1>Basic</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Upto 10 Products & Categories</li>
                                    <li>Product Attributes & Features</li>
                                    <li>General Product Search</li>
                                    <li>Shopping Cart Integration</li>
                                    <li>Single Payment Module</li>
                                    <li>CMS Admin Panel</li>
                                    <li>Order Management System</li>
                                    <li>Newsletter Subscription</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banners</li>
                                    <li>8 Web Page Banners Design</li>
                                    <li>8 Royalty Free Stock Images</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
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
                                  <h2>$2499</h2>
                                  <h1>Extended</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Upto 25 Products & Categories</li>
                                    <li>Product Attributes & Features</li>
                                    <li>Product Search</li>
                                    <li>Product Filtration</li>
                                    <li>Shopping Cart Integration</li>
                                    <li>Upto 2 Payment Modules</li>
                                    <li>CMS Admin Panel</li>
                                    <li>Order Management System</li>
                                    <li>Newsletter Subscription</li>
                                    <li>Website Blog Section</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banner</li>
                                    <li>12 Web Page Banners Design</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
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
                                  <h2>$3999</h2>
                                  <h1>Professional</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Upto 50 Products & Categories</li>
                                    <li>Product Attributes & Features</li>
                                    <li>Product Search & Filtration</li>
                                    <li>Product Reviews & Rating</li>
                                    <li>Product Favorites & Wishlist</li>
                                    <li>Spreadsheet Products Import</li>
                                    <li>Shopping Cart Integration</li>
                                    <li>Promo Code/Coupon Feature</li>
                                    <li>Upto 3 Payment Modules</li>
                                    <li>CMS Admin Panel</li>
                                    <li>Order Management System</li>
                                    <li>Inventory Management</li>
                                    <li>Order Shipment & Tracking</li>
                                    <li>User Signup & Login</li>
                                    <li>Personalized User Dashboard</li>
                                    <li>Newsletter Subscription</li>
                                    <li>Website Blog Section</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banner</li>
                                    <li>12 Web Page Banners Design</li>
                                    <li>12 Royalty Free Stock Images</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
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
                                  <h2>$5999</h2>
                                  <h1>Enterprise</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Upto 100 Products & Categories</li>
                                    <li>Product Attributes & Features</li>
                                    <li>Product Search & Filtration</li>
                                    <li>Product Reviews & Rating</li>
                                    <li>Product Favorites & Wishlist</li>
                                    <li>Spreadsheet Products Import</li>
                                    <li>Shopping Cart Integration</li>
                                    <li>Promo Code/Coupon Feature</li>
                                    <li>Spreadsheet Products Import</li>
                                    <li>Multiple Payment Modules</li>
                                    <li>CMS Admin Panel</li>
                                    <li>Order Management System</li>
                                    <li>Inventory Management</li>
                                    <li>Sales Reporting Feature</li>
                                    <li>Order Shipment & Tracking</li>
                                    <li>User Signup & Login</li>
                                    <li>Personalized User Dashboard</li>
                                    <li>Newsletter Subscription</li>
                                    <li>Website Blog Section</li>
                                    <li>Newsletter Subscription</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banner</li>
                                    <li>12 Web Page Banners Design</li>
                                    <li>12 Royalty Free Stock Images</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
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
                          id="portal-price-tab"
                          class="tab-pane animated fadeIn"
                        >
                          <br />
                          <div class="row mlr--7">
                            <div class="col-md-3 plr-7">
                              <div class="single-pricing">
                                <div class="price-header">
                                  <h2>Portal</h2>
                                  <h1>Product Based</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/8.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Unlimited Sellers</li>
                                    <li>Unlimited Selling Products</li>
                                    <li>Unlimited Categories/Industries</li>
                                    <li>Products Attributes & Features</li>
                                    <li>Products Search & Filtration</li>
                                    <li>Product Reviews & Rating</li>
                                    <li>Seller Reviews & Rating</li>
                                    <li>Seller Login & Dashboard</li>
                                    <li>Clients Login & Dashboard</li>
                                    <li>Shopping Cart Integration</li>
                                    <li>Promo Code/Coupon Feature</li>
                                    <li>Multiple Payment Options</li>
                                    <li>Seller Inventory Management</li>
                                    <li>Order Shipment & Tracking</li>
                                    <li>Newsletter Subscription</li>
                                    <li>Admin Control Panel</li>
                                    <li>Paid Advertising & Ads Placement</li>
                                    <li>Website Blog Section</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banners</li>
                                    <li>Web Page Banners Design</li>
                                    <li>Royalty Free Stock Images</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
                                    <li>3 Month LiveChat Agent</li>
                                  </ul>
                                </div>
                                <div class="price-link">
                                  {" "}
                                  <a
                                    class="theme-btn"
                                    href="javascript:void(Tawk_API.toggle())"
                                  >
                                    Discuss Now
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 plr-7">
                              <div class="single-pricing">
                                <div class="price-header">
                                  <h2>Portal</h2>
                                  <h1>Service Based</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/8.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Unlimited Providers</li>
                                    <li>Unlimited Service Offerings</li>
                                    <li>Unlimited Categories/Industries</li>
                                    <li>Services Attributes & Features</li>
                                    <li>Services Search & Filtration</li>
                                    <li>Service Reviews & Rating</li>
                                    <li>Provider Reviews & Rating</li>
                                    <li>Provider Login & Dashboard</li>
                                    <li>Clients Login & Dashboard</li>
                                    <li>Checkout Integration</li>
                                    <li>Promo Code/Coupon Feature</li>
                                    <li>Multiple Payment Options</li>
                                    <li>Order Status & Progress</li>
                                    <li>Newsletter Subscription</li>
                                    <li>Website Blog Section</li>
                                    <li>Admin Control Panel</li>
                                    <li>Paid Advertising & Ads Placement</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Lead Inquiry Form</li>
                                    <li>Website Favicon Design</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>JQuery Slider Banners</li>
                                    <li>Web Page Banners Design</li>
                                    <li>Royalty Free Stock Images</li>
                                    <li>Advance UI & Effects</li>
                                    <li>Social Media Integrations</li>
                                    {/* <!--<li>Business Domain Emails</li>--> */}
                                    <li>3 Month LiveChat Agent</li>
                                  </ul>
                                </div>
                                <div class="price-link">
                                  {" "}
                                  <a
                                    class="theme-btn"
                                    href="javascript:void(Tawk_API.toggle())"
                                  >
                                    Discuss Now
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 plr-7">
                              <div class="single-pricing">
                                <div class="price-header">
                                  <h2>Portal</h2>
                                  <h1>Networking Based</h1>{" "}
                                  <img src="https://www.logura.com/assets/img/pricing-icons/8.png" />
                                </div>
                                <div class="price-detail">
                                  <h5>Features</h5>
                                  <ul>
                                    <li>Unlimited Users</li>
                                    <li>Multiple User Profiles & Pages</li>
                                    <li>Unlimited Groups/Communities</li>
                                    <li>Users Login & Dashboard</li>
                                    <li>1-on-1 Chats & Messages</li>
                                    <li>Multiple Chat rooms</li>
                                    <li>User Connections & Invitations</li>
                                    <li>Users Networking Circle</li>
                                    <li>User Profile Banners & Pictures</li>
                                    <li>Users Posts & Interactions</li>
                                    <li>Users Staus Online/Offline</li>
                                    <li>Posts/Media Sharing & Tagging</li>
                                    <li>User Privacy Settings</li>
                                    <li>MySQL Database Creation</li>
                                    <li>Website Favicon Design</li>
                                    <li>Admin Control Panel</li>
                                    <li>Paid Advertising & Ads Placement</li>
                                    <li>Mobile Responsive Layout</li>
                                    <li>Advance UI & Effects</li>
                                    <li>i.e Job Portals</li>
                                    <li>i.e Social Networking Sites</li>
                                    <li>i.e Dating Portals</li>
                                  </ul>
                                </div>
                                <div class="price-link">
                                  {" "}
                                  <a
                                    class="theme-btn"
                                    href="javascript:void(Tawk_API.toggle())"
                                  >
                                    Discuss Now
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

export default index;
