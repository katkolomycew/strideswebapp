import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "../Profile/Profile.css";

const SupportLevels = () => {
  return (
    <div className="profile_wrapper">
      <ReturnIcon />
      <Logo imgSize="sm" />
      <h1 id="privacy_title">Levels of Activity</h1>
      <Card id="privacy_wrapper" className="transparent">
        <Card.Body>
          <Card.Text id="privacy_wrapper-text">
            <span className="support-link">Light</span>
            <br />
            Light activity requires the least amount of energy. You should be
            able to carry on a full conversation while doing a light activity
            without getting out of breath.
            <br />
            <br />
            <span className="support-link">Moderate</span>
            <br />
            Moderate activity requires a decent amount of energy. You should be
            able to talk during a moderate activity but in shorter sentances and
            while taking lots of breaths.
            <br />
            <br />
            <span className="support-link">Intense</span>
            <br />
            Intense activity requires a lot of energy. You shouldn't be able to
            say more than a few words at a time before needing to take a breath.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SupportLevels;
