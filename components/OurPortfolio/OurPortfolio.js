import React from "react";
import Image from "next/image";
import Image1 from "../../assets/img/portfolio/portfolio/1.jpg";
import Image2 from "../../assets/img/portfolio/portfolio/2.jpg";
import Image3 from "../../assets/img/portfolio/portfolio/3.jpg";
import Image4 from "../../assets/img/portfolio/portfolio/4.jpg";
import Image5 from "../../assets/img/portfolio/portfolio/5.jpg";
import Image6 from "../../assets/img/portfolio/portfolio/6.jpg";
import Image7 from "../../assets/img/portfolio/portfolio/7.jpg";
import Image8 from "../../assets/img/portfolio/portfolio/8.jpg";
import Image9 from "../../assets/img/portfolio/portfolio/9.jpg";
import Image10 from "../../assets/img/portfolio/portfolio/10.jpg";
import Image11 from "../../assets/img/portfolio/portfolio/11.jpg";
import Image12 from "../../assets/img/portfolio/portfolio/12.jpg";
import Image13 from "../../assets/img/portfolio/portfolio/13.jpg";
import Image14 from "../../assets/img/portfolio/portfolio/14.jpg";
import Image15 from "../../assets/img/portfolio/portfolio/15.jpg";
import Image16 from "../../assets/img/portfolio/portfolio/16.jpg";
import Image17 from "../../assets/img/portfolio/portfolio/17.jpg";
import Image18 from "../../assets/img/portfolio/portfolio/18.jpg";
import Image19 from "../../assets/img/portfolio/portfolio/19.jpg";
import Image20 from "../../assets/img/portfolio/portfolio/20.jpg";
import Image21 from "../../assets/img/portfolio/portfolio/21.jpg";
import Image22 from "../../assets/img/portfolio/portfolio/22.jpg";
import Image23 from "../../assets/img/portfolio/portfolio/23.jpg";
import Image24 from "../../assets/img/portfolio/portfolio/24.jpg";
import Image25 from "../../assets/img/portfolio/portfolio/25.jpg";
import Image26 from "../../assets/img/portfolio/portfolio/26.jpg";
import Image27 from "../../assets/img/portfolio/portfolio/28.jpg";
import Image28 from "../../assets/img/portfolio/portfolio/29.jpg";
import { styled } from "@mui/system";

export const OurPortfolioWrapper = styled("div")({
  position: "relative",
  ".text": {
    zIndex: 999,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // textAlign: "center",
    h1: {
      fontSize: "50px",
      fontWeight: 700,
      padding: "10px 0",
      letterSpacing: 0,
      lineHeight: "1.23",
      margin: 0,
      color: "#fff !important",
      fontFamily: "poppin",
      marginBottom: "30px",
      textAlign: "center",
      "@media(max-width: 768px)": {
        fontSize: "30px",
      },
    },
    h6: {
      letterSpacing: "1px",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
      textAlign: "center !important",
      color: "#fff !important",
      fontFamily: "poppin",
      "@media(max-width: 768px)": {
        fontSize: "18px",
      },
    },
  },
  ul: {
    width: "100%",
    boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
    padding: 0,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "repeat(7, auto)",
    "@media(max-width: 768px)": {
      gridTemplateColumns: "repeat(3, auto)",
      height: "100vh",
      overflow: "hidden",
    },
    listStyleType: "none",
    li: {
      transform: "scale(1)",
      opacity: "0.3",
      transition: ".5s all ease",
      ":hover": {
        transform: "scale(1.3)",
        opacity: "0.9",
      },
    },
  },
  // display: "flex",
  // justifyContent: "space-between",
  color: "#fff",
  backgroundColor: "#1c1c1c",
  // ".footer": {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(5,1fr)",
  //   // backgroundColor: "red",
  // },
  // ".footer-link": {
  //   width: "100%",
  //   color: "#787878",
  //   fontSize: "1.4rem",
  //   fontWeight: "500",
  //   display: "inline-block",
  //   padding: "2px 0",
  // },
  // ".Headings": {
  //   color: "#fff",
  //   fontSize: "1.6rem",
  //   fontWeight: "500",
  //   margin: "0",
  // },
});

const OurPortfolio = () => {
  return (
    <OurPortfolioWrapper>
      <div className="text">
        <h1>
          Our Portfolio Speaks <br /> Louder Than Words
        </h1>
        <h6 className="heading heading-h6 text-white letter-spacing-1">
          We are known to set the bar of creativity high. We’ve got a track
          record of <br /> delivering brilliance mixed with creativity, zeal,
          passion and persistence.
        </h6>
      </div>
      <ul>
        <li>
          <a href="#">
            <img src={Image1.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image2.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image3.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image4.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image5.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image6.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image7.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image8.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image9.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image10.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image11.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image12.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image13.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image14.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image15.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image16.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image17.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image18.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image19.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image20.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image21.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image22.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image23.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image24.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image25.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image26.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image27.src} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image28.src} alt="" />
          </a>
        </li>
      </ul>
    </OurPortfolioWrapper>
  );
};

export default OurPortfolio;
