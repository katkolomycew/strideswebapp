import React, { Component } from "react";
import "../../index.css";

class ReturnIcon extends Component {
  render() {
    return (
      <div>
        <i
          className="fas fa-angle-double-left profile-icon sm"
          onClick={this.props.returnRoute}
        ></i>
      </div>
    );
  }
}

export default ReturnIcon;
