import Image from "next/image";
import logoslide1 from "../../assets/img/logo-slide (1).png";
import logoslide2 from "../../assets/img/logo-slide (11).png";
import logoslide3 from "../../assets/img/logo-slide (12).png";
import logoslide4 from "../../assets/img/logo-slide (4).png";
import logoslide5 from "../../assets/img/logo-slide (5).png";
import logoslide6 from "../../assets/img/logo-slide (6).png";
import logoslide7 from "../../assets/img/logo-slide (7).png";
import logoslide8 from "../../assets/img/logo-slide (8).png";
import logoslide9 from "../../assets/img/logo-slide (9).png";
import logoslide10 from "../../assets/img/logo-slide (10).png";
import Slider from "../Slider/Slider";
import { styled } from "@mui/system";

export const CardWrapper = styled("div")({
  marginTop: "64px",
});

import { StarFill } from "react-bootstrap-icons";
// import logoslide11 from "../../assets/img/logo-slide (1).png";
// import logoslide12 from "../../assets/img/logo-slide (1).png";
// const Images = [logoslide1, logoslide2, logoslide3, logoslide4, logoslide5];
const Images = [
  <img src={logoslide1.src} />,
  <img src={logoslide2.src} />,
  <img src={logoslide3.src} />,
  <img src={logoslide4.src} />,
  <img src={logoslide5.src} />,
];
const Itemss = [
  <img src={logoslide6.src} />,
  <img src={logoslide7.src} />,
  <img src={logoslide8.src} />,
  <img src={logoslide9.src} />,
  <img src={logoslide10.src} />,
];

const Portfolio = () => {
  return (
    <div
      class="brook-about-area pt--60 bg-shape"
      id="portfolio"
      // style={{ backgroundColor: "#ef9d45" }}
    >
      <div class="container home-banner-s2">
        <div class="row bg">
          <div class="col-lg-12">
            <div class="about-content text-center">
              <h2 class="heading-title text-white">Portfolio</h2>
              <h1 class="heading heading-h3 text-white rslide">
                Logo Designs Make a Statement
              </h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                Our creative artists bring value to your brand by producing
                beautiful logos <br />
                imprinted in your target audience's minds.
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row">
        <div class="col-md-12">
          <div class="tab-content portfolio-sec">
            <div id="logo-design-tab" class="tab-pane animated fadeIn active">
              <br />
              <ul>
                <li>
                  <a data-fancybox="images">
                    <img src={logoslide1.src} />
                  </a>{" "}
                </li>
                <li>
                  <a data-fancybox="images">
                    <img src={logoslide2.src} />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide3.src} />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a data-fancybox="images">
                    {" "}
                    <img
                      style={{ backgroundColor: "#000000" }}
                      src={logoslide4.src}
                    />
                  </a>{" "}
                </li>
                <li class="hhide">
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide5.src} />
                  </a>{" "}
                </li>
                <li class="hhide">
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide6.src} />
                  </a>{" "}
                </li>
                <li class="hhide">
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide7.src} />
                  </a>{" "}
                </li>
                <li class="hhide">
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide8.src} />
                  </a>{" "}
                </li>
                <li class="hhide">
                  {" "}
                  <a data-fancybox="images">
                    <img src={logoslide9.src} />
                  </a>{" "}
                </li>
                <li class="hhide">
                  <a data-fancybox="images">
                    <img src={logoslide10.src} />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <CardWrapper>
        <div>
          <Slider Images={Images} />
        </div>
        <div>
          <Slider Images={Itemss} />
        </div>
      </CardWrapper>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="testimonial-carousel">
              <div class="testimonial-stars">
                {" "}
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
            <div class="view-portfolio-about">
              {" "}
              <a class="cta" href="javascript:void(Tawk_API.toggle())">
                Discuss Now
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
