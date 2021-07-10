import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "../Profile/Profile.css";

const SupportTypes = () => (
  <div className="profile_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <h1 id="privacy_title">Activity and Access</h1>
    <Card id="privacy_wrapper" className="transparent">
      <Card.Body>
        <Card.Text id="privacy_wrapper-text">
          <strong>Yoga</strong> is whatever helps you find your zen. Usually
          it's a bunch of poses to work on strength, breathing, and meditation.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            No special access required
          </span>
          <br />
          <br />
          <strong>Walking</strong> can be a stroll through the park or a hike up
          a mountain. The difference from running is that one foot is always on
          the ground!
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to a gym or safe neighbourhood
          </span>
          <br />
          <br />
          <strong>Cycling</strong> can be on a one, two, or however-many tired
          bike. And yes, a stationary bicycle counts!
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to a gym or bicycle
          </span>
          <br />
          <br />
          <strong>Swimming</strong>, whether backstroke, freestyle, or butterfly
          is sure to be a splash.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to a swimming pool
          </span>
          <br />
          <br />
          <strong>Weight Lifting</strong> usually means using machines at the
          gym or picking up a dumbbell, bar, or weighted plates (but it could
          also be something like curling a gallon of milk).
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to a gym or weights (or a gallon of milk)
          </span>
          <br />
          <br />
          <strong>Jogging/Running</strong> whether from a bear or your
          responsibilites is anything faster than a stroll, as long as at some
          point both feet are off the ground.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to a gym or safe neighbourhood
          </span>
          <br />
          <br />
          <strong>Recreational Sport</strong> includes basketball, tennis,
          football, soccer, badminton, laser tag, or whatever sport tickles your
          fancy.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            Requires access to the recreational sports facility of your choice
          </span>
          <br />
          <br />
          <strong>Household Activites</strong> is basically anything on your
          chores list. It could be sweeping, gardening, doing the laundry, or
          painting a wall. Anything where you're having to move around the house
          counts.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            No special access required
          </span>
          <br />
          <br />
          <strong>Dancing</strong> is however you move your body to the music.
          Be graceful, be silly, be crazy, be yourself.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            No special access required
          </span>
          <br />
          <br />
          <strong>Body Weight Exercises</strong> are things like push-ups,
          sit-ups, pull-ups, (insert movement)-ups. Essentially, it's using your
          muscles without any equipment.
          <br />
          <span className="italics" style={{ marginLeft: "6.9rem" }}>
            No special access required
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default SupportTypes;
