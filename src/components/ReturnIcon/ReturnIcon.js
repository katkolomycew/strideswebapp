import React from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";

const ReturnIcon = () => {
  let history = useHistory();
  return (
    <div>
      <i
        className="fas fa-angle-double-left profile-icon sm"
        onClick={() => history.goBack()}
      ></i>
    </div>
  );
};

export default ReturnIcon;
