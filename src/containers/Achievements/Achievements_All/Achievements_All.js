import React from "react";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "./Achievements_All.css";
import "../Achievements_Timeline/Achievements_Timeline.css";

const Achievements_All = () => (
  <div className="achievements_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <h1 className="awards-title" style={{ top: "5.5rem" }}>
      Awards
    </h1>
    <h2 id="awards-subtitle">Your Awards</h2>
    <div className="awards-icon_wrapper" style={{ top: "7rem" }}>
      <i className="fas fa-award award"></i>
      <i className="fas fa-medal award"></i>
      <i className="fas fa-trophy award"></i>
    </div>
    <div
      className="awards-names_wrapper"
      style={{ left: "35%", transform: "translate(-35%)", width: "325px" }}
    >
      <small>Mood Boost</small>
      <small>Perfect Week</small>
      <small>
        September <br /> Challenge
      </small>
    </div>
    <div className="awards-icon_wrapper" style={{ top: "9rem" }}>
      <i className="fas fa-award award"></i>
      <i className="fas fa-medal award"></i>
      <i className="fas fa-trophy award"></i>
    </div>
    <div
      className="awards-names_wrapper"
      style={{
        left: "40%",
        transform: "translate(-40%)",
        width: "325px",
        top: "9.5rem",
      }}
    >
      <small>
        August <br /> Challenge
      </small>
      <small>Buddy Award</small>
      <small>
        Accountability <br /> Superhero
      </small>
    </div>
    <div className="awards-icon_wrapper" style={{ top: "10.5rem" }}>
      <i className="fas fa-award award"></i>
      <i className="fas fa-medal award"></i>
      <i className="fas fa-trophy award"></i>
    </div>
    <div
      className="awards-names_wrapper"
      style={{
        left: "40%",
        transform: "translate(-40%)",
        width: "325px",
        top: "11rem",
      }}
    >
      <small>
        November <br /> Challenge
      </small>
      <small>
        December <br /> Challenge
      </small>
      <small>Perfect Month</small>
    </div>
  </div>
);

export default Achievements_All;
