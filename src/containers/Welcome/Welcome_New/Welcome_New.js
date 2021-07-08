import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FooterMenu from "../../../components/FooterMenu/FooterMenu";
import Logo from "../../../components/Logo/Logo";
import UserIcon from "../../../components/UserIcon/UserIcon";
import "./Welcome_New.css";

class Welcome_New extends Component {
  handleDetails = () => this.props.history.push("/profile/account");

  render() {
    return (
      <div id="welcome-new_wrapper">
        <UserIcon profileRoute={this.handleDetails} iconSize="sm" />
        <Logo imgSize="sm" />
        <h1 className="welcome-title">Hello Rachel!</h1>
        <div className="training-wrapper">
          You don't have a training plan yet
        </div>
        <div className="mb-2 centered-button">
          <Button variant="primary" size="lg" id="training-button">
            Get Started!
          </Button>
        </div>
        <FooterMenu />
      </div>
    );
  }
}

export default Welcome_New;
