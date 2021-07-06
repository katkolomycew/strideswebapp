import React, { Component } from "react";
import Calendar from "../../components/Calendar/Calendar";
import Logo from "../../components/Logo/Logo";
import NewIcon from "../../components/NewIcon/NewIcon";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "./UserPlans.css";

class UserPlans extends Component {
  handleNewPlan = () => {
    alert("wtf");
  };

  handleMonthPlan = () => {
    return window.location.href.includes("plans")
      ? window.location.reload()
      : this.props.history.push("/user/plans");
  };

  handleWeekPlan = () => {
    return window.location.href.includes("week")
      ? window.location.reload()
      : this.props.history.push("/user/week");
  };

  handleDayPlan = () => {
    return window.location.href.includes("day")
      ? window.location.reload()
      : this.props.history.push("/user/day");
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
          <button
            className="userplan_time-button"
            onClick={this.handleMonthPlan}
          >
            Month
          </button>
          <button
            className="userplan_time-button"
            onClick={this.handleWeekPlan}
          >
            Week
          </button>
          <button className="userplan_time-button" onClick={this.handleDayPlan}>
            Day
          </button>
        </div>
        <span className="userplan_month-label">September</span>
        <Calendar />
        <span className="userplan_month-label">October</span>
        <Calendar />
        <span className="userplan_month-label">November</span>
        <Calendar />
      </div>
    );
  }
}

export default UserPlans;