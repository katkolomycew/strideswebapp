import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";

const ReturnIcon = () => {
  const history = useHistory();

  return (
    <Fragment>
      <i
        className="fas fa-angle-double-left profile-icon sm"
        onClick={() => history.goBack()}
      ></i>
    </Fragment>
  );
};

export default ReturnIcon;
