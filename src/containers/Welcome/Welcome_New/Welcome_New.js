import React, { Component } from "react";
import Logo from "../../../components/Logo/Logo";
import UserIcon from "../../../components/UserIcon/UserIcon";
import "./Welcome_New.css";

class Welcome_New extends Component {
  render() {
    return (
      <div id="welcome-new_wrapper">
        <UserIcon />
        <Logo imgSize="sm" />
      </div>
    );
  }
}

export default Welcome_New;
