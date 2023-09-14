import React from "react";
import Tab1 from "../../assets/img/icons/Basic.png";
import Tab2 from "../../assets/img/icons/Standard.png";
import Tab3 from "../../assets/img/icons/Prime.png";
import Tab4 from "../../assets/img/icons/Deluxe.png";
import { useRouter } from "next/router";

const PricingTab = () => {
  const router = useRouter();
  return (
    <div id="wrapper" class="wrapper">
      <div
      // class="rvbody"
      // style={{
      //   backgroundColor: "#ff9e00",
      // }}
      >
        <main class="page-content">
          <div
            class="brook-portfolio-area pb--60 rslide pt--130"
            data-background="#ff5b51"
            id="lb-package"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="brook-section-title mb--45 text-center">
                    <h2 class="heading-title text-white">Pricing</h2>
                    <h1 class="heading heading-h3 text-white">
                      Inspiring Logo Designs With
                      <br />
                      Pocket-Friendly Pricing
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      Affordable yet unique digital creative and design services
                      that are tailor-made according to your personalized needs.
                      We mean your business.
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
                          href="#logo-tab"
                          id="logo-tab-link"
                        >
                          {" "}
                          Logo Design{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#logo-branding-tab"
                          id="logo-branding-tab-link"
                        >
                          {" "}
                          Logo + Branding
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#logo-branding-website-tab"
                          id="logo-branding-website-tab-link"
                        >
                          Logo + Branding + Website{" "}
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
                                  src={Tab1.src}
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
                                  src={Tab2.src}
                                  loading="lazy"
                                  alt="Pricing icon"
                                />
                                {/* <img src={Tab2.src} /> */}
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                  src={Tab3.src}
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                  src={Tab4.src}
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="logo-branding-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$148</h2>
                                <h1>Basic 2 In 1</h1> <img src={Tab1.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Basic Logo</h5>
                                <ul>
                                  <li>2 Logo Design Concepts</li>
                                  <li>By 1 Experienced Designer</li>
                                  <li>4 Free Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Starter Branding</h5>
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$238</h2>
                                <h1>Standard 2 In 1 </h1> <img src={Tab2.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Standard Logo</h5>
                                <ul>
                                  <li>4 Logo Design Concepts</li>
                                  <li>By 3 Experienced Designers</li>
                                  <li>8 Free Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Essential Branding</h5>
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
                                  <li> Linkedin Banner Design</li>
                                  <li>Logo Watermark</li>
                                  <li>Favicon Design</li>
                                  <li>Polo/T-Shirt Design</li>
                                  <li>Cap/Hat Design</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$398</h2>
                                <h1>Prime 2 In 1</h1> <img src={Tab3.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Prime Logo</h5>
                                <ul>
                                  <li>6 Logo Design Concepts</li>
                                  <li>By 5 Experienced Designers</li>
                                  <li>Unlimited Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Professional Branding</h5>
                                <ul>
                                  <li> Business Card Design</li>
                                  <li> Letter head Design</li>
                                  <li> Envelope Design</li>
                                  <li> MS Word Letterhead</li>
                                  <li> Email Signature Design</li>
                                  <li> Invoice Design</li>
                                  <li> Facebook Banner Design</li>
                                  <li> Youtube Banner Design</li>
                                  <li> Twitter Banner Design</li>
                                  <li> Linkedin Banner Design</li>
                                  <li> Logo Watermark</li>
                                  <li> Favicon Design</li>
                                  <li> Polo/T-Shirt Design</li>
                                  <li> Cap/Hat Design</li>
                                  <li> Bag Design</li>
                                  <li> Signage Design</li>
                                  <li> Flyer Design</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$498</h2>
                                <h1>Deluxe 2 In 1</h1> <img src={Tab4.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Deluxe Logo</h5>
                                <ul>
                                  <li>Unlimited Logo Concepts</li>
                                  <li>By 8 Experienced Designers</li>
                                  <li>Unlimited Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Corporate Branding </h5>
                                <ul>
                                  <li> Business Card</li>
                                  <li> Letter head</li>
                                  <li> Envelope</li>
                                  <li> MS Word Letterhead</li>
                                  <li> Email Signature</li>
                                  <li> Invoice</li>
                                  <li> Social Covers / Banners</li>
                                  <li> Watermark</li>
                                  <li> Icon Design</li>
                                  <li> T-Shirt</li>
                                  <li> Cap</li>
                                  <li> Bag</li>
                                  <li> Signage</li>
                                  <li> Flyer / Brochure</li>
                                  <li> Car Wrap / Stickers</li>
                                  <li> PPT</li>
                                  <li> Magnet</li>
                                  <li> Door Sign</li>
                                  <li> Menu Design</li>
                                  <li> Mug</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="logo-branding-website-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>
                                  $449{" "}
                                  <sup class="del-price">
                                    <del>$547</del>
                                  </sup>
                                </h2>
                                <h1>Basic 3 In 1</h1> <img src={Tab1.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Basic Logo</h5>
                                <ul>
                                  <li>2 Logo Design Concepts</li>
                                  <li>By 1 Experienced Designer</li>
                                  <li>4 Free Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Starter Branding</h5>
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
                                <h5>HTML 1 Page Website</h5>
                                <ul>
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
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>
                                  $699{" "}
                                  <sup class="del-price">
                                    <del>$737</del>
                                  </sup>
                                </h2>
                                <h1>Standard 3 In 1</h1>
                                <img src={Tab2.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Standard Logo</h5>
                                <ul>
                                  <li>4 Logo Design Concepts</li>
                                  <li>By 3 Experienced Designers</li>
                                  <li>8 Free Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Essential Branding</h5>
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
                                  <li> Linkedin Banner Design</li>
                                  <li>Logo Watermark</li>
                                  <li>Favicon Design</li>
                                  <li>Polo/T-Shirt Design</li>
                                  <li>Cap/Hat Design</li>
                                </ul>
                                <h5>HTML 5 Pages Website</h5>
                                <ul>
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
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>
                                  $1299{" "}
                                  <sup class="del-price">
                                    <del>$1397</del>
                                  </sup>
                                </h2>
                                <h1>Prime 3 In 1</h1> <img src={Tab3.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Prime Logo</h5>
                                <ul>
                                  <li>6 Logo Design Concepts</li>
                                  <li>By 5 Experienced Designers</li>
                                  <li>Unlimited Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Professional Branding</h5>
                                <ul>
                                  <li> Business Card Design</li>
                                  <li> Letter head Design</li>
                                  <li> Envelope Design</li>
                                  <li> MS Word Letterhead</li>
                                  <li> Email Signature Design</li>
                                  <li> Invoice Design</li>
                                  <li> Facebook Banner Design</li>
                                  <li> Youtube Banner Design</li>
                                  <li> Twitter Banner Design</li>
                                  <li> Linkedin Banner Design</li>
                                  <li> Logo Watermark</li>
                                  <li> Favicon Design</li>
                                  <li> Polo/T-Shirt Design</li>
                                  <li> Cap/Hat Design</li>
                                  <li> Bag Design</li>
                                  <li> Signage Design</li>
                                  <li> Flyer Design</li>
                                </ul>
                                <h5> 5-10 pages CMS</h5>
                                <ul>
                                  <li>5-10 Pages Custom Website</li>
                                  <li>CMS Admin Panel</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Page Layout</li>
                                  <li>Company Profile Section</li>
                                  <li>Main Product/Service Page</li>
                                  <li>Gallery Section</li>
                                  <li>Contact Us Section</li>
                                  <li>Inquiry Form</li>
                                  <li>Favicon Design</li>
                                  <li>Web Page Banners Design</li>
                                  <li>12 Royalty-Free Stock Images</li>
                                  <li>UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>
                                  $1899{" "}
                                  <sup class="del-price">
                                    <del>$1997</del>
                                  </sup>
                                </h2>
                                <h1>Deluxe 3 In 1</h1> <img src={Tab4.src} />
                              </div>
                              <div class="price-detail">
                                <h5>Deluxe Logo</h5>
                                <ul>
                                  <li>Unlimited Logo Concepts</li>
                                  <li>By 8 Experienced Designers</li>
                                  <li>Unlimited Revisions</li>
                                  <li>Dedicated Project Manager</li>
                                  <li>24 - 48 Hours Delivery</li>
                                </ul>
                                <h5>Corporate Branding </h5>
                                <ul>
                                  <li> Business Card</li>
                                  <li> Letter head</li>
                                  <li> Envelope</li>
                                  <li> MS Word Letterhead</li>
                                  <li> Email Signature</li>
                                  <li> Invoice</li>
                                  <li> Social Covers / Banners</li>
                                  <li> Watermark</li>
                                  <li> Icon Design</li>
                                  <li> T-Shirt</li>
                                  <li> Cap</li>
                                  <li> Bag</li>
                                  <li> Signage</li>
                                  <li> Flyer / Brochure</li>
                                  <li> Car Wrap / Stickers</li>
                                  <li> PPT</li>
                                  <li> Magnet</li>
                                  <li> Door Sign</li>
                                  <li> Menu Design</li>
                                  <li> Mug</li>
                                </ul>
                                <h5>Basic E-commerce</h5>
                                <ul>
                                  <li>Upto 10 Products & Categories</li>
                                  <li>Product Attributes & Features</li>
                                  <li>General Product Search</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Single Payment Module</li>
                                  <li>CMS Admin Panel</li>
                                  <li>Order Management System</li>
                                  <li>Newsletter Subscription</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banners</li>
                                  <li>8 Web Page Banners Design</li>
                                  <li>8 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="brook-portfolio-area pb--60 rslide"
            data-background="#ff5b51"
            id="branding-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="brook-section-title text-center">
                    <h2 class="heading-title text-white">Pricing</h2>
                    <h1 class="heading heading-h3 text-white">
                      Branding Businesses Is Our <br />
                      Passion And Profession
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      We’ve been building brands from scratch. Leave all your
                      design needs on us and get ready to see what great
                      designing feels and looks like.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="pricing-tabs">
                    <div class="tab-content">
                      <div class="tab-pane animated fadeIn active">
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$99</h2>
                                <h1>Starter</h1> <img src={Tab1.src} />
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Essential</h1> <img src={Tab2.src} />
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Professional</h1> <img src={Tab3.src} />
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Corporate</h1> <img src={Tab4.src} />
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="brook-portfolio-area pb--60 rslide"
            data-background="#ff5b51"
            id="web-package"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="brook-section-title mb--45 text-center">
                    <h2 class="heading-title text-white">Pricing</h2>
                    <h1 class="heading heading-h3 text-white">
                      Web Design And Development <br />
                      Soaring At Its Prime
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      With professional fleet of web developers and web design
                      strategists knowing out of the box strategies, we are
                      popular for delivering websites powered by traffic hungry
                      algorithms.
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
                          href="#html-price-tab"
                          id="html-price-tab-link"
                        >
                          {" "}
                          HTML{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#cms-price-tab"
                          id="cms-price-tab-link"
                        >
                          {" "}
                          CMS{" "}
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#e-commerce-price-tab"
                          id="e-commerce-price-tab-link"
                        >
                          {" "}
                          E-Commerce
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#portal-price-tab"
                          id="portal-price-tab-link"
                        >
                          {" "}
                          Portal{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div
                        id="html-price-tab"
                        class="tab-pane animated fadeIn active"
                      >
                        <br />
                        <div class="row justify-content-center mlr--7">
                          <div class="col-12 col-md-11">
                            <div class="single-picing single-picing-style">
                              <div class="row">
                                <div class="col-12">
                                  <h2
                                    class="html-heading01 text-center"
                                    style={{ color: "#fff" }}
                                  >
                                    HTML Features
                                  </h2>
                                  <p class="html-heading html-heading2 text-center ">
                                    We offer a full range of HTML-related
                                    services such as design, development,
                                    integration, migration, and support.
                                  </p>
                                </div>
                                <div class="col-xl-3 mt-3">
                                  <div class="single-pricing-head ">
                                    {" "}
                                    <img
                                      src="https://www.logura.com/assets/img/pricing-icons/5.png"
                                      width="30%"
                                    />
                                    <h5 style={{ color: "#fff" }}>
                                      HMTL Website Package
                                    </h5>
                                    <h6 style={{ color: "#fff" }}>
                                      <sup>$</sup>499
                                    </h6>
                                  </div>
                                  <div class="single-pricing-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payment");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>
                                  </div>
                                </div>
                                <div class="col-xl-9">
                                  <div class="row">
                                    <div class="col-xl-4 col-md-6">
                                      <div class="single-pricing-body">
                                        <ul>
                                          <li>
                                            <i class="fas fa-cog ca"></i>
                                            Product/Service Page
                                          </li>
                                          <li>
                                            <i class="fas fa-image ca"></i>
                                            Portfolio/Gallery Page
                                          </li>
                                          <li>
                                            <i class="fas fa-phone-laptop ca"></i>
                                            5 Pages Static Website
                                          </li>
                                          <li>
                                            <i class="fas fa-file-certificate ca"></i>
                                            W3C Certified HTML
                                          </li>
                                          <li>
                                            <i class="far fa-laptop-code ca"></i>
                                            JQuery Slider Banner
                                          </li>
                                          <li>
                                            <i class="fa fa-laptop ca"></i>
                                            Mobile Responsive Layout
                                          </li>
                                          <li>
                                            <i class="far fa-window-alt ca"></i>
                                            Home Page Layout
                                          </li>
                                          <li>
                                            <i class="fas fa-building ca"></i>
                                            Company Profile Page
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                      <div class="single-pricing-body single-pricing-body2">
                                        {/* <!--<h4>Logo Design</h4>--> */}
                                        <ul>
                                          <li>
                                            <i class="fas fa-address-card ca"></i>
                                            Contact Us Page
                                          </li>
                                          <li>
                                            <i class="fas fa-user-plus ca"></i>
                                            Lead Inquiry Form
                                          </li>
                                          <li>
                                            <i class="fas fa-pencil-ruler ca"></i>
                                            Website Favicon Design
                                          </li>
                                          <li>
                                            <i class="fas fa-image ca"></i> 5
                                            Web Page Banners Design
                                          </li>
                                          <li>
                                            <i class="fas fa-image ca"></i> 5
                                            Royalty-Free Stock Images
                                          </li>
                                          <li>
                                            <i class="fas fa-bezier-curve ca"></i>
                                            Advanced UI & Effects
                                          </li>
                                          <li>
                                            <i class="fas fa-share-alt ca"></i>
                                            Social Media Integrations
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 text-center my-auto">
                                      <img
                                        src="https://www.logura.com/assets/img/pricing-icons/certificate_b1DwBy0XX.png"
                                        class="gurantee"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="cms-price-tab" class="tab-pane animated fadeIn">
                        <br />
                        <div class="row justify-content-center mlr--7">
                          <div class="col-12 col-md-11">
                            <div class="single-picing single-picing-style">
                              <div class="row">
                                <div class="col-12">
                                  <h2 class="html-heading01 text-center">
                                    CMS Features
                                  </h2>
                                  <p class="html-heading html-heading2 text-center ">
                                    Manage and control all of your visual and
                                    textual content on your website via Content
                                    Management System (CMS).
                                  </p>
                                </div>
                                <div class="col-xl-3 mt-3">
                                  <div class="single-pricing-head ">
                                    {" "}
                                    <img
                                      src="https://www.logura.com/assets/img/pricing-icons/5.png"
                                      width="30%"
                                    />
                                    <h5 style={{ color: "#fff" }}>
                                      CMS Website Package
                                    </h5>
                                    <h6 style={{ color: "#fff" }}>
                                      <sup>$</sup>999
                                    </h6>
                                  </div>
                                  <div class="single-pricing-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/payment");
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>
                                  </div>
                                </div>
                                <div class="col-xl-9">
                                  <div class="row">
                                    <div class="col-xl-4 col-md-6">
                                      <div class="single-pricing-body">
                                        <ul>
                                          <li>
                                            <i class="fas fa-phone-laptop ca"></i>
                                            5-10 Pages Custom Website
                                          </li>
                                          <li>
                                            <i class="fas fa-user-cog ca"></i>
                                            CMS Admin Panel
                                          </li>
                                          <li>
                                            <i class="far fa-laptop-code ca"></i>
                                            JQuery Slider Banner
                                          </li>
                                          <li>
                                            <i class="fa fa-laptop ca"></i>
                                            Mobile Responsive
                                          </li>
                                          <li>
                                            <i class="far fa-laptop-code ca"></i>
                                            Home Page Layout
                                          </li>
                                          <li>
                                            <i class="fas fa-building ca"></i>
                                            Company Profile Section
                                          </li>
                                          <li>
                                            <i class="fas fa-cog ca"></i> Main
                                            Product/Service Page
                                          </li>
                                          <li>
                                            <i class="fas fa-image ca"></i>
                                            Portfolio/Gallery Section
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                      <div class="single-pricing-body single-pricing-body2">
                                        <ul>
                                          <li>
                                            <i class="fas fa-address-card ca"></i>
                                            Contact Us Section
                                          </li>
                                          <li>
                                            <i class="fas fa-user-plus ca"></i>
                                            Lead Inquiry Form
                                          </li>
                                          <li>
                                            <i class="fas fa-pencil-ruler ca"></i>
                                            Website Favicon Design
                                          </li>
                                          <li>
                                            <i class="far fa-laptop-code ca"></i>
                                            12 Web Page Banners Design
                                          </li>
                                          <li>
                                            <i class="fas fa-image ca"></i> 12
                                            Royalty-Free Stock Images
                                          </li>
                                          <li>
                                            <i class="fas fa-bezier-curve ca"></i>
                                            Advanced UI & Effects
                                          </li>
                                          <li>
                                            <i class="fas fa-share-alt ca"></i>
                                            Social Media Integrations
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 text-center my-auto">
                                      <img
                                        src="https://www.logura.com/assets/img/pricing-icons/certificate_b1DwBy0XX.png"
                                        class="gurantee"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="e-commerce-price-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$1499</h2>
                                <h1>Basic</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Upto 10 Products & Categories</li>
                                  <li>Product Attributes & Features</li>
                                  <li>General Product Search</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Single Payment Module</li>
                                  <li>CMS Admin Panel</li>
                                  <li>Order Management System</li>
                                  <li>Newsletter Subscription</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banners</li>
                                  <li>8 Web Page Banners Design</li>
                                  <li>8 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$2499</h2>
                                <h1>Extended</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Upto 25 Products & Categories</li>
                                  <li>Product Attributes & Features</li>
                                  <li>Product Search</li>
                                  <li>Product Filtration</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Upto 2 Payment Modules</li>
                                  <li>CMS Admin Panel</li>
                                  <li>Order Management System</li>
                                  <li>Newsletter Subscription</li>
                                  <li>Website Blog Section</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>12 Web Page Banners Design</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$3999</h2>
                                <h1>Professional</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Upto 50 Products & Categories</li>
                                  <li>Product Attributes & Features</li>
                                  <li>Product Search & Filtration</li>
                                  <li>Product Reviews & Rating</li>
                                  <li>Product Favorites & Wishlist</li>
                                  <li>Spreadsheet Products Import</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Promo Code/Coupon Feature</li>
                                  <li>Upto 3 Payment Modules</li>
                                  <li>CMS Admin Panel</li>
                                  <li>Order Management System</li>
                                  <li>Inventory Management</li>
                                  <li>Order Shipment & Tracking</li>
                                  <li>User Signup & Login</li>
                                  <li>Personalized User Dashboard</li>
                                  <li>Newsletter Subscription</li>
                                  <li>Website Blog Section</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>12 Web Page Banners Design</li>
                                  <li>12 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$5999</h2>
                                <h1>Enterprise</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/7.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Upto 100 Products & Categories</li>
                                  <li>Product Attributes & Features</li>
                                  <li>Product Search & Filtration</li>
                                  <li>Product Reviews & Rating</li>
                                  <li>Product Favorites & Wishlist</li>
                                  <li>Spreadsheet Products Import</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Promo Code/Coupon Feature</li>
                                  <li>Spreadsheet Products Import</li>
                                  <li>Multiple Payment Modules</li>
                                  <li>CMS Admin Panel</li>
                                  <li>Order Management System</li>
                                  <li>Inventory Management</li>
                                  <li>Sales Reporting Feature</li>
                                  <li>Order Shipment & Tracking</li>
                                  <li>User Signup & Login</li>
                                  <li>Personalized User Dashboard</li>
                                  <li>Newsletter Subscription</li>
                                  <li>Website Blog Section</li>
                                  <li>Newsletter Subscription</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>12 Web Page Banners Design</li>
                                  <li>12 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="portal-price-tab"
                        class="tab-pane animated fadeIn"
                      >
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>Portal</h2>
                                <h1>Product Based</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/8.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Unlimited Sellers</li>
                                  <li>Unlimited Selling Products</li>
                                  <li>Unlimited Categories/Industries</li>
                                  <li>Products Attributes & Features</li>
                                  <li>Products Search & Filtration</li>
                                  <li>Product Reviews & Rating</li>
                                  <li>Seller Reviews & Rating</li>
                                  <li>Seller Login & Dashboard</li>
                                  <li>Clients Login & Dashboard</li>
                                  <li>Shopping Cart Integration</li>
                                  <li>Promo Code/Coupon Feature</li>
                                  <li>Multiple Payment Options</li>
                                  <li>Seller Inventory Management</li>
                                  <li>Order Shipment & Tracking</li>
                                  <li>Newsletter Subscription</li>
                                  <li>Admin Control Panel</li>
                                  <li>Paid Advertising & Ads Placement</li>
                                  <li>Website Blog Section</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banners</li>
                                  <li>Web Page Banners Design</li>
                                  <li>Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                  <li>3 Month LiveChat Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  class="theme-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  Discuss Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>Portal</h2>
                                <h1>Service Based</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/8.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Unlimited Providers</li>
                                  <li>Unlimited Service Offerings</li>
                                  <li>Unlimited Categories/Industries</li>
                                  <li>Services Attributes & Features</li>
                                  <li>Services Search & Filtration</li>
                                  <li>Service Reviews & Rating</li>
                                  <li>Provider Reviews & Rating</li>
                                  <li>Provider Login & Dashboard</li>
                                  <li>Clients Login & Dashboard</li>
                                  <li>Checkout Integration</li>
                                  <li>Promo Code/Coupon Feature</li>
                                  <li>Multiple Payment Options</li>
                                  <li>Order Status & Progress</li>
                                  <li>Newsletter Subscription</li>
                                  <li>Website Blog Section</li>
                                  <li>Admin Control Panel</li>
                                  <li>Paid Advertising & Ads Placement</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>JQuery Slider Banners</li>
                                  <li>Web Page Banners Design</li>
                                  <li>Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  {/* <!--<li>Business Domain Emails</li>--> */}
                                  <li>3 Month LiveChat Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  class="theme-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  Discuss Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>Portal</h2>
                                <h1>Networking Based</h1> <img />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>Unlimited Users</li>
                                  <li>Multiple User Profiles & Pages</li>
                                  <li>Unlimited Groups/Communities</li>
                                  <li>Users Login & Dashboard</li>
                                  <li>1-on-1 Chats & Messages</li>
                                  <li>Multiple Chat rooms</li>
                                  <li>User Connections & Invitations</li>
                                  <li>Users Networking Circle</li>
                                  <li>User Profile Banners & Pictures</li>
                                  <li>Users Posts & Interactions</li>
                                  <li>Users Staus Online/Offline</li>
                                  <li>Posts/Media Sharing & Tagging</li>
                                  <li>User Privacy Settings</li>
                                  <li>MySQL Database Creation</li>
                                  <li>Website Favicon Design</li>
                                  <li>Admin Control Panel</li>
                                  <li>Paid Advertising & Ads Placement</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Advance UI & Effects</li>
                                  <li>i.e Job Portals</li>
                                  <li>i.e Social Networking Sites</li>
                                  <li>i.e Dating Portals</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  class="theme-btn"
                                  href="javascript:void(Tawk_API.toggle())"
                                >
                                  Discuss Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="brook-portfolio-area pb--60 rslide"
            data-background="#ff5b51"
            id="video-animation-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="brook-section-title text-center">
                    <h2 class="heading-title text-white">Pricing</h2>
                    <h1 class="heading heading-h3 text-white">
                      Inspiring Designs With
                      <br />
                      Pocket-Friendly Pricing
                    </h1>
                    <h6 class="heading heading-h6 text-white letter-spacing-1">
                      Affordable yet unique digital creative and design services
                      that are tailor-made
                      <br />
                      according to your personalized needs. We mean your
                      business.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="pricing-tabs">
                    <ul class="nav nav-tabs">
                      {/* <!--<li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#logo-tab"> Logo Design </a> </li>-->
                                  <!-- <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#branding-tab"> Branding </a> </li>--> */}
                    </ul>
                    <div class="tab-content">
                      <div
                        id="logo-tab"
                        class="tab-pane animated fadeIn active"
                      >
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$499</h2>
                                <h1>Basic</h1> <img src={Tab1.src} />
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
                                <h5>What you will Get?</h5>
                                <ul>
                                  <li>MP4</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-399-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Standard</h1> <img src={Tab2.src} />
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
                                <h5>What you will Get?</h5>
                                <ul>
                                  <li>MP4, MOV</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Prime</h1> <img src={Tab3.src} />
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
                                <h5>What you will Get?</h5>
                                <ul>
                                  <li>MP4, MOV, WAV</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>Deluxe</h1> <img src={Tab4.src} />
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
                                <h5>What you will Get?</h5>
                                <ul>
                                  <li>MP4, MOV, WAV, GIF</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="branding-tab" class="tab-pane animated fadeIn">
                        <br />
                        <div class="row mlr--7">
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$399</h2>
                                <h1>Single Page</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/6.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>1 Page Custom Website</li>
                                  <li>CMS Admin Panel</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Company Profile Section</li>
                                  <li>Products/Services Section</li>
                                  <li>Portfolio/Gallery Section</li>
                                  <li>Contact Us Section</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>Royalty Free Stock Image</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  <li>Business Domain Emails</li>
                                  <li>LiveChat Tool Integration</li>
                                  <li>3 Month LiveChat Agent</li>
                                  <li>3 Month LiveChat Support Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>5 Pages</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/6.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>5 Pages Custom Website</li>
                                  <li>CMS Admin Panel</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Home Page Layout</li>
                                  <li>Company Profile Section</li>
                                  <li>Products/Services Section</li>
                                  <li>Portfolio/Gallery Section</li>
                                  <li>Contact Us Section</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>5 Web Page Banners Design</li>
                                  <li>5 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  <li>Business Domain Emails</li>
                                  <li>3 Month LiveChat Agent</li>
                                  <li>3 Month LiveChat Support Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
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
                                <h1>8 Pages</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/6.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>8 Pages Custom Website</li>
                                  <li>CMS Admin Panel</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Home Page Layout</li>
                                  <li>Company Profile Section</li>
                                  <li>Main Product/Service Page</li>
                                  <li>Products/Services Section</li>
                                  <li>Portfolio/Gallery Section</li>
                                  <li>Contact Us Section</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>8 Web Page Banners Design</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  <li>Business Domain Emails</li>
                                  <li>3 Month LiveChat Agent</li>
                                  <li>3 Month LiveChat Support Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 plr-7">
                            <div class="single-pricing">
                              <div class="price-header">
                                <h2>$1299</h2>
                                <h1>12 Pages</h1>{" "}
                                <img src="https://www.logura.com/assets/img/pricing-icons/6.png" />
                              </div>
                              <div class="price-detail">
                                <h5>Features</h5>
                                <ul>
                                  <li>12 Pages Custom Website</li>
                                  <li>CMS Admin Panel</li>
                                  <li>JQuery Slider Banner</li>
                                  <li>Mobile Responsive Layout</li>
                                  <li>Home Page Layout</li>
                                  <li>Company Profile Section</li>
                                  <li>Main Product/Service Page</li>
                                  <li>Portfolio/Gallery Section</li>
                                  <li>Contact Us Section</li>
                                  <li>Lead Inquiry Form</li>
                                  <li>Website Favicon Design</li>
                                  <li>12 Web Page Banners Design</li>
                                  <li>12 Royalty Free Stock Images</li>
                                  <li>Advance UI & Effects</li>
                                  <li>Social Media Integrations</li>
                                  <li>Business Domain Emails</li>
                                  <li>3 Month LiveChat Agent</li>
                                  <li>3 Month LiveChat Support Agent</li>
                                </ul>
                              </div>
                              <div class="price-link">
                                {" "}
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/payment");
                                  }}
                                  data-detail="USD-100-Item Name-Category"
                                  class="theme-btn pay-now-btn"
                                >
                                  Order Now
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default PricingTab;
