import React from "react";

const Profile = () => {
  return (
    <div>
      {" "}
      <div>
        <main class="page-content">
          <div
            class="revolution-slider-area slider-bg-1 slider-bg-2 rslide"
            // style={{ minHeight: "60vh" }}
            style={{
              background:
                "url(https://ik.imagekit.io/Logura/banner/slider-14_adqdwDRAJCT.png)",
              minHeight: "60vh",
            }}
          >
            <div class="revolution-slider">
              <div class="container">
                <div class="row">
                  <div
                    class="col-lg-12 text-center"
                    style={{
                      position: "absolute",
                      zIndex: "1200",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <h1
                      class="heading heading-h3 text-white font-120"
                      style={{ marginTop: "220px" }}
                    >
                      Customized mobile apps
                    </h1>
                    <div class="bkseparator--15"></div>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      You're seeking a companion, not just a keyboard. With our
                      extensive expertise in developing <br />
                      mobile apps in practically every industry, you can be
                      confident that we will be <br />
                      able to direct you in the proper direction. We'll create a
                      gorgeous mobile <br /> app designed for your business
                      needs, no matter how big or small.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="brook-about-area pt--60 pb--40 rslide bg-shape"
            data-background="#3f1084"
            id="portfolio-sec-2"
          >
            <div class="container" style={{ marginTop: "140px" }}>
              <div class="row">
                <div class="col-lg-12">
                  <div class="brook-section-title mb--20 text-center">
                    <h2 class="heading-title text-white">APP TYPE</h2>
                    <h1 class="heading heading-h3 text-white">
                      The team of Masters <br />
                      For Customized Mobile Apps
                    </h1>
                  </div>
                </div>
              </div>
              <div class="row mb--35">
                <div class="col-12">
                  <p class="text-white mb--10 desc">
                    Without functionality, an app is meaningless. Because every
                    firm is unique, features must be tailored to meet specific
                    needs. You wouldn't want to invest in things that aren't
                    useful to you or your customers.
                  </p>
                  <p class="text-white mb--10 desc">
                    We understand that expenses may make or break a strategy. We
                    won't go there because cost-effectiveness is a given for any
                    firm. On the other hand, hidden expenses are a reality that
                    organizations must deal with regularly. There are no hidden
                    fees with Design Perfecto.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="about-content text-center">
                    <h2 class="heading-title text-white">
                      Customized mobile apps
                    </h2>
                    <h1 class="heading heading-h3 text-white">
                      Customized mobile apps, Website Designs <br />
                      Carved With Brilliance
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      How quickly can an application be developed? This is the
                      most often asked question by CXOs. Before proceeding with
                      the platform selection procedure, you can choose between
                      native and hybrid apps. .
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
