import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPickIndustry } from "../../redux/slogan/slogan.slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Head from "next/head";

import Image1 from "../../assets/img/industry/1.png";
import Image2 from "../../assets/img/industry/2.png";
import Image3 from "../../assets/img/industry/3.png";
import Image4 from "../../assets/img/industry/4.png";
import Image5 from "../../assets/img/industry/5.png";
import Image6 from "../../assets/img/industry/6.png";
import Image7 from "../../assets/img/industry/7.png";
import Image8 from "../../assets/img/industry/8.png";
import Image9 from "../../assets/img/industry/9.png";
import Image10 from "../../assets/img/industry/10.png";
import Image11 from "../../assets/img/industry/11.png";
import Image12 from "../../assets/img/industry/12.png";
import Image13 from "../../assets/img/industry/13.png";
import Image14 from "../../assets/img/industry/14.png";
import Image15 from "../../assets/img/industry/15.png";
import Image16 from "../../assets/img/industry/16.png";
import Image17 from "../../assets/img/industry/17.png";
import Image18 from "../../assets/img/industry/18.png";
import Image19 from "../../assets/img/industry/19.png";
import Image20 from "../../assets/img/industry/20.png";

const industry = [
  { src: Image1, title: "Agriculture", id: 1 },
  { src: Image2, title: "Art & Photography", id: 2 },
  { src: Image3, title: "Construction", id: 3 },
  { src: Image4, title: "Account", id: 4 },
  { src: Image5, title: "Children", id: 5 },
  // { src: Image6, title: "Church", id: 6 },
  { src: Image7, title: "Fashion", id: 7 },
  { src: Image8, title: "Food", id: 8 },
  { src: Image9, title: "Games", id: 9 },
  { src: Image10, title: "Health & Care", id: 10 },
  // { src: Image11, title: "Music", id: 11 },
  { src: Image12, title: "Adventure", id: 12 },
  { src: Image13, title: "Delivery", id: 13 },
  { src: Image14, title: "Science", id: 14 },
  { src: Image15, title: "Education", id: 15 },
  { src: Image16, title: "Pet", id: 16 },
  { src: Image17, title: "Beauty & Spa", id: 17 },
  { src: Image18, title: "Travel", id: 18 },
  { src: Image19, title: "Law & Firm", id: 19 },
  { src: Image20, title: "Real Estate", id: 20 },
];

const index = () => {
  const router = useRouter();
  const stateSlogan = useSelector((state) => state.slogan.pickIndustry);
  const dispatch = useDispatch();

  const notify = () => toast("Select atleast one");

  const handleSubmit = (e) => {
    if (stateSlogan.length < 1) {
      notify();
    } else {
      e.preventDefault();
      router.push("/color-picker");
    }
  };

  const handleCheck = (e) => {
    console.log(stateSlogan);
    if (e.target.checked) {
      dispatch(setPickIndustry([...stateSlogan, e.target.value]));
    } else {
      dispatch(
        setPickIndustry([...stateSlogan].filter((a) => a !== e.target.value))
      );
    }
  };
  return (
    <>
      <Head>
        <title>industry</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <div id="wrapper" class="wrapper" style={{ position: "relative" }}>
        <div
          class="step-wrapper step-2"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "#522395",
          }}
        >
          {" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/1.png"
            class="top-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-2/down.png"
            class="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-2/up.png"
            class="top-right-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form
              // action="https://www.logura.com/brief/colorpicker"
              // method="get"
              onSubmit={(e) => e.preventDefault()}
            >
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Pick Your Industry
                    </h1>
                  </div>
                  <div class="step-options step-options-mobile-view">
                    <div class="row">
                      {industry.map((industry) => {
                        return (
                          <div class="col-md-2 col-6">
                            <input
                              type="checkbox"
                              name="industry[]"
                              class="step-checkbox"
                              id={industry?.id}
                              onClick={handleCheck}
                              value={industry?.title}
                            />
                            <label class="step-label" htmlFor={industry?.id}>
                              <div class="step-imgs">
                                <img
                                  src={industry?.src?.src}
                                  style={{ width: "100%", maxWidth: "70px" }}
                                />
                              </div>
                              <h3 class="step-heading">{industry?.title}</h3>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button class="step-submit" onClick={handleSubmit}>
                  Next &gt;&gt;
                </button>
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
