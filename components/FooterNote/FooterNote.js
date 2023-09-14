import React from "react";
import PartnerImages from "../../assets/img/partners-logo.png";
import Image from 'next/image'
import { styled } from "@mui/system";

export const FooterNoteWrapper = styled("div")({
display:"flex",
justifyContent:"space-between",
color:"#fff",
".copyRight":{
  alignSelf:"center",
},
".payment":{
  "p":{
marginBottom:0 }
}

});
const FooterNote = () => {
  return (
    <div style={{backgroundColor:"#3d3b3c"}}>
    <FooterNoteWrapper className="container">
      <div className="copyRight">Copyright © 2022 Design Perfecto. All rights reserved</div>
      <div className="payment">
        <p> EASY AND SECURE PAYMENT</p>
        <Image
      src={PartnerImages}
      alt="Picture of the author"
      // objectFit
      // width={500}
      // height={500}
    />
      </div>
    </FooterNoteWrapper>
     </div>
  );
};

export default FooterNote;
