import React from "react";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();
  return (
    <>
      <div id="wrapper" class="wrapper">
        <div
          class="rvbody"
          style={{
            backgroundColor: "#ff9e00",
          }}
        >
          <main class="page-content">
            <div
              class="revolution-slider-area slider-bg-1 slider-bg-2 rslide"
              data-background="#fe882b"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/Logura/about-page/cu-color_GDRiup-jtWW.png)",
                backgroundSize: "cover",
                backgroundPosition: " center bottom",
              }}
            >
              <div class="revolution-slider">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="inner pt--220 pb--230">
                        <div class="col-lg-7">
                          <h1 class="heading heading-h1 text-white font-120">
                            Master of Digital And Design
                          </h1>
                          <div class="bkseparator--15"></div>
                          <h2 class="heading heading-h6 text-white letter-spacing-1 line-height-1-5 typewriter">
                            A single goal unifies our purpose and vision: to
                            make your company proud. Since Design Perfecto's
                            foundation, our expert digital marketing
                            strategists, Content Rookies, Logo Artists, and Web
                            Development Gurus have stepped up the game of
                            digitizing companies.
                          </h2>
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
              class="brook-portfolio-area pb--60 pt--60 rslide"
              data-background="#fea300"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="brook-section-title mb--45 text-center">
                      <h2 class="heading-title text-white">Services</h2>
                      <h1 class="heading heading-h3 text-white">
                        Draw.Make Known.Convert.Keep
                      </h1>
                      <h6 class="heading heading-h6 text-white letter-spacing-1">
                        The four pillars that support our strategy and design
                        for digital branding. We market to slake your hunger for
                        ROI. We are experts in digital conversion and
                        optimization.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="service-tabs">
                      <div
                        class="tab-content tab-heading"
                        style={{ paddingTop: 0, marginTop: "-30px" }}
                      >
                        <div
                          id="logo-branding-tab"
                          class="tab-pane animated fadeIn active pb--30"
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
                                We delve into your industry design standards to
                                develop a logo design that exceeds your
                                expectations and becomes ingrained in your
                                client's minds.
                              </p>
                              <p class="text-white mb--10">
                                Yes, this is how we get your brand remembered.
                                Our creative logo designers and edge artists are
                                dedicated to delivering your company an identity
                                that sets the standard for your industry.
                              </p>
                              <p class="text-white mb--10">
                                We've been establishing brands for decades and
                                are recognized in the industry for providing
                                imaginative designs and campaigns that make your
                                digital design presence scream loud.
                              </p>
                              <div class="mt--20">
                                {" "}
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
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Live Chat
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/homepage-service/service-img-lb_NRVhbBg7AMcv.png" />
                            </div>
                          </div>
                        </div>
                        <div
                          id="web-tab"
                          class="tab-pane animated fadeIn active pb--30"
                        >
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/homepage-service/website02_f9w1YjHcK.png" />
                            </div>
                            <div class="col-md-6">
                              <div class="brook-section-title mb--15">
                                <h1 class="heading heading-h3 text-white">
                                  Smooth Web Development
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  Robust backend, lovely frontend - Excellent
                                  Website.
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                We design websites with passion and energy. Our
                                web development gurus seek top layouts,
                                attractive custom designs, and sturdy coding to
                                construct your business website on an unrivaled
                                level. Yes, we really mean it!
                              </p>
                              <p class="text-white mb--10">
                                Our objective is to create an impression on
                                everyone who checks in through a quick user
                                interface, gorgeous images, straightforward
                                design, or a rich user experience. With our
                                precise content positioning and eye-catching
                                design components, you can expect a higher
                                conversion and lower bounce rate.
                              </p>
                              <div class="mt--20">
                                {" "}
                                <a
                                  class="border-btn cta"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/slogan");
                                  }}
                                >
                                  Get My Website
                                </a>{" "}
                                <a
                                  class="no-border-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Live Chat
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="video-tab"
                          class="tab-pane animated fadeIn active pb--30"
                        >
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              <div class="brook-section-title mb--15">
                                <h1 class="heading heading-h3 text-white">
                                  Video Animation on the Spot
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  The brain works with visuals. - Our Mantra of
                                  Video Animation.
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                CSince our formation, we have been making
                                fascinating videos. Our idea for the video
                                animation service is spot on. We create to
                                communicate. Yes, we are the owners of our
                                language. Our animated movies transmit your
                                company's message in a matter of seconds, which
                                is why we are well-known in the video animation
                                market.
                              </p>
                              <p class="text-white mb--10">
                                We raise a glass to the ingenuity and garnish it
                                with valued hues. The result? Engaging,
                                engaging, and impressive movies are designed to
                                get the attention you require for your business.
                                Let's make a fantastic video for you.
                              </p>
                              <div class="mt--20">
                                {" "}
                                <a
                                  class="border-btn cta"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/slogan");
                                  }}
                                >
                                  Lets Get Started
                                </a>{" "}
                                <a
                                  class="no-border-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Live Chat
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/homepage-service/video_URVOqTdAvZ.png" />
                            </div>
                          </div>
                        </div>
                        <div
                          id="digital-tab"
                          class="tab-pane animated fadeIn active"
                        >
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              {" "}
                              <img src="https://ik.imagekit.io/Logura/homepage-service/dm3_Ls9jrVApkW0.png" />
                            </div>
                            <div class="col-md-6">
                              <div class="brook-section-title mb--15">
                                <h1 class="heading heading-h3 text-white">
                                  Making Digital Marketing Go Viral
                                </h1>
                                <h6 class="heading heading-h6 text-white letter-spacing-1">
                                  We guarantee that digital marketing will reach
                                  the correct people.
                                </h6>
                              </div>
                              <p class="text-white mb--10">
                                Our inspirational track record of enormously
                                influential digital marketing efforts is the
                                competition for us, but guess what? For every
                                other campaign, we outperformed it by a wide
                                margin. Pay-per-click, SEO optimization, social
                                media marketing, content marketing, and content
                                publication are all areas in which we specialize
                                and control our words.
                              </p>
                              <p class="text-white mb--10">
                                With the correct digital marketing methods, our
                                team of creative digital marketers can explode
                                your business. We will never let you down if you
                                trust us.
                              </p>
                              <div class="mt--20">
                                {" "}
                                <a
                                  class="border-btn cta"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/slogan");
                                  }}
                                >
                                  Lets Get Started
                                </a>{" "}
                                <a
                                  class="no-border-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  <i class="fas fa-comment-dots flip-mr-5"></i>{" "}
                                  Live Chat
                                </a>
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
      </div>
    </>
  );
};

export default AboutUs;
