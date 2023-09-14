import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Head from "next/head";

import Image1 from "../../assets/img/color-picker/1.jpg";
import Image2 from "../../assets/img/color-picker/2.jpg";
import Image3 from "../../assets/img/color-picker/3.jpg";
import Image4 from "../../assets/img/color-picker/4.jpg";
import Image5 from "../../assets/img/color-picker/5.jpg";
import Image6 from "../../assets/img/color-picker/6.jpg";
import Image7 from "../../assets/img/color-picker/7.jpg";
import Image8 from "../../assets/img/color-picker/8.jpg";
import Image9 from "../../assets/img/color-picker/9.jpg";
import Image10 from "../../assets/img/color-picker/10.jpg";
import Image11 from "../../assets/img/color-picker/11.jpg";
import Image12 from "../../assets/img/color-picker/12.jpg";
import { setColorPicker } from "../../redux/slogan/slogan.slice";
import { useSelector, useDispatch } from "react-redux";

const colorPicker = [
  { src: Image1, title: "Red", id: 1 },
  { src: Image2, title: "Pink", id: 2 },
  { src: Image3, title: "Purple", id: 3 },
  { src: Image4, title: "Blue", id: 4 },
  { src: Image5, title: "Aqua", id: 5 },
  { src: Image6, title: "Light Blue", id: 6 },
  { src: Image7, title: "Yellow", id: 7 },
  { src: Image8, title: "Orange", id: 8 },
  { src: Image9, title: "Green", id: 9 },
  { src: Image10, title: "Oliver", id: 10 },
  { src: Image11, title: "Brown", id: 11 },
  { src: Image12, title: "Black", id: 12 },
];

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const colorPick = useSelector((state) => state.slogan.colorPicker);
  const notify = () => toast("Select atleast one");

  const handleCheck = (e) => {
    if (e.target.checked) {
      dispatch(setColorPicker([...colorPick, e.target.value]));
    } else {
      dispatch(
        setColorPicker([...colorPick].filter((a) => a !== e.target.value))
      );
    }
  };

  const handleSubmit = (e) => {
    if (colorPick.length < 1) {
      notify();
    } else {
      e.preventDefault();
      router.push("/logo-style");
    }
  };
  return (
    <>
      <Head>
        <title>color picker</title>
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
          class="step-wrapper step-4"
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
            src="https://www.logura.com/assets/img/steps/step-4/bt1.png"
            class="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-4/tp1.png"
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
                  <div style={{ padding: "50px 0px", textAlign: "center" }}>
                    <h1 class="heading heading-h3 text-white">
                      The Color Tone Of Your Logo
                    </h1>
                  </div>
                  <div class="step-options">
                    <div class="row justify-content-center">
                      {colorPicker.map((colorPicker) => {
                        return (
                          <div class="col-md-2 col-6">
                            <input
                              type="checkbox"
                              name=""
                              onClick={handleCheck}
                              class="step-checkbox"
                              id={colorPicker?.id}
                              value={colorPicker?.title}
                            />
                            <label class="step-label" htmlFor={colorPicker?.id}>
                              <div class="step-imgs">
                                <img src={colorPicker?.src?.src} />
                              </div>
                              <h3 class="step-heading">{colorPicker?.title}</h3>
                            </label>
                          </div>
                        );
                      })}

                      {/* <div class="col-md-2 col-6">
                        <input
                          type="checkbox"
                          name=""
                          class="step-checkbox"
                          value=""
                        />
                        <label class="step-label">
                          <div class="step-imgs">
                            <img src="" />
                          </div>
                          <h3 class="step-heading">3245</h3>
                        </label>
                      </div> */}
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
