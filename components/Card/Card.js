// import * as React from "react";
// import { Card as MuiCard } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// export default function Card({ data }) {
//   console.log(data?.imgPath?.src);
//   return (
//     <MuiCard sx={{ maxWidth: 345 }}>
//       <CardActionArea disableRipple>
//         <CardMedia
//           component="img"
//           height="140"
//           image={data?.imgPath?.src}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography component="div" sx={{ fontSize: "18px" }}>
//             {data.heading}
//           </Typography>
//           <Typography component="div">{data.paragraph}</Typography>
//           <Typography color="text.secondary" sx={{ fontSize: "17px" }}>
//             {data.created}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </MuiCard>
//   );
// }

import React from "react";
import Redcar from "../../assets/img/redcar.jpg";
import Insta from "../../assets/img/insta-post.jpg";
import BrandImg from "../../assets/img/brand-img.jpg";
import VideoBlog from "../../assets/img/video-blog-post.jpg";

const Card = () => {
  return (
    <div
      class="bk-blog-grid-area pb--60 rslide"
      // style={{ backgroundColor: "#fa8fa0" }}
      // style={{ backgroundColor: "#ff8105" }}
      id="blog"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title mb--45 text-center">
              <h2 class="heading-title text-white">Blog</h2>
              <h1 class="heading heading-h3 text-white">
                Stay Up-To Date With
                <br />
                Our Latest Blogs
              </h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                Get to know what's new in ever-changing designing world <br />
                through our blogs.
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
            <div class="blog-grid-minimal minimal-style-2 text-white">
              <div class="post-content">
                {" "}
                <img src={Redcar.src} loading="lazy" />
                <div class="post-content-inner">
                  <h4 class="heading heading-h4">
                    <a routerLink="">
                      Best Use of Negative Spacing While Designing A Custom
                      Business Logo
                    </a>
                  </h4>
                  <p>
                    {" "}
                    You often overhear the term ‘negative space’ and wondering
                    what does it exactly mean when&#8230;
                  </p>
                  <div class="post-meta">
                    <div class="post-date">Created By Shawn</div>
                    <div class="post-category">September 18, 2020</div>
                    <div class="post-category">
                      <a routerLink="">General</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
            <div class="blog-grid-minimal minimal-style-2 text-white">
              <div class="post-content">
                {" "}
                <img src={Insta.src} loading="lazy" />
                <div class="post-content-inner">
                  <h4 class="heading heading-h4">
                    <a routerLink="">
                      Instagram Marketing Trends To Succeed Your Small Business
                      in 2020
                    </a>
                  </h4>
                  <p>
                    {" "}
                    Instagram has become the preferred social media app for
                    young adults, as 85% of them&#8230;
                  </p>
                  <div class="post-meta">
                    <div class="post-date">Created By Shawn</div>
                    <div class="post-category">September 18, 2020</div>
                    <div class="post-category">
                      <a routerLink="">General</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
            <div class="blog-grid-minimal minimal-style-2 text-white">
              <div class="post-content">
                {" "}
                <img src={BrandImg.src} loading="lazy" />
                <div class="post-content-inner">
                  <h4 class="heading heading-h4">
                    <a routerLink="">
                      Top 5 Reasons Why Creating Strong Brand Identity Is Vital
                      for Small Business
                    </a>
                  </h4>
                  <p>
                    When you wish to establish a small business, you make every
                    possible effort for its&#8230;
                  </p>
                  <div class="post-meta">
                    <div class="post-date">Created By Shawn</div>
                    <div class="post-category">August 31, 2020</div>
                    <div class="post-category">
                      <a routerLink="">General</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
            <div class="blog-grid-minimal minimal-style-2 text-white">
              <div class="post-content">
                {" "}
                <img src={VideoBlog.src} loading="lazy" />
                <div class="post-content-inner">
                  <h4 class="heading heading-h4">
                    <a routerLink="">
                      Why Video Animation Is Important For Branding Agencies
                    </a>
                  </h4>
                  <p>
                    Branding agencies have been striving to provide unique and
                    creative content to their clients regularly.&#8230;
                  </p>
                  <div class="post-meta">
                    <div class="post-date">Created By Shawn</div>
                    <div class="post-category">August 25, 2020</div>
                    <div class="post-category">
                      <a routerLink="">General</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
