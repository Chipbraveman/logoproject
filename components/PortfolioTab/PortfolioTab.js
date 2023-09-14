import React from "react";
import Img1 from "../../assets/img/HTML1.jpg";
import Img2 from "../../assets/img/HTML2.png";
import Img3 from "../../assets/img/HTML3.png";
import Img4 from "../../assets/img/HTML4.png";
import Img5 from "../../assets/img/HTML5.png";
import Img6 from "../../assets/img/HTML6.jpg";
import Img7 from "../../assets/img/HTML7.png";
import Img8 from "../../assets/img/web-development.png";
import { StarFill } from "react-bootstrap-icons";

// import Postfolio Images
import Image1 from "../../assets/img/portfolio/portfolio/1.jpg";
import Image2 from "../../assets/img/portfolio/portfolio/2.jpg";
import Image3 from "../../assets/img/portfolio/portfolio/3.jpg";
import Image4 from "../../assets/img/portfolio/portfolio/4.jpg";
import Image5 from "../../assets/img/portfolio/portfolio/5.jpg";
import Image6 from "../../assets/img/portfolio/portfolio/6.jpg";
import Image7 from "../../assets/img/portfolio/portfolio/7.jpg";
import Image8 from "../../assets/img/portfolio/portfolio/8.jpg";
import Image9 from "../../assets/img/portfolio/portfolio/9.jpg";
import Image10 from "../../assets/img/portfolio/portfolio/10.jpg";
import Image11 from "../../assets/img/portfolio/portfolio/11.jpg";
import Image12 from "../../assets/img/portfolio/portfolio/12.jpg";
import Image13 from "../../assets/img/portfolio/portfolio/13.jpg";
import Image14 from "../../assets/img/portfolio/portfolio/14.jpg";
import Image15 from "../../assets/img/portfolio/portfolio/15.jpg";
import Image16 from "../../assets/img/portfolio/portfolio/16.jpg";
import Image17 from "../../assets/img/portfolio/portfolio/17.jpg";
import Image18 from "../../assets/img/portfolio/portfolio/18.jpg";
import Image19 from "../../assets/img/portfolio/portfolio/19.jpg";
import Image20 from "../../assets/img/portfolio/portfolio/20.jpg";
import Image21 from "../../assets/img/portfolio/portfolio/21.jpg";
import Image22 from "../../assets/img/portfolio/portfolio/22.jpg";
import Image23 from "../../assets/img/portfolio/portfolio/23.jpg";
import Image24 from "../../assets/img/portfolio/portfolio/24.jpg";
import Image25 from "../../assets/img/portfolio/portfolio/25.jpg";
import Image26 from "../../assets/img/portfolio/portfolio/26.jpg";
import Image27 from "../../assets/img/portfolio/portfolio/28.jpg";
import Image28 from "../../assets/img/portfolio/portfolio/29.jpg";

const PortfolioTab = () => {
  return (
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
                Logo, Branding, Website Designs
                <br /> Carved With Brilliance
              </h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                We’ve been creating beautifully carved logo designs since a
                decade and when it comes <br />
                to uplifting a brand, we do it with sheer creativity.
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
                  Logo Design
                </a>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#cms-website-tab"
                >
                  Branding
                </a>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#e-com-website-tab"
                >
                  Website
                </a>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#portal-website-tab"
                >
                  Video Animation
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
                      <img src={Img1.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img2.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img3.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img4.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img5.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img6.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img src={Img7.src} />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Img8.src}
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
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image1.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image2.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image3.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image4.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image5.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image6.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image7.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
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
                      <img
                        src={Image9.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image10.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image11.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image12.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image13.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image14.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image15.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image16.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image17.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image18.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image19.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image20.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image21.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image22.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image23.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image24.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image25.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image26.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image27.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a data-fancybox="images">
                      {" "}
                      <img
                        src={Image28.src}
                        style={{ backgroundColor: "rgb(231, 231, 231" }}
                      />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div id="cms-website-tab" class="tab-pane animated fadeIn">
                <br />
                <ul>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img7.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/118.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img6.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/210.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img5.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/310.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img4.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/410.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img3.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/510.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img2.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/610.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src={Img1.src} /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/710.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img
                        src={Img8.src}
                        style={{ backgroundColor: "rgb(231, 231, 231)" }}
                      />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      {/* <img src="https://www.logura.com/assets/img/portfolio/website/9.jpg" /> */}
                      <img src="https://www.logura.com/uploads/portfolio/large_images/910.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/1010.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/119.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/122.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/132.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/142.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/152.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/162.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/172.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/182.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/192.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/202.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/212.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/221.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/231.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/241.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/251.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/261.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/271.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/281.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/291.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/301.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/312.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/331.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/341.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/large_images/210.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div id="e-com-website-tab" class="tab-pane animated fadeIn">
                <br />
                <ul>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/126.jpg" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/213.jpg" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/313.jpg" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/412.jpg" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/512.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/612.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/712.jpg" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/812.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/912.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/1012.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/1112.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/127.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/133.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/143.jpg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://www.logura.com/uploads/portfolio/153.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div id="portal-website-tab" class="tab-pane animated fadeIn">
                <br />
                <ul>
                  <li>
                    {/* <a>
                      <img
                        src={Img8.src}
                        style={{ backgroundColor: "rgb(231, 231, 231)" }}
                      />
                    </a> */}
                    <a>
                      <img
                        src="https://www.logura.com/uploads/portfolio/1.gif"
                        style={{ backgroundColor: "rgb(231, 231, 231)" }}
                      />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/2.gif" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/3.gif" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/4.gif" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/video10.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/video11.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/video12.jpg" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/13.gif" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/23.gif" />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <img src="https://www.logura.com/uploads/portfolio/33.gif" />
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
            <div class="testimonial-carousel" style={{ marginBottom: "60px" }}>
              <div class="testimonial-stars">
                <StarFill style={{ fontSize: "24px", color: "#faa709" }} />
                <StarFill style={{ fontSize: "24px", color: "#faa709" }} />
                <StarFill style={{ fontSize: "24px", color: "#faa709" }} />
                <StarFill style={{ fontSize: "24px", color: "#faa709" }} />
                <StarFill style={{ fontSize: "24px", color: "#faa709" }} />
              </div>
              <p>
                <i>
                  Folks think we're rad. We're rated 4.8/5 from 100+ customer
                  reviews.
                </i>
              </p>
            </div>
            {/* <div class="view-portfolio-about">
              {" "}
              <a class="cta" href="javascript:void(Tawk_API.toggle())">
                Discuss Now
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
