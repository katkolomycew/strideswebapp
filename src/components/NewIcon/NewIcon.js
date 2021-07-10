import React from "react";
import "../../index.css";

const NewIcon = (props) => (
  <div>
    <i className="far fa-plus-square user-icon" onClick={props.clicked}></i>
    <p
      style={{
        position: "relative",
        top: "4.5rem",
        left: "50%",
        transform: "translate(-4%)",
      }}
    >
      New
    </p>
  </div>
);

export default NewIcon;
