import React, { Component } from "react";
import LogoImg from "../../media/logo.png";
import "./Logo.css";

class Logo extends Component {
  render() {
    return (
      <div id="logo_container">
        <img
          src={LogoImg}
          alt="strides_logo"
          id="logo_img"
          style={this.props.customisedStyle}
        />
      </div>
    );
  }
}

export default Logo;
