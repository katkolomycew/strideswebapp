import React, { Fragment } from "react";
import "../../index.css";

const UserIcon = (props) => (
  <Fragment>
    <i
      className={`far fa-user profile-icon ${props.iconSize}`}
      onClick={props.profileRoute}
    ></i>
  </Fragment>
);

export default UserIcon;
