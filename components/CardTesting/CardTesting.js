// import { CARD_TYPE, CVV_TYPE, ACH_TYPE } from "@cardknox/react-ifields";
// import IField from "@cardknox/react-ifields";
// import { useState } from "react";
// import { getTokens } from "@cardknox/react-ifields";

// const index = () => {
//   const [account, setAccount] = useState({
//     xKey: "desigperfellcckg082cf83f5f874f91a2bae9c9e08ee",
//     xSoftwareName: "DesignPerfecto",
//     xSoftwareVersion: "0.1.0",
//   });
//   const [option, setOption] = useState({
//     autoSubmit: true,
//     autoSubmitFormId: "form",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Button Submitted");
//   };
//   const handleIframeSubmit = (data) => {
//     console.log(data);
//   };

//   // Submitting data form
//   if (typeof window === "object") {
//     console.log("its a type of widow");
//     const paymentId = document.getElementById("payment-form");
//     paymentId.addEventListener("submit", function (e) {
//       e.preventDefault();
//       var submitBtn = document.getElementById("submit-btn");
//       submitBtn.disabled = true;
//       console.log("submit is working");
//       console.log(getTokens);

//       getTokens(
//         function () {
//           document.getElementById("payment-form").submit();
//         },
//         function () {
//           //onError
//           submitBtn.disabled = false;
//         },
//         30000 //30 second timeout
//       );
//     });
//   }
//   // setAccount("your-public-facing-key", "your-software-name", "0.1.2");
//   // document.getElementById('payment-form').addEventListener('submit', function(e){
//   //     e.preventDefault();
//   //     var submitBtn = document.getElementById('submit-btn');
//   //     submitBtn.disabled = true;
//   //     getTokens(
//   //         function() {
//   //             document.getElementById('payment-form').submit();
//   //         },
//   //         function() { //onError
//   //             submitBtn.disabled = false;
//   //         },
//   //         30000, //30 second timeout
//   //     );
//   // });

//   return (
//     <form
//       // onSubmit={handleSubmit}
//       // style={{ backgroundColor: "red" }}
//       id="payment-form"
//       method="POST"
//     >
//       {/* <input type="text" placeholder="text field" /> <br />{" "}
//       <IField
//         options={option}
//         type={CARD_TYPE}
//         account={account}
//         onSubmit={handleIframeSubmit}
//       />
//       <button type="submit" style={{ backgroundColor: "black", color: "#fff" }}>
//         Submit
//       </button> */}
//       {/* <IField
//         data-ifields-id="ach"
//         data-ifields-placeholder="Checking Account Number"
//       />
//       <IField
//         data-ifields-id="card-number"
//         data-ifields-placeholder="Card Number"
//       />
//       <IField data-ifields-id="cvv" data-ifields-placeholder="CVV" />
//       <input name="xACH" data-ifields-id="ach-token" type="hidden" />
//       <input name="xCVV" type="hidden" data-ifields-id="cvv-token" />
//       <input
//         name="xCardNum"
//         type="hidden"
//         data-ifields-id="card-number-token"
//       /> */}
//       <iframe
//         data-ifields-id="ach"
//         data-ifields-placeholder="Checking Account Number"
//         src="https://cdn.cardknox.com/ifields/2.13.2204.1401/ifield.htm"
//       ></iframe>
//       <input data-ifields-id="ach-token" name="xACH" type="hidden" />
//       <iframe
//         data-ifields-id="card-number"
//         data-ifields-placeholder="Card Number"
//         src="https://cdn.cardknox.com/ifields/2.13.2204.1401/ifield.htm"
//       ></iframe>
//       <input
//         data-ifields-id="card-number-token"
//         name="xCardNum"
//         type="hidden"
//       />
//       <iframe
//         data-ifields-id="cvv"
//         data-ifields-placeholder="CVV"
//         src="https://cdn.cardknox.com/ifields/2.13.2204.1401/ifield.htm"
//       ></iframe>
//       <input data-ifields-id="cvv-token" name="xCVV" type="hidden" />
//       {/*        <!--And a field for all errors from the iFields--> */}
//       <label id="transaction-status"></label>
//       <label
//         data-ifields-id="card-data-error"
//         style={{ color: "green" }}
//       ></label>

//       {/* <!--Submit button--> */}
//       <input id="submit-btn" type="submit" value="Submit" />
//     </form>
//   );
// };

// export default index;

import React from "react";
import { CARD_TYPE, CVV_TYPE, ACH_TYPE } from "@cardknox/react-ifields";
import IField from "@cardknox/react-ifields";

const index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form onSubmit={handleSubmit}>
      <IField
        options={option}
        type={CARD_TYPE}
        account={account}
        onSubmit={handleIframeSubmit}
      />
      <button type="submit">submit button</button>
    </form>
  );
};

export default index;
