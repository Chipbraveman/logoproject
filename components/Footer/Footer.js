import React from "react";
import webicon from "../../assets/img/webicon.png";
import { useRouter } from "next/router";
import PartnerImages from "../../assets/img/partners-logo.png";
import TrustPilot from "../../assets/img/icons/Trustpilot.svg";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsMarker,
  BsPhone,
  BsGeoAltFill,
} from "react-icons/bs";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icons";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className="brook-footer-area rslide"
      style={{ backgroundColor: "#fea300" }}
    >
      <div className="footer-top-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer-logo-sec">
              {" "}
              <img
                // src="../../../assets/img/webicon.png"
                src={webicon.src}
                // style="min-width:180px; max-width:180px;"
                // style={{ minWidth: "180px", maxWidth: "180px" }}
                alt="Brook Images"
                loading="lazy"
              />
              <ul>
                <li>
                  Our goal is to make your company proud. Our expert digital
                  marketing strategists, Content Rookies, Logo Artists, and Web
                  Development Gurus have stepped up the game of digitizing
                  companies.{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6>Links</h6>
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/about-us");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/privacy");
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/privacy");
                    }}
                  >
                    Terms And Conditions
                  </a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6>Portfolio</h6>
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/logo-branding");
                    }}
                  >
                    Logo Design
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/logo-branding");
                    }}
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    Website Design
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/video-animation");
                    }}
                  >
                    Video Animation
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6>Pricing Packages</h6>
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/pricing");
                    }}
                  >
                    All In 1
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/logo-branding");
                    }}
                  >
                    Logo & Branding
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    Logo Design
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    HTML Website
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    CMS Website
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/web-design");
                    }}
                  >
                    Portal Site
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              {/* <!--<h6>Newletter Subsciption</h6> <ul> <li>Sign up for free newsletters & get more Design Evelop delivered to you</li> </ul> <div className="footer-newsletter"> <input type="text" className="footer-newsletter-input" placeholder="Email"> <input type="submit" className="footer-newsletter-submit" value="Submit"> </div>--> */}
              <h6>Contact Our Team</h6>
              <ul>
                <li
                  className="contact-text"
                  style={{
                    paddingLeft: "0",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  {/* <i
                    className="fas fa-phone icon"
                    // style="transform: scaleX(-1);"
                    style={{ transform: "ScaleX(-1)" }}
                  ></i>{" "} */}
                  {/* <BsEnvelope
                    style={{ transform: "ScaleX(-1)" }}
                    color="#fe882b"
                  /> */}
                  <BsFillTelephoneFill
                    style={{ display: "block" }}
                    color="#fe882b"
                  />
                  <a
                    style={{ display: "block", marginLeft: "6px" }}
                    href="tel:03072252715"
                  >
                    307-225-2715
                  </a>
                </li>
                {/* <!-- <li className="contact-text"><i className="fas fa-phone icon" style="transform: scaleX(-1);"></i> <a
                                href="tel:347-394-2571">----------</a></li> --> */}
                <li
                  className="contact-text"
                  style={{
                    paddingLeft: "0",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  {/* <i className="far fa-envelope icon"></i>{" "} */}
                  {/* <BsEnvelope color="#fe882b" /> */}
                  <BsEnvelope style={{ display: "block" }} color="#fe882b" />
                  <a
                    style={{ display: "block", marginLeft: "6px" }}
                    href="mailto:info@designperfecto.com"
                  >
                    info@designperfecto.com
                  </a>
                </li>
                <li
                  className="contact-text"
                  style={{
                    paddingLeft: "0",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  {/* <i className="fas fa-map-marker-alt icon"></i>{" "} */}
                  {/* <BsMarker color="#fe882b" /> */}
                  <MdLocationOn
                    style={{ display: "block", fontSize: "24px" }}
                    color="#fe882b"
                  />
                  <a
                    style={{ display: "block", marginLeft: "6px" }}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   router.push("/contact-us");
                    // }}
                  >
                    Mailing Address: 30 N Gould St Ste 29794 Sheridan, WY 82801.
                  </a>
                </li>
              </ul>
              <ul>
                {" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100089208077418&mibextid=LQQJ4d"
                  target="_blank"
                >
                  {/* <i className="fab fa-facebook-f social"></i> */}
                  <BsFacebook color="#fe882b" />
                </a>{" "}
                {/* <a>
                  <BsTwitter color="#fe882b" />
                </a> */}
                <a
                  href="https://instagram.com/designperfectollc?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  {/* <i className="fab fa-brands fa-instagram social"></i> */}
                  <BsInstagram color="#fe882b" />
                </a>{" "}
                <a
                  href="https://www.trustpilot.com/review/designperfecto.com"
                  target="_blank"
                >
                  {/* <i className="fab fa-brands fa-instagram social"></i> */}
                  {/* <TrustPilot /> */}
                  <img src={TrustPilot.src} alt="" />
                  {/* <TrustPilot /> */}
                </a>{" "}
                {/* <a>
                  <BsPinterest color="#fe882b" />
                </a>{" "} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-2">
        <div className="container">
          <div className="left-par">
            {" "}
            Copyright © 2023 Design Perfecto. All rights reserved{" "}
          </div>
          <div className="right-par">
            {" "}
            EASY AND SECURE PAYMENT
            <br />{" "}
            <img
              // src="../../../assets/img/partners-logo.png"
              src={PartnerImages.src}
              loading="lazy"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
