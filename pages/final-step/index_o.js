import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const sloganData = useSelector((state) => state.slogan);

  return (
    <>
      <Head>
        <title>final step</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <div id="wrapper" class="wrapper">
        <div
          class="step-wrapper step-6 step-7"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "#582094",
          }}
        >
          {" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/1.png"
            class="top-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-6/down.png"
            class="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-6/up.png"
            class="top-right-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form>
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Thank You {sloganData?.name}.
                      <br />
                      How Would You Like To Proceed?
                    </h1>
                    {/* <!--<h6 class="heading heading-h6 text-white letter-spacing-1">Just give us your name, email, contact number and <br>confirm the order to witness the awesomeness.</h6>--> */}
                  </div>
                  <div class="row plr-7">
                    <div class="col-lg-3">
                      <div class="single-final single-final-stepsss">
                        {" "}
                        <img
                          src="https://www.logura.com/assets/img/steps/step-6/live-chat.jpg"
                          alt=""
                        />
                        <div class="single-final-text">
                          <h4>Live Chat Support</h4>
                          <p>
                            Let's Talk! Share your design requirements with one
                            of our designers to get a perfect logo that you
                            envisioned for
                          </p>
                          <div class="single-final-link">
                            {" "}
                            <a href="javascript:void(Tawk_API.toggle())">
                              Lets Chat
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="single-final single-final-stepsss">
                        {" "}
                        <img
                          src="https://www.logura.com/assets/img/steps/step-6/pricing.jpeg"
                          alt=""
                        />
                        <div class="single-final-text">
                          <h4>Pricing Packages</h4>
                          <p>
                            Checkout our budget friendly packages & pricing
                            plans tailor made for startups & growing businesses
                            of all sizes
                          </p>
                          <div
                            class="single-final-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/pricing");
                            }}
                          >
                            {" "}
                            <a>View Pricing</a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="single-final single-final-stepsss">
                        {" "}
                        <img
                          src="https://www.logura.com/assets/img/steps/step-6/about-us.jpg"
                          alt=""
                        />
                        <div class="single-final-text">
                          <h4>About Us</h4>
                          <p>
                            We are a team of talented & creative individuals,
                            who bring forth their expertise to provide smart
                            business solutions
                          </p>
                          <div
                            class="single-final-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/about-us");
                            }}
                          >
                            {" "}
                            <a>Read More</a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="single-final single-final-stepsss">
                        {" "}
                        <img
                          src="https://www.logura.com/assets/img/steps/step-6/portfolio.jpg"
                          alt=""
                        />
                        <div class="single-final-text">
                          <h4>Creative Portfolio</h4>
                          <p>
                            Checkout our amazing logo projects that we have
                            designed for our recent customers to give their
                            brand an identity
                          </p>
                          <div
                            class="single-final-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/portfolio");
                            }}
                          >
                            {" "}
                            <a
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              Visit Portfolio
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
