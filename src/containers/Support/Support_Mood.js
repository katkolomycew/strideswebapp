import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "../Profile/Profile.css";

const SupportMood = () => {
  return (
    <div className="profile_wrapper">
      <ReturnIcon />
      <Logo imgSize="sm" />
      <h1 id="privacy_title">Scale Description</h1>
      <Card id="privacy_wrapper" className="transparent">
        <Card.Body>
          <Card.Text id="privacy_wrapper-text">
            <span className="circle" style={{ backgroundColor: "red" }}>
              -3
            </span>{" "}
            The worst, really bad
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "orange" }}>
              -2
            </span>{" "}
            Bad
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "yellow" }}>
              -1
            </span>{" "}
            Not good
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "white" }}>
              0
            </span>{" "}
            So-so
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "greenyellow" }}>
              1
            </span>{" "}
            Alright
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "#387938" }}>
              2
            </span>{" "}
            Good
            <br />
            <br />
            <span className="circle" style={{ backgroundColor: "green" }}>
              3
            </span>{" "}
            The best, really good
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SupportMood;
