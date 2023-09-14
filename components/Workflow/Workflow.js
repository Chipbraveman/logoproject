import React from "react";
import Image from "next/image";
import analyzing from "../../assets/img/icons/Analyzing.png";
// import brainstroming from "../../assets/img/icons/Brainstroming.jpg";
import brainstroming from "../../assets/img/icons/Brainstroming-2.png";
import execution from "../../assets/img/icons/Execution.png";
import delivery from "../../assets/img/icons/Delivery.png";

const Workflow = () => {
  return (
    <div
      class="brook-portfolio-area pb--60 slider"
      // data-background="#fea300"
      // style={{ backgroundColor: "#fea300" }}
      id="workflow"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title mb--45 text-center">
              <h2 class="heading-title text-white">Workflow</h2>
              <h1 class="heading heading-h3 text-white">
                Our All-Round Creative <br />
                Methodology
              </h1>
              {/* <!--<h6 class="heading heading-h6 text-white letter-spacing-1">We have set flexible pricing to meet needs of businesses of any size yet ensuring<br>quality designs. Price is what you pay value is what you get in return</h6>--> */}
            </div>
          </div>
        </div>
        <div class="row workflow-sec">
          <div class="workflow-sec-container">
            <div class="single-workflow">
              <div class="workflow-img-2 workflow-1">
                <div class="workflow-number"> 01 </div>{" "}
                <img src={analyzing.src} loading="lazy" />
                {/* <Image
                  src={Analyzing}
                  // alt="Picture of the author"
                  // width={180}
                /> */}
              </div>
              <h3 class="text-white">Analyzing</h3>
              <p class="text-white">
                We delve into your critical brand requirements and examine them
                to make them more dynamic and unique. Finally, we create the
                most stunning aspects for your company on an executive level.
              </p>
            </div>
            <div class="single-workflow">
              <div class="workflow-img-2 workflow-2">
                <div class="workflow-number"> 02 </div>{" "}
                {/* <img
                  src="../../assets/img/icons/Brainstroming.jpg"
                  loading="lazy"
                /> */}
                <img src={brainstroming.src} loading="lazy" />
              </div>
              <h3 class="text-white">Brainstorming</h3>
              <p class="text-white">
                We use professional and creative brainstorming to meet our
                client's expectations. Consequently, we give a broader
                perspective and make companies sagacious than ever.
              </p>
            </div>
            <div class="single-workflow">
              <div class="workflow-img-2 workflow-3">
                <div class="workflow-number"> 03 </div>{" "}
                {/* <img
                  src="../../assets/img/icons/Execution.png"
                  loading="lazy"
                /> */}
                <img src={execution.src} loading="lazy" />
              </div>
              <h3 class="text-white">Execution</h3>
              <p class="text-white">
                Our actual strength roars louder than our verbal justifications.
                We are the only ones who can put your and our audacious ideas
                into action to continue creating original content.
              </p>
            </div>
            <div class="single-workflow">
              <div class="workflow-img-2 workflow-4">
                <div class="workflow-number"> 04 </div>{" "}
                {/* <img src="../../assets/img/icons/Delivery.png" loading="lazy" /> */}
                <img src={delivery.src} loading="lazy" />
              </div>
              <h3 class="text-white">Delivery</h3>
              <p class="text-white">
                We work quickly enough to complete jobs on time. We respect the
                last working hours of our customers and use our time more
                efficiently to benefit both parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
