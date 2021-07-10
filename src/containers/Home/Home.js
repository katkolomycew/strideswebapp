import React from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../components/Logo/Logo";
import "./Home.css";

const Home = (props) => {
  const onSignup = () => props.history.push("/signup");
  const onLogin = () => props.history.push("/login");

  return (
    <div id="home_wrapper">
      <Logo />
      <div className="mb-2 centered-button home-button">
        <Button variant="primary" size="lg" onClick={onSignup}>
          Sign Up
        </Button>
      </div>
      <div className="mb-2 centered-button home-button">
        <Button variant="primary" size="sm" onClick={onLogin}>
          Already Have an Account?
        </Button>
      </div>
    </div>
  );
};

export default Home;
