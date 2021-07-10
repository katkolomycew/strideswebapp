import React from "react";
import Button from "react-bootstrap/Button";
import FooterMenu from "../../../components/FooterMenu/FooterMenu";
import Logo from "../../../components/Logo/Logo";
import UserIcon from "../../../components/UserIcon/UserIcon";
import "./Welcome_User.css";
import "../Welcome_New/Welcome_New.css";

const Welcome_User = (props) => {
  const handleDetails = () => props.history.push("/profile/account");

  return (
    <div id="welcome-user_wrapper">
      <UserIcon profileRoute={handleDetails} iconSize="sm" />
      <Logo imgSize="sm" />
      <h1 className="welcome-title" style={{ top: "6rem" }}>
        Hello Rachel!
      </h1>
      <div className="training-wrapper" style={{ top: "10rem" }}>
        Today's Activity
      </div>
      <div id="welcome-user_activity">
        <i className="fas fa-walking"></i>
        <small>
          20 Min <br /> Run <br /> Easy Pace
        </small>
      </div>
      <div className="mb-2 centered-button">
        <Button
          variant="primary"
          size="lg"
          id="start-button"
          href="/user/newplan"
        >
          Start
        </Button>
      </div>
      <FooterMenu />
    </div>
  );
};

export default Welcome_User;
