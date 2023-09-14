import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
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

  const promptText = `make me a logo. sophisticated and elegant logo for '${businessName}' company in '${allIndustry}' industry. Colors are ${allColors}. logo design type is ${allDesignTypes}. stop the text.`;

  const logoinfo = { promptText: promptText };
  const headers = { 'Content-Type': 'application/json' };
  const [imageUrls, setImageUrls] = useState([]);
  const imgArrays = [1,2,3,4];
  let isRenderFlag = false;

  // const generateLogo = () => {
  //   isRenderFlag = true;
  //   const response = axios.post('../api/genLogoApi', logoinfo, { headers }).then((res)=>{
  //     let imageTemp = res.data.success; ///get data from response. This is array for key: value
  //     const canvasEle = document.getElementsByClassName('step-imgs');
      
  //     console.log("-------------------start------------------")
  //     imageTemp.map(async (data, index) => {
  //       // imgArrays.push(data.url)

  //       const watermarkTxtSty = {
  //         text:'Your logo',
  //         fillStyle:'rgba(0,0,0,0.6)',
  //         fontSize:50,
  //         watermarkWidth:250,
  //         watermarkHeight:250
  //       }
    
  //       const watermark = new Watermark(canvasEle[index]);

  //       // watermark.draw(data.url.split("?")[0], watermarkTxtSty);
  //     })
  //     console.log("-------------------end------------------")
      
  //     // console.log(imgArrays);
  //   });
    
    // setImageUrls(imgArrays);
    // let oImg; let i = 0;
    // for(oImg of imgArrays) {
    //   const canvasEle = document.getElementsByClassName('step-imgs')[i];
    //   const watermarkTxtSty = {
    //     text:'Your logo',
    //     fillStyle:'rgba(0,0,0,0.6)',
    //     fontSize:50,
    //     watermarkWidth:250,
    //     watermarkHeight:250
    //   }
  
    //   const watermark = new Watermark(canvasEle);
    //   watermark.draw(oImg, watermarkTxtSty);
    //   i = i + 1;
    // }
  // };

  // useEffect(() => {
  //   generateLogo()
  // });

  const targetLogos = ["https://www.logura.com/assets/img/steps/step-6/portfolio.jpg", "https://oaidalleapiprodscus.blob.core.windows.net/private/org-pQwRXkWZC6PRQ4mzDWCDJZyn/user-R4bjQZzzDjP6ssMMd1ZgqI0g/img-5DKBr4BW2oSgb4sCcFTH0lF9.png?st=2023-06-10T13%3A05%3A58Z&se=2023-06-10T15%3A05%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-09T20%3A39%3A52Z&ske=2023-06-10T20%3A39%3A52Z&sks=b&skv=2021-08-06&sig=0UT/LIvIQaRNaqdTNO/96CCf%2B5Zg6RtUkkGhB/pQ5Xw%3D", "https://oaidalleapiprodscus.blob.core.windows.net/private/org-pQwRXkWZC6PRQ4mzDWCDJZyn/user-R4bjQZzzDjP6ssMMd1ZgqI0g/img-5DKBr4BW2oSgb4sCcFTH0lF9.png?st=2023-06-10T13%3A05%3A58Z&se=2023-06-10T15%3A05%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-09T20%3A39%3A52Z&ske=2023-06-10T20%3A39%3A52Z&sks=b&skv=2021-08-06&sig=0UT/LIvIQaRNaqdTNO/96CCf%2B5Zg6RtUkkGhB/pQ5Xw%3D", "https://myvicaro-resized.s3.eu-central-1.amazonaws.com/product-3938060559.png"]
  // const targetLogos = ["https://www.logura.com/assets/img/steps/step-6/portfolio.jpg", "https://www.logura.com/assets/img/steps/step-6/portfolio.jpg",
  //  "https://www.logura.com/assets/img/steps/step-6/portfolio.jpg", "https://www.logura.com/assets/img/steps/step-6/portfolio.jpg"]
  
  const genWatermarkLogo = async () => {
    const data = {imgArrays: targetLogos}
    
    const response = axios.post('../api/genWatermarkApi', data, { headers }).then((res)=>{
      const responsedata = res.data.success;
      console.log(responsedata);
    });

  }
  

  useEffect(() => {
    genWatermarkLogo()
  }, []);


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
            <form
              onSubmit={(e) => e.preventDefault()}
            >
              <div style={{ maxWidth: "100%" }}>
                <div class="container">
                  <div style={{ padding: "50px 0px", textAlign: "center" }}>
                    <h1 class="heading heading-h3 text-white">
                      Here your logo goes
                    </h1>
                  </div>
                  <div class="step-options">
                    <div class="row justify-content-center">
                      {
                        imgArrays.map((data, index)=>(
                          <div class="col-lg-3 col-4">
                            <input
                              type="checkbox"
                              name="logoImgs[]"
                              class="step-checkbox"
                              id={`logo${index}`}
                              onClick={handleCheck}
                              value="logo"
                            />
                            <label class="step-label" htmlFor={`logo${index}`}>
                              <div class="step-imgs" style={{width: "100%", height:"100%"}}>
                                {/* <img src={img} /> */}
                              </div>
                              <h3 class="step-heading">"logo"{index+1}</h3>
                            </label>
                          </div>
                        ))
                      }
                      {/* {imgArrays.map((img, i) => {
                        // console.log(img);
                        return (
                          <div class="col-lg-3 col-4">
                            <input
                              type="checkbox"
                              name="logoImgs[]"
                              class="step-checkbox"
                              id={`logo${i}`}
                              onClick={handleCheck}
                              value="logo"
                            />
                            <label class="step-label" htmlFor={`logo${i}`}>
                              <canvas class="step-imgs" style={{width: "100%", height:"100%"}}>
                                <img src={img} />
                              </canvas>
                              <h3 class="step-heading">"logo"{i+1}</h3>
                            </label>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button class="step-submit"
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
