import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../index.css";

const CalendarProp = () => {
  // General Calendar library component state
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar_wrapper">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarProp;
