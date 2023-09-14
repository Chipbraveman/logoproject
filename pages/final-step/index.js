import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Watermark from 'watermark-image';

///////////////start Betty's addition
import { setLogoUrl } from "../../redux/slogan/slogan.slice";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { DatabaseUp, Water } from "react-bootstrap-icons";
import axios from "axios";

// const imageToBase64 = require('image-to-base64');
//////////////////end Betty's addition.

const index = () => {
  const router = useRouter();
  const sloganData = useSelector((state) => state.slogan);
  const { businessName, sloganHere, pickIndustry, colorPicker, designType } = sloganData;
  const allIndustry = pickIndustry.toString();
  const allColors = colorPicker.toString();
  const allDesignTypes = designType.toString();

  const promptText = `sophisticated and elegant logo for '${businessName}' concept in '${allIndustry}' industry. Colors are ${allColors}. logo design type is ${allDesignTypes}. stop the text.`;
  
  const logoinfo = { promptText: promptText };
  const headers = { 'Content-Type': 'application/json' };
  const [imageUrls, setImageUrls] = useState([]);
  const imgArrays = [];

  // const generateLogo = () => {
  //   const response = axios.post('../api/genLogoApi', logoinfo).then((res)=>{
  //     let imageTemp = res.data.success; ///get data from response. This is array for key: value
  //     console.log(imageTemp)
  //     imageTemp.map((data) => {imgArrays.push(data.url)});
  //     setImageUrls(imgArrays);
      
  //   });
  // };

  // useEffect(() => {
  //   generateLogo()
  // }, []);

    const targetLogos = ["https://www.logura.com/assets/img/steps/step-6/portfolio.jpg", "https://oaidalleapiprodscus.blob.core.windows.net/private/org-yboL2hB30m51Tr3Cdm1dINQB/user-ZvT9irjqJEBcF9krlkTkFBU0/img-r9YNa6vMKJt4syfukwEa1Jbr.png?st=2023-06-12T06%3A57%3A55Z&se=2023-06-12T08%3A57%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-11T20%3A45%3A45Z&ske=2023-06-12T20%3A45%3A45Z&sks=b&skv=2021-08-06&sig=fdp38LamII6jLRJSnKXRyf5syhDV76Lbl/2qzKkUgRs%3D"]
  
  const dispatch = useDispatch();
  const logoUrl = useSelector((state) => state.slogan.logoUrl);

  const handleCheck = (e) => {
    // console.log(stateSlogan);
    if (e.target.checked) {
      dispatch(setLogoUrl([...logoUrl, e.target.value]));
    } else {
      dispatch(
        setLogoUrl([...logoUrl].filter((a) => a !== e.target.value))
      );
    }
  };

  const generateLogo = () => {
    const response = axios.post('../api/genWatermarkApi', targetLogos).then((res)=>{
      
      let imageTemp = res.data.success; ///get data from response. This is array for key: value
      console.log(imageTemp);
      setImageUrls(targetLogos);
      
    });
  };

  useEffect(() => {
    generateLogo()
  }, []);


  return (
    <>
      <Head>
        <title>final step</title>
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
      <div id="wrapper" className="wrapper">
        <div
          className="step-wrapper step-4"
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
            className="top-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-6/down.png"
            className="bottom-left-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-6/up.png"
            className="top-right-img"
          />{" "}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            className="bottom-right-img"
          />


          <div className="step-top-sec">
            <form
              onSubmit={(e) => e.preventDefault()}
            >
              <div style={{ maxWidth: "100%" }}>
                <div className="container">
                  <div style={{ padding: "50px 0px", textAlign: "center" }}>
                    <h1 className="heading heading-h3 text-white">
                      Here your logo goes
                    </h1>
                  </div>
                  <div className="step-options">
                    <div className="row justify-content-center">
                      {/* {                       
                        imgArrays.map((data, index)=>(
                          <div className="col-lg-3 col-4">
                            <input
                              type="checkbox"
                              name="logoImgs[]"
                              className="step-checkbox"
                              id={`logo${index}`}
                              onClick={handleCheck}
                              value="logo"
                            />
                            <label className="step-label" htmlFor={`logo${index}`}>
                              <div className="step-imgs" style={{width: "100%", height:"100%"}}>
                                <img src={data} />
                              </div>
                              <h3 className="step-heading">{`logo${index+1}`}</h3>
                            </label>
                          </div>
                        ))
                      } */}
                      {imageUrls.map((img, i) => {
                        // console.log(img);
                        return (
                          <div className="col-lg-3 col-4">
                            <input
                              type="checkbox"
                              name="logoImgs[]"
                              className="step-checkbox"
                              id={`logo${i}`}
                              onClick={handleCheck}
                              value="logo"
                            />
                            <label className="step-label" htmlFor={`logo${i}`}>
                              <div className="step-imgs" style={{width: "100%", height:"100%"}}>
                                <img src={img} />
                              </div>
                              <h3 className="step-heading">"logo"{i+1}</h3>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button className="step-submit"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/portfolio");
                  }}>
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
