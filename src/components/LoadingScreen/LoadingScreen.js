import React, { Component } from "react";
import "./LoadingScreen.css";

class LoadingScreen extends Component {
  render() {
    return (
      <div id="loading-screen_wrapper">
        <div id="loading-screen_loading">
          <small>>>>>>>>>>>>>>>>>>>>>></small>
        </div>
        <h1 id="loading-screen_text">Move Towards Wellness</h1>
      </div>
    );
  }
}

export default LoadingScreen;
