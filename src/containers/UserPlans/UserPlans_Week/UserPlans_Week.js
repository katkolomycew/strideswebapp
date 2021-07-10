import React from "react";
import Calendar from "../../../components/Calendar/Calendar";
import Logo from "../../../components/Logo/Logo";
import NewIcon from "../../../components/NewIcon/NewIcon";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../UserPlans.css";

const UserPlansWeek = (props) => {
  const handleNewPlan = () => {
    props.history.push("/user/newplan");
  };

  const handleMonthPlan = () => {
    return window.location.href.includes("plans")
      ? window.location.reload()
      : props.history.push("/user/plans");
  };

  const handleWeekPlan = () => {
    return window.location.href.includes("week")
      ? window.location.reload()
      : props.history.push("/user/week");
  };

  const handleDayPlan = () => {
    return window.location.href.includes("day")
      ? window.location.reload()
      : props.history.push("/user/day");
  };

  return (
    <div className="userplans_wrapper">
      <ReturnIcon />
      <Logo imgSize="sm" />
      <NewIcon clicked={handleNewPlan} />
      <i className="fas fa-calendar-alt userplan_icon"></i>
      <h1 id="achievements-title">My Plans</h1>
      <div className="userplan_time-wrapper">
        <button className="userplan_time-button" onClick={handleMonthPlan}>
          Month
        </button>
        <button className="userplan_time-button" onClick={handleWeekPlan}>
          Week
        </button>
        <button className="userplan_time-button" onClick={handleDayPlan}>
          Day
        </button>
      </div>
      <span className="userplan_week-label label-short">
        November 22nd – 28th
      </span>
      <Calendar />
      <span className="userplan_week-label label-long">
        November 29th – December 5th
      </span>
      <Calendar />
      <span className="userplan_week-label label-short">
        December 6th – 12th
      </span>
      <Calendar />
    </div>
  );
};

export default UserPlansWeek;
