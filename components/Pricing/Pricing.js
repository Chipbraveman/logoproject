import React from "react";
import Link from "next/link";

import logo1 from "../../assets/img/icons/Basic.png";
import logo2 from "../../assets/img/icons/Standard.png";
import logo3 from "../../assets/img/icons/Prime.png";
import logo4 from "../../assets/img/icons/Deluxe.png";
import website from "../../assets/img/single-page.png";
import { useRouter } from "next/router";

const Pricing = () => {
  const router = useRouter();
  return (
    <div
      class="brook-portfolio-area pt--60 pb--60 rslide"
      // style={{ backgroundColor: "#fe882b" }}
      id="pricing"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title mb--45 text-center">
              <h2 class="heading-title text-white">Pricing</h2>
              <h1 class="heading heading-h3 text-white">
                Inexpensive designs
                <br />
                Pocket-Friendly Pricing
              </h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                Digital creative and design services that are distinctive and
                reasonably priced can be <br />
                customized to meet your specific requirements. We're not trying
                to bug you.
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="pricing-tabs">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#logo-price-tab"
                  >
                    {" "}
                    Logo Design{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <Link
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#branding-price-tab"
                  >
                    {" "}
                    Branding{" "}
                  </Link>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#website-price-tab"
                  >
                    {" "}
                    Website{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#video-price-tab"
                  >
                    Video Animation{" "}
                  </a>{" "}
                </li>
              </ul>
              <div class="tab-content">
                <div
                  id="logo-price-tab"
                  class="tab-pane animated fadeIn active"
                >
                  <br />
                  <div class="row mlr--7">
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$49</h2>
                          <h1>Basic</h1>{" "}
                          <img
                            // src="../../assets/img/icons/Basic.png"
                            src={logo1.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>2 Logo Design Concepts</li>
                            <li>By 1 Experienced Designer</li>
                            <li>4 Free Revisions</li>
                            <li>Dedicated Project Manager</li>
                            <li>24 - 48 Hours Delivery</li>
                          </ul>
                          <h5>What you will Get?</h5>
                          <ul>
                            <li>1 Finalized Logo</li>
                            <li>100% Ownership</li>
                            <li>No Print Ready .PDF File</li>
                            <li>No Vector .EPS File</li>
                            <li>No Editable Vector .AI File</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$99</h2>
                          <h1>Standard</h1>{" "}
                          <img
                            src={logo2.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>4 Logo Design Concepts</li>
                            <li>By 3 Experienced Designers</li>
                            <li>8 Free Revisions</li>
                            <li>Dedicated Project Manager</li>
                            <li>24 - 48 Hours Delivery</li>
                          </ul>
                          <h5>What you will Get?</h5>
                          <ul>
                            <li> 1 Finalized Logo</li>
                            <li>100% Ownership</li>
                            <li>Online . JPEG & .PNG Files</li>
                            <li>Print Ready .PDF File</li>
                            <li>No Vector .EPS File</li>
                            <li>No Editable Vector .AI File</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$149</h2>
                          <h1>Prime</h1>{" "}
                          <img
                            src={logo3.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>6 Logo Design Concepts</li>
                            <li>By 5 Experienced Designers</li>
                            <li>Unlimited Revisions</li>
                            <li>Dedicated Project Manager</li>
                            <li>24 - 48 Hours Delivery</li>
                          </ul>
                          <h5>What you will Get?</h5>
                          <ul>
                            <li> Finalized Logo</li>
                            <li>100% Ownership</li>
                            <li>Online .JPEG & .PNG Files</li>
                            <li>Print Ready .PDF Files</li>
                            <li>Vector .EPS File</li>
                            <li>No Editable Vector AI File</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$199</h2>
                          <h1>Deluxe</h1>{" "}
                          <img
                            src={logo4.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>Unlimited Logo Concepts</li>
                            <li>100% Ownership</li>
                            <li>By 8 Experienced Designers</li>
                            <li>Unlimited Revisions</li>
                            <li>Dedicated Project Manager</li>
                            <li>24 - 48 Hours Delivery</li>
                          </ul>
                          <h5>What you will Get?</h5>
                          <ul>
                            <li>1 Finalized Logo</li>
                            <li>Online .JPEG & .PNG Files</li>
                            <li>Print Ready .PDF Files</li>
                            <li>Vector .EPS File</li>
                            <li>Editable Vector .AI File</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="branding-price-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row mlr--7">
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$99</h2>
                          <h1>Starter</h1>{" "}
                          <img
                            src={logo1.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>Business Card Design</li>
                            <li>Letter head Design</li>
                            <li>Envelope Design</li>
                            <li>MS Word Letterhead</li>
                            <li>Email Signature Design</li>
                            <li>Invoice Design</li>
                            <li>Facebook Banner Design</li>
                            <li>Youtube Banner Design</li>
                            <li>Twitter Banner Design</li>
                            <li>Linkedin Banner Design</li>
                            <li>Logo Watermark</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$139</h2>
                          <h1>Essential</h1>{" "}
                          <img
                            src={logo2.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>Business Card Design</li>
                            <li>Letter head Design</li>
                            <li>Envelope Design</li>
                            <li>MS Word Letterhead</li>
                            <li>Email Signature Design</li>
                            <li>Invoice Design</li>
                            <li>Facebook Banner Design</li>
                            <li>Youtube Banner Design</li>
                            <li>Twitter Banner Design</li>
                            <li>Linkedin Banner Design</li>
                            <li>Logo Watermark</li>
                            <li>Favicon Design</li>
                            <li>Polo/T-Shirt Design</li>
                            <li>Cap/Hat Design</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$249</h2>
                          <h1>Professional</h1>{" "}
                          <img
                            src={logo3.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>Business Card Design</li>
                            <li>Letter head Design</li>
                            <li>Envelope Design</li>
                            <li>MS Word Letterhead</li>
                            <li>Email Signature Design</li>
                            <li>Invoice Design</li>
                            <li>Facebook Banner Design</li>
                            <li>Youtube Banner Design</li>
                            <li>Twitter Banner Design</li>
                            <li>Linkedin Banner Design</li>
                            <li>Logo Watermark</li>
                            <li>Favicon Design</li>
                            <li>Polo/T-Shirt Design</li>
                            <li>Cap/Hat Design</li>
                            <li>Bag Design</li>
                            <li>Signage Design</li>
                            <li>Flyer Design</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$299</h2>
                          <h1>Corporate</h1>{" "}
                          <img
                            src={logo4.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>Business Card Design</li>
                            <li>Letter head Design</li>
                            <li>Envelope Design</li>
                            <li>MS Word Letterhead</li>
                            <li>Email Signature Design</li>
                            <li>Invoice Design</li>
                            <li>Facebook Banner Design</li>
                            <li>Youtube Banner Design</li>
                            <li>Twitter Banner Design</li>
                            <li>Linkedin Banner Design</li>
                            <li>Logo Watermark</li>
                            <li>Favicon Design</li>
                            <li>Polo/T-Shirt Design</li>
                            <li>Cap/Hat Design</li>
                            <li>Bag Design</li>
                            <li>Signage Design</li>
                            <li>Flyer Design</li>
                            <li>Car Wrap/Vinyl Design</li>
                            <li>PPT Design</li>
                            <li>Magnet Design</li>
                            <li>Door Sign Design</li>
                            <li>Menu Design</li>
                            <li>Mug/Cup Design</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="website-price-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row mlr--7">
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$299</h2>
                          <h1>Single Page</h1>{" "}
                          <img
                            src={website.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>1 Page Static Website</li>
                            <li>W3C Certified HTML</li>
                            <li>JQuery Slider Banner</li>
                            <li>Mobile Responsive Layout</li>
                            <li>JQuery Slider Banners</li>
                            <li>Products/Services Section</li>
                            <li>Portfolio/Gallery Section</li>
                            <li>Contact Us Section</li>
                            <li>Lead Inquiry Form</li>
                            <li>Website Favicon Design</li>
                            <li>Web Page Banner Design</li>
                            <li>Royalty Free Stock Image</li>
                            <li>Advance UI & Effects</li>
                            <li>Social Media Integrations</li>
                            <li>Business Domain Emails</li>
                            <li>LiveChat Tool Integration</li>
                            <li>3 Month LiveChat Agent</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$499</h2>
                          <h1>5 Pages</h1>{" "}
                          <img
                            src={website.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>5 Pages Static Website</li>
                            <li>W3C Certified HTML</li>
                            <li>JQuery Slider Banner</li>
                            <li>Mobile Responsive Layout</li>
                            <li>Home Page Layout</li>
                            <li>Company Profile Page</li>
                            <li>Product/Service Page</li>
                            <li>Portfolio/Gallery Page</li>
                            <li>Contact Us Page</li>
                            <li>Lead Inquiry Form</li>
                            <li>Website Favicon Design</li>
                            <li>5 Web Page Banners Design</li>
                            <li>5 Royalty Free Stock Images</li>
                            <li>Advance UI & Effects</li>
                            <li>Social Media Integrations</li>
                            <li>Business Domain Emails</li>
                            <li>LiveChat Tool Integration</li>
                            <li>3 Month LiveChat Agent</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$699</h2>
                          <h1>8 Pages</h1>{" "}
                          <img
                            src={website.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li> 8 Pages Static Website</li>
                            <li>W3C Certified HTML</li>
                            <li>JQuery Slider Banner</li>
                            <li>Mobile Responsive Layout</li>
                            <li>Home Page Layout</li>
                            <li>Company Profile Page</li>
                            <li>Main Product/Service Page</li>
                            <li>Products/Services Inner Pages</li>
                            <li>Portfolio/Gallery Page</li>
                            <li>Contact Us Page</li>
                            <li>Lead Inquiry Form</li>
                            <li>Website Favicon Design</li>
                            <li>8 Web Page Banners Design</li>
                            <li>8 Royalty Free Stock Images</li>
                            <li>Advance UI & Effects</li>
                            <li>Social Media Integrations</li>
                            <li>Business Domain Emails</li>
                            <li>LiveChat Tool Integration</li>
                            <li>3 Month LiveChat Agent</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$899</h2>
                          <h1>12 Pages</h1>{" "}
                          <img
                            src={website.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <h5>Features</h5>
                          <ul>
                            <li>12 Pages Static Website</li>
                            <li>W3C Certified HTML</li>
                            <li>JQuery Slider Banner</li>
                            <li>Mobile Responsive Layout</li>
                            <li>Home Page Layout</li>
                            <li>Company Profile Page</li>
                            <li>Main Product/Service Page</li>
                            <li>Products/Services Inner Pages</li>
                            <li>Portfolio/Gallery Page</li>
                            <li>Contact Us Page</li>
                            <li>Lead Inquiry Form</li>
                            <li>Website Favicon Design</li>
                            <li>12 Web Page Banners Design</li>
                            <li>12 Royalty Free Stock Images</li>
                            <li>Advance UI & Effects</li>
                            <li>Social Media Integrations</li>
                            <li>Business Domain Emails</li>
                            <li>LiveChat Tool Integration</li>
                            <li>3 Month LiveChat Agent</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="video-price-tab" class="tab-pane animated fadeIn">
                  <br />
                  <div class="row mlr--7">
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$499</h2>
                          <h1>Basic</h1>{" "}
                          <img
                            src={logo1.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <ul>
                            <li>60 seconds</li>
                          </ul>
                          <h5>Custom Work</h5>
                          <ul>
                            <li>Script Writing</li>
                            <li>Detail Storyboard</li>
                            <li>Professional Voice over</li>
                            <li>Impressive Animation</li>
                            <li>Royalty free BG & SFX</li>
                          </ul>
                          <h5>More Features</h5>
                          <ul>
                            <li>File Delivered in HD 720p</li>
                            <li>3 round of revisions in each phase</li>
                            <li>4 weeks Deadline</li>
                            <li>100% satisfaction</li>
                            <li>100% Ownership Rights</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$799</h2>
                          <h1>Startup</h1>{" "}
                          <img
                            src={logo2.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <ul>
                            <li>60 seconds</li>
                          </ul>
                          <h5>Custom Work</h5>
                          <ul>
                            <li>Script Writing</li>
                            <li>storyboarding</li>
                            <li>Detail illustrations</li>
                            <li>Professional Voice over</li>
                            <li>Impressive Animation</li>
                            <li>Royalty free BG & SFX</li>
                          </ul>
                          <h5>More Features</h5>
                          <ul>
                            <li>File Delivered in HD 720p</li>
                            <li>3 round of revisions in each phase</li>
                            <li>3 weeks Deadline</li>
                            <li>100% satisfaction</li>
                            <li>100% Ownership Rights</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$999</h2>
                          <h1>Professional</h1>{" "}
                          <img
                            src={logo3.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <ul>
                            <li>60 seconds </li>
                          </ul>
                          <h5>Custom Work</h5>
                          <ul>
                            <li>Script Writing</li>
                            <li>storyboarding</li>
                            <li>Detail illustrations</li>
                            <li>Professional Voice over</li>
                            <li>Impressive Animation</li>
                            <li>Royalty free BG & SFX</li>
                          </ul>
                          <h5>More Features</h5>
                          <ul>
                            <li>File Delivered in HD 1080p</li>
                            <li>Multiple Revisions in each phase</li>
                            <li>2 weeks Deadline</li>
                            <li>Dedicated Project Manager</li>
                            <li>100% satisfaction</li>
                            <li>100% Ownership Rights</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 plr-7">
                      <div class="single-pricing">
                        <div class="price-header">
                          <h2>$1499</h2>
                          <h1>Corporate</h1>{" "}
                          <img
                            src={logo4.src}
                            loading="lazy"
                            alt="Pricing icon"
                          />
                        </div>
                        <div class="price-detail">
                          <ul>
                            <li>60 seconds</li>
                          </ul>
                          <h5>Custom Work</h5>
                          <ul>
                            <li>2 Concepts + premium scriptwriting</li>
                            <li>storyboarding</li>
                            <li>Detail illustrations</li>
                            <li>Professional Voice over</li>
                            <li>Impressive Animation</li>
                            <li>Royalty free BG & SFX</li>
                          </ul>
                          <h5>More Features</h5>
                          <ul>
                            <li>File Delivered in HD 1080p</li>
                            <li>Unlimited revisions</li>
                            <li>6 weeks Deadline</li>
                            <li>Dedicated Project Manager</li>
                            <li>100% satisfaction</li>
                            <li>100% Ownership Rights</li>
                            <li>Source File</li>
                          </ul>
                        </div>
                        <div class="price-link">
                          {" "}
                          <a
                            data-detail="USD-100-Item Name-Category"
                            class="theme-btn pay-now-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/payment");
                            }}
                          >
                            Order Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="view-portfolio-about">
                {" "}
                <a
                  class="cta"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/pricing");
                  }}
                >
                  Pocket - Plans
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
