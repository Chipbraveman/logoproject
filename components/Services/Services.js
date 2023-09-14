import Link from "next/link";
import React from "react";
import { styled } from "@mui/system";
import link1 from "../../assets/img/icons/Logo & branding.png";
import link2 from "../../assets/img/icons/Web Development.png";
import link3 from "../../assets/img/icons/Video Animation.png";
import link4 from "../../assets/img/icons/Digital Marketing.png";

import item1 from "../../assets/img/logo-branding-temp1.png";
import item2 from "../../assets/img/web-development.png";
import item3 from "../../assets/img/video-animation.jpg";
import item4 from "../../assets/img/digital-marketing.png";
import { useRouter } from "next/router";

// export const LinkWrapper = styled("a")({});

const Services = () => {
  const router = useRouter();
  return (
    <div
      class="brook-portfolio-area pt--60 rslide"
      data-background="#fea300"
      // style={{ backgroundColor: "#fea300" }}
      id="services"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title mb--45 text-center">
              <h2 class="heading-title text-white">Services</h2>
              <h1 class="heading heading-h3 text-white">
                Draw. Make Known.
                <br class="display-on-mob" />
                Convert.Keep
              </h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                The four pillars that support our strategy and design for
                digital branding. We market to slake your hunger for ROI. We are
                experts in digital conversion and optimization.
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="service-tabs">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link active"
                    href="#logo-branding-tab"
                    data-bs-toggle="tab"
                  >
                    <img
                      // src="../../assets/img/icons/Logo & branding.png"
                      src={link1.src}
                      class="white-icons"
                      loading="lazy"
                      alt="Logo branding icon"
                    />{" "}
                    <img
                      src={link1.src}
                      class="colorcustom pink-icons"
                      loading="lazy"
                      alt="Logo branding icon"
                    />
                    <div class="tab-name">Logo & Branding</div>
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="#web-tab"
                    passHref
                    data-bs-toggle="tab"
                  >
                    <img
                      // src="../../assets/img/icons/Web Development.png"
                      src={link2.src}
                      class="white-icons"
                      loading="lazy"
                      alt="Web Development icon"
                    />{" "}
                    <img
                      src={link2.src}
                      class="colorcustom pink-icons"
                      loading="lazy"
                      alt="Web Development icon"
                    />
                    <div class="tab-name">Web Development</div>
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#video-tab" data-bs-toggle="tab">
                    <img
                      src={link3.src}
                      class="white-icons"
                      loading="lazy"
                      alt="Video Animation icon"
                    />{" "}
                    <img
                      src={link3.src}
                      class="colorcustom pink-icons"
                      loading="lazy"
                      alt="Video Animation icon"
                    />
                    <div class="tab-name">Video Animation</div>
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#digital-tab" data-bs-toggle="tab">
                    <img
                      src={link4.src}
                      class="white-icons"
                      loading="lazy"
                      alt="Digital Marketing icon"
                    />
                    <img
                      src={link4.src}
                      class="colorcustom pink-icons"
                      loading="lazy"
                      alt="Digital Marketing icon"
                    />
                    <div class="tab-name">Digital Marketing</div>
                  </a>{" "}
                </li>
              </ul>
              <div class="tab-content tab-heading">
                <div
                  id="logo-branding-tab"
                  class="tab-pane animated fadeIn active"
                >
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="brook-section-title mb--15">
                        <h1 class="heading heading-h3 text-white">
                          Attract immediate attention to your company
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          Get your brand noticed at - First Sight.
                        </h6>
                      </div>
                      <p class="text-white mb--10">
                        We delve into your industry design standards to develop
                        a logo design that exceeds your expectations and becomes
                        ingrained in your client's minds.
                      </p>
                      <p class="text-white mb--10">
                        Yes, this is how we get your brand remembered. Our
                        creative logo designers and edge artists are dedicated
                        to delivering your company an identity that sets the
                        standard for your industry.
                      </p>
                      <p class="text-white mb--10">
                        We've been establishing brands for decades and are
                        recognized in the industry for providing imaginative
                        designs and campaigns that make your digital design
                        presence scream loud.
                      </p>
                      <div class="mt--20">
                        <a
                          class="border-btn cta"
                          onClick={(e) => {
                            e.preventDefault();
                            router.push("/slogan");
                          }}
                        >
                          Get A Custom Logo
                        </a>
                        <a
                          class="no-border-btn"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <i class="fas fa-comment-dots flip-mr-5"></i> Live
                          Chat
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <img
                        src={item1.src}
                        loading="lazy"
                        alt="Logo branding image"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div id="web-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="brook-section-title mb--15">
                        <h1 class="heading heading-h3 text-white">
                          Smooth Web Development
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          Robust backend, lovely frontend - Excellent Website.
                        </h6>
                      </div>
                      <p class="text-white mb--10">
                        We design websites with passion and energy. Our web
                        development gurus seek top layouts, attractive custom
                        designs, and sturdy coding to construct your business
                        website on an unrivaled level. Yes, we really mean it!
                      </p>
                      <p class="text-white mb--10">
                        Our objective is to create an impression on everyone who
                        checks in through a quick user interface, gorgeous
                        images, straightforward design, or a rich user
                        experience. With our precise content positioning and
                        eye-catching design components, you can expect a higher
                        conversion and lower bounce rate.
                      </p>
                      <div class="mt--20">
                        {/* <!--<a href="https://www.logura.com/brief/slogan?cname=" class="border-btn cta">Get My Website</a>--> */}
                        <a
                          class="border-btn cta"
                          onClick={(e) => {
                            e.preventDefault();
                            router.push("/web-design");
                          }}
                        >
                          Get My Website
                        </a>
                        <a
                          class="no-border-btn"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <i class="fas fa-comment-dots flip-mr-5"></i> Live
                          Chat
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <img
                        // src="../../assets/img/web-development.png"
                        src={item2.src}
                        loading="lazy"
                        alt="Web Development image"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div id="video-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="brook-section-title mb--15">
                        <h1 class="heading heading-h3 text-white">
                          Video Animation on the Spot
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          The brain works with visuals. - Our Mantra of Video
                          Animation.
                        </h6>
                      </div>
                      <p class="text-white mb--10">
                        CSince our formation, we have been making fascinating
                        videos. Our idea for the video animation service is spot
                        on. We create to communicate. Yes, we are the owners of
                        our language. Our animated movies transmit your
                        company's message in a matter of seconds, which is why
                        we are well-known in the video animation market.
                      </p>
                      <p class="text-white mb--10">
                        We raise a glass to the ingenuity and garnish it with
                        valued hues. The result? Engaging, engaging, and
                        impressive movies are designed to get the attention you
                        require for your business. Let's make a fantastic video
                        for you.
                      </p>
                      <div class="mt--20">
                        {/* <!--<a href="https://www.logura.com/brief/slogan?cname=" class="border-btn cta">Lets Get Started</a>--> */}
                        <a class="border-btn cta">Lets Get Started</a>{" "}
                        <a
                          class="no-border-btn"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <i class="fas fa-comment-dots flip-mr-5"></i> Live
                          Chat
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <img
                        src={item3.src}
                        loading="lazy"
                        alt="Video Animation image"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div id="digital-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="brook-section-title mb--15">
                        <h1 class="heading heading-h3 text-white">
                          Making Digital Marketing Go Viral
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          We guarantee that digital marketing will reach the
                          correct people.
                        </h6>
                      </div>
                      <p class="text-white mb--10">
                        Our inspirational track record of enormously influential
                        digital marketing efforts is the competition for us, but
                        guess what? For every other campaign, we outperformed it
                        by a wide margin. Pay-per-click, SEO optimization,
                        social media marketing, content marketing, and content
                        publication are all areas in which we specialize and
                        control our words.
                      </p>
                      <p class="text-white mb--10">
                        With the correct digital marketing methods, our team of
                        creative digital marketers can explode your business. We
                        will never let you down if you trust us.
                      </p>
                      <div class="mt--20">
                        <a
                          class="border-btn cta"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          Discuss Now
                        </a>
                        <a
                          class="no-border-btn"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <i class="fas fa-comment-dots flip-mr-5"></i> Live
                          Chat
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <img
                        src={item4.src}
                        loading="lazy"
                        alt="Digital Marketing image"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
