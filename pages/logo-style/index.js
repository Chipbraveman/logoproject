import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setDesignType } from "../../redux/slogan/slogan.slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Head from "next/head";

import Image1 from "../../assets/img/logo-style/1_1.png";
import Image2 from "../../assets/img/logo-style/2_1.png";
import Image3 from "../../assets/img/logo-style/3_1.png";
import Image4 from "../../assets/img/logo-style/4_1.png";
import Image5 from "../../assets/img/logo-style/5_1.png";
import Image6 from "../../assets/img/logo-style/6_1.png";

const logoStyle = [
  { src: Image1, title: "Business Initials & Lettermark", id: 1 },
  { src: Image2, title: "Iconic & Pictorial", id: 2 },
  { src: Image3, title: "Crest & Monograms", id: 3 },
  { src: Image4, title: "Illustration & Mascots", id: 4 },
  { src: Image5, title: "Abstract & Combination", id: 5 },
  { src: Image6, title: "Calligraphy & Graffiti", id: 6 },
];

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const logoStyleValue = useSelector((state) => state.slogan.designType);
  const notify = () => toast("Select atleast one");

  const handleCheck = (e) => {
    if (e.target.checked) {
      dispatch(setDesignType([...logoStyleValue, e.target.value]));
    } else {
      dispatch(
        setDesignType([...logoStyleValue].filter((a) => a !== e.target.value))
      );
    }
  };

  const handleSubmit = (e) => {
    if (logoStyleValue.length < 1) {
      notify();
    } else {
      e.preventDefault();
      router.push("/personal-information");
    }
  };
  return (
    <>
      <Head>
        <title>logo style</title>
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
      <div id="wrapper" class="wrapper">
        <div
          class="step-wrapper step-3"
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
            src="https://www.logura.com/assets/img/steps/step-3/down.png"
            class="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-3/up.png"
            class="top-right-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Choose Your Logo Design <br />
                      Type & Preference
                    </h1>
                  </div>
                  <div class="step-options max-900px">
                    <div class="row justify-content-center">
                      {logoStyle.map((logoStyle) => {
                        return (
                          <div class="col-md-4 col-12">
                            <input
                              type="checkbox"
                              name=""
                              class="step-checkbox"
                              id={logoStyle?.id}
                              value={logoStyle?.title}
                              onClick={handleCheck}
                            />
                            <label class="step-label" htmlFor={logoStyle?.id}>
                              <div class="step-imgs step-hover">
                                <img src={logoStyle?.src?.src} />
                              </div>
                              <h3 class="step-heading">{logoStyle?.title}</h3>
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
                  {" "}
                  Next &gt;&gt;{" "}
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
