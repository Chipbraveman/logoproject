// import React, { useEffect } from "react";

// // import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
// // import { Fancybox as NativeFancybox } from "@fancyapps/fancybox";
// // import "@fancyapps/ui/dist/fancybox/fancybox.css";

// function Fancybox(props) {
//   const delegate = props.delegate || "[data-fancybox]";

//   useEffect(() => {
//     const opts = props.options || {};

//     console.log("rerunning!");

//     NativeFancybox.bind(delegate, opts);

//     return () => {
//       NativeFancybox.destroy();
//     };
//   }, [delegate, props.options]);

//   return <>{props.children}</>;
// }

// export default Fancybox;
