import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "./Achievements_Timeline.css";

class Achievements_Timeline extends Component {
  render() {
    return (
      <div className="achievements_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <i className="fas fa-chart-line achievements-icon"></i>
        <h1 id="achievements-title">Achievements</h1>
        <div className="temporary-timeline"></div>
        <h1 id="awards-title">Awards</h1>
        <div className="awards-icon_wrapper">
          <i className="fas fa-award award"></i>
          <i className="fas fa-medal award"></i>
          <i className="fas fa-trophy award"></i>
          <p>
            See <br /> More
          </p>
        </div>
        <div className="awards-names_wrapper">
          <small>Mood Boost</small>
          <small>Perfect Week</small>
          <small>
            September <br /> Challenge
          </small>
        </div>
        <div className="mb-2 centered-button">
          <Button variant="primary" size="lg" className="achievements-button">
            Share Report
          </Button>
        </div>
      </div>
    );
  }
}

export default Achievements_Timeline;
