import React, { Component } from "react";
import "../../index.css";

class UserIcon extends Component {
  render() {
    return (
      <div>
        <i
          className={`far fa-user profile-icon ${this.props.iconSize}`}
          onClick={this.props.profileRoute}
        ></i>
      </div>
    );
  }
}

export default UserIcon;
