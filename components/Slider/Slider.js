import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import styles from "./Slider.module.css";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Responsive = {
  0: { items: 2 },
  768: { items: 3 },
  1024: { items: 5 },
};

const Slider = ({ Images }) => {
  return (
    <OwlCarousel
      responsive={Responsive}
      // items={5}
      // className="owl-theme"
      loop
      nav={false}
      dots={false}
      autoplay
      // style={{ ".owl-carousel .owl-rtl": { direction: "ltr" } }}
    >
      {Images.map((img) => (
        <div className="carousel-Items">{img}</div>
      ))}
    </OwlCarousel>
  );
};

export default Slider;
