import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import Chart from "../../../components/Chart/Chart";
import "./Achievements_Timeline.css";

const timelineURL = window.location.href.includes("timeline");

const Achievements_Timeline = () => (
  <div className="achievements_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <i className="fas fa-chart-line achievements-icon"></i>
    <h1 id="achievements-title">
      {timelineURL ? "Achievements" : "Rachel's Achievements"}
    </h1>
    <div className="temporary-timeline">
      <Chart />
    </div>
    <h1 className="awards-title">{timelineURL ? "Awards" : "Top Awards"}</h1>
    <div className="awards-icon_wrapper">
      <i className="fas fa-award award"></i>
      <i className="fas fa-medal award"></i>
      <i className="fas fa-trophy award"></i>
      {timelineURL ? (
        <a href="/achievements/all">
          See <br /> More
        </a>
      ) : null}
    </div>
    <div
      className={timelineURL ? "awards-names_wrapper" : "continue-share_names"}
    >
      <small>Mood Boost</small>
      <small>Perfect Week</small>
      <small>
        September <br /> Challenge
      </small>
    </div>
    <div className="mb-2 centered-button">
      <Button
        variant="primary"
        size="lg"
        className="achievements-button"
        href={timelineURL ? "/achievements/share" : "/welcome/user"}
      >
        {timelineURL ? "Share Report" : "Confirm and Share"}
      </Button>
    </div>
  </div>
);

export default Achievements_Timeline;
