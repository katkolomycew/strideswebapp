import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../components/Logo/Logo";
import "./Home.css";

class Home extends Component {
  onSignup = () => this.props.history.push("/signup");
  onLogin = () => this.props.history.push("/login");

  render() {
    return (
      <div id="home_wrapper">
        <Logo />
        <div className="mb-2 centered-button home-button">
          <Button variant="primary" size="lg" onClick={this.onSignup}>
            Sign Up
          </Button>
        </div>
        <div className="mb-2 centered-button home-button">
          <Button variant="primary" size="sm" onClick={this.onLogin}>
            Already Have an Account?
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
