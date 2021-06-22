import React, { Component } from "react";
import Calendar from "../../components/Calendar/Calendar";
import Logo from "../../components/Logo/Logo";
import NewIcon from "../../components/NewIcon/NewIcon";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "./UserPlans.css";

class UserPlans extends Component {
  handleNewPlan = () => {
    this.props.history.push("#");
  };

  handleDayView = () => {
    // alert("test");
  };

  render() {
    return (
      <div className="userplans_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <NewIcon clicked={this.handleNewPlan} />
        <i className="fas fa-calendar-alt userplan_icon"></i>
        <h1 id="achievements-title">My Plans</h1>
        <div className="userplan_time-wrapper">
          <button className="userplan_time-button" href="#">
            Month
          </button>
          <button className="userplan_time-button" href="#">
            Week
          </button>
          <button className="userplan_time-button" href="#">
            Day
          </button>
        </div>
        <Calendar clickedDay={this.handleDayView} />
      </div>
    );
  }
}

export default UserPlans;
