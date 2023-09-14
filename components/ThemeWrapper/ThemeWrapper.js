// import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// // import PropTypes from "prop-types";
// import combinedTheme from "../../theme/Index";
// // import { useSelector } from "react-redux";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#ffffff",
//       type: "light",
//     },
//   },
// });

// const ThemeWrapper = ({ children }) => {
//   // const selectedTheme = useSelector((state) => state.general.theme);
//   return (
//     // <ThemeProvider theme={combinedTheme[selectedTheme]}>
//     <ThemeProvider theme={combinedTheme[theme]}>{children}</ThemeProvider>
//   );
// };

// export default ThemeWrapper;

// // import React from "react";
// // import { ThemeProvider } from "@mui/material/styles";
// // import PropTypes from "prop-types";
// // import { combinedTheme } from "@theme/index";
// // import combinedTheme from "../../theme/Index";
// // import { useSelector } from "react-redux";

// // const ThemeWrapper = ({ children }) => {
// //   const selectedTheme = useSelector((state) => state.general.theme);
// //   return (
// //     <ThemeProvider theme={combinedTheme[selectedTheme]}>
// //       {children}
// //     </ThemeProvider>
// //   );
// // };

// // ThemeWrapper.propTypes = {
// //   children: PropTypes.node,
// // };

// // export default ThemeWrapper;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
// import { combinedTheme } from "@theme/index";s
import combinedTheme from "../../theme/Index";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/light.theme";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FFFFFF",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const ThemeWrapper = ({ children }) => {
  const selectedTheme = useSelector((state) => state.general.theme);
  console.log(selectedTheme, "selectedTheme");
  return (
    // <ThemeProvider theme={combinedTheme[selectedTheme]}>
    // <ThemeProvider theme={combinedTheme["light"]}>{children}</ThemeProvider>
    <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

export default ThemeWrapper;
