// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import styles from "./Header.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
// import Image from "next/image";
// // import DesignPerrecto from "assets/logo-designperfecto.png";
// import DesignPerrecto from "../../assets/img/logo-designperfecto.png";
// import { useRouter } from "next/router";

// function Header() {
//   const router = useRouter();

//   return (
//     // <Navbar className={styles["header-section"]} expand="lg">
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">
//           {/* <Image
//             src={DesignPerrecto}
//             alt="Picture of the author"
//             width={90}
//             height={20}
//           /> */}
//           <div
//             // _ngcontent-iyj-c40=""
//             className="logo"
//             style={{
//               maxWidth: "150px",
//               // marginLeft: "60px",
//               // marginRight: "50px",
//             }}
//           >
//             <img
//               // _ngcontent-iyj-c40=""
//               src={DesignPerrecto.src}
//               alt="Images"
//               loading="lazy"
//               style={{
//                 maxHeight: "47px",
//                 // marginLeft: "60px",
//                 // marginRight: "50px",
//               }}
//             />
//           </div>
//           {/* <DesignPerrecto /> */}
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="navbar-light navbar-toggler-icon"
//         >
//           <Nav>
//             <Nav.Link
//               className="text-secondary"
//               onClick={(e) => {
//                 e.preventDefault();
//                 router.push("/home");
//               }}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               // onClick={() => router.push("/logo-branding")}
//               onClick={(e) => {
//                 e.preventDefault();
//                 router.push("/logo-branding");
//               }}
//               color="primary"
//             >
//               Logo & Branding
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               // onClick={() => router.push("/web-design")}
//               onClick={(e) => {
//                 e.preventDefault();
//                 router.push("/web-design");
//               }}
//             >
//               Website
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               // onClick={() => router.push("/video-animation")}
//               onClick={(e) => {
//                 e.preventDefault();
//                 router.push("/video-animation");
//               }}
//             >
//               Video Animation
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               onClick={() => router.push("/portfolio")}
//             >
//               Mobile App
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               onClick={() => router.push("/pricing")}
//             >
//               Pricing
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               onClick={() => router.push("/about-us")}
//             >
//               About Us
//             </Nav.Link>
//             <Nav.Link
//               className="text-secondary"
//               onClick={() => router.push("/logo-branding")}
//             >
//               <BsFillTelephoneFill color="#999da0" /> 307-225-2715
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import React from "react";
import DesignPerfecto from "../../assets/img/webicon.png";
import { useRouter } from "next/router";
import Router from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    // <!-- Header -->

    <nav
      className="navbar navbar-expand-lg navbar-dark zIndex"
      style={{
        paddingTop: "8px !important",
        paddingBottom: "8px !important",
        backgroundColor: "#343a40",
        zIndex: "9999 !important",
      }}
    >
      <div className="header-left flex-20">
        <div
          className="logo"
          style={{
            maxWidth: "150px",
            marginLeft: "60px",
            marginRight: "50px",
          }}
        >
          {" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              Router.push("/home");
            }}
          >
            {" "}
            <img
              // src="../../../assets/img/webicon.png"
              src={DesignPerfecto.src}
              alt="Images"
              loading="lazy"
            />
          </a>{" "}
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="header-flex-right flex-80" style={{ marginLeft: "40px" }}>
          <div className="">
            <ul className="mainmenu navbar-nav">
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a className="nav-link">
                  <span
                    className="link-styling"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/home");
                    }}
                  >
                    Home
                  </span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a className="nav-link">
                  <span
                    className="link-styling"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/logo-branding");
                    }}
                  >
                    Logo & Branding
                  </span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a className="nav-link">
                  <span
                    className="link-styling"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/web-design");
                    }}
                  >
                    Website
                  </span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a className="nav-link">
                  <span
                    className="link-styling"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/video-animation");
                    }}
                  >
                    Video Animation
                  </span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    Router.push("/mobileapp");
                  }}
                >
                  <span className="link-styling">Mobile App</span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    Router.push("/portfolio");
                  }}
                >
                  <span className="link-styling">Portfolio</span>
                </a>
              </li>
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    Router.push("/pricing");
                  }}
                >
                  <span className="link-styling">Pricing</span>
                </a>
              </li>
              {/* <!--<li className="lavel-1"><a href="/blog"><span>Blog</span></a></li>--> */}
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    Router.push("/about-us");
                  }}
                >
                  <span className="link-styling">About Us</span>
                </a>
              </li>
              {/* <!-- <li className="lavel-1"><a href="/contact"><span>Contact</span></a></li>--> */}
              <li
                className="lavel-1 nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a className="contact-num-header nav-link">
                  {/* <i className="fa fa-phone flip-mr-5"></i>{" "} */}
                  <BsFillTelephoneFill color="#999da0" />
                  <span className="link-styling">307-225-2715</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
