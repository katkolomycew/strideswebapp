import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../index.css";

const calendar = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar_wrapper">
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={props.clickedDay}
      />
    </div>
  );
};

export default calendar;
