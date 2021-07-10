import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../Profile.css";

const ProfileSupport = () => (
  <div className="profile_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <h1 id="privacy_title">FAQ</h1>
    <Card id="privacy_wrapper" className="transparent">
      <Card.Body>
        <Card.Text id="privacy_wrapper-text">
          <strong>
            What's the difference between light, moderate, and intense
            activities?
          </strong>
          <br />
          Some activities can be done at different levels of intensity, like
          walking slowly or briskly. A good way to tell the difference is the
          "talking test." Read more{" "}
          <Link to="/support/intensity" className="support-link">
            here
          </Link>
          .
          <br />
          <br />
          <strong>What kind of activities can I do?</strong>
          <br />
          In short, you can do whatever kind of movement you enjoy! Our program
          includes 10 categories of activtities. Read more{" "}
          <Link to="/support/types" className="support-link">
            here
          </Link>
          .
          <br />
          <br />
          <strong>How do I connect a fitness device?</strong>
          <br />
          Start by selecting the device you want to use in your Strides Account
          Details. Then you'll be prompted to give Strides access in your
          settings.
          <br />
          <br />
          <strong>My fitness data isn't loaded in the Strides app.</strong>
          <br />
          Check to make sure that in the settings for your device of choice,
          you've given Strides permission to access the data. If that is turned
          on, you may have to open the devices app or wait for data from your
          device to be added to the cloud before it loads in Strides.
          <br />
          <br />
          <strong>How do I use the mood scale?</strong>
          <br />
          We want you to make the scale your own. What mood do you attribute to
          each number in the scale? To give you a starting idea, check out our
          description{" "}
          <Link to="/support/mood" className="support-link">
            here
          </Link>
          .
          <br />
          <br />
          <strong>What if I experience pain during my activity?</strong>
          <br />
          We never want your activity to hurt. Some soreness or tight muscles
          can be expected with any new activity, but if you're experiencing
          pain, you should stop doing your activities and consult your doctor.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default ProfileSupport;
