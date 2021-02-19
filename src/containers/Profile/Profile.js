import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import UserIcon from "../../components/UserIcon/UserIcon";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <UserIcon iconSize="lg" />
        <h1 id="profile_username">Rachel Brown</h1>
        <small id="profile_username-edit">Edit</small>
        <div className="mb-2 centered-button">
          <Button
            variant="primary"
            size="lg"
            className="profile-button"
            href="/profile/notifications"
          >
            Notifications
          </Button>
        </div>
        <div className="mb-2 centered-button">
          <Button
            variant="primary"
            size="lg"
            className="profile-button"
            href="/profile/details"
          >
            Account Details
          </Button>
        </div>
        <div className="mb-2 centered-button">
          <Button
            variant="primary"
            size="lg"
            className="profile-button"
            href="/profile/privacy"
          >
            Privacy and Data
          </Button>
        </div>
        <div className="mb-2 centered-button">
          <Button variant="primary" size="lg" className="profile-button">
            Support
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
