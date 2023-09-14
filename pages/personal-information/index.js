import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { setNameEmail } from "../../redux/slogan/slogan.slice";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const sloganData = useSelector((state) => state.slogan);

  const YOURAPIKEY =
    "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";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = {
      name: userName,
      email: email,
    };
    dispatch(setNameEmail(sendData));
    try {
      const response = await axios.post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          sender: { email: email },
          to: [{ email: "saroojgill2335@gmail.com" }],
          subject: "DesignPerfecto Lead",
          htmlContent: `<html><head></head><body><p>Hello,<ol><li>businessName : ${sloganData?.businessName}</li><li>sloganHere : ${sloganData?.sloganHere}</li><li>pickIndustry : ${sloganData?.pickIndustry}</li><li>colorPicker : ${sloganData?.colorPicker}</li><li>designType : ${sloganData?.designType}</li><li>name : ${userName}</li></li><li>email : ${email}</li></ol></body></html>`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": YOURAPIKEY,
          },
        }
      );
      console.log(response);
      router.push("/final-step");
    } catch (error) {
      console.error(error);
    }

    // router.push("/final-step");
  };

  return (
    <>
      <Head>
        <title>personal information</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <div id="wrapper" class="wrapper">
        <div
          class="step-wrapper step-5"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "#077246",
          }}
        >
          {" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/1.png"
            class="top-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-5/down.png"
            class="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-5/up.png"
            class="top-right-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form onSubmit={handleSubmit}>
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Finally You Made It! :)
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      Now Please Complete This Step To Process Your Logo Design
                      Request
                    </h6>
                  </div>
                  <div class="step-options">
                    <div class="row">
                      <div class="col-12">
                        <input
                          type="text"
                          // formControlName="cus_name"
                          class="step-input cus_name"
                          placeholder="Please Enter Your Name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                        />{" "}
                      </div>
                      <div class="col-12">
                        <input
                          type="email"
                          // formControlName="cus_email"
                          class="step-input cus_email"
                          placeholder="Please Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button class="step-submit" type="submit">
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
