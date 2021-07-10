import React from "react";
import LogoImg from "../../media/logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div id="logo_container">
    <img
      src={LogoImg}
      alt="strides_logo"
      id="logo_img"
      className={props.imgSize}
    />
  </div>
);

export default Logo;
