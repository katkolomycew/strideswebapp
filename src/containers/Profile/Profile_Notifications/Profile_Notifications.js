import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../Profile.css";

const Profile_Notifications = () => (
  <div className="profile_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <h1 id="profile-notifications_title">Notifications</h1>

    <small className="notifications_tag push">Push Notification</small>
    <div className="notifications_group push">
      <p>Daily Activity</p>
      <p>New Plan</p>
      <p>Reward</p>
    </div>
    <div className="notifications_toggle push">
      <BootstrapSwitchButton
        checked={true}
        onlabel=" "
        offlabel=" "
        onstyle="success"
        id="test-button"
      />
      <br />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
    </div>

    <small className="notifications_tag text">Text</small>
    <div className="notifications_group text">
      <p>Daily Activity</p>
      <p>New Plan</p>
      <p>Reward</p>
    </div>
    <div className="notifications_toggle text">
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
        id="test-button"
      />
      <br />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
    </div>

    <small className="notifications_tag email">Email</small>
    <div className="notifications_group email">
      <p>Daily Activity</p>
      <p>New Plan</p>
      <p>Reward</p>
    </div>
    <div className="notifications_toggle email">
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
        id="test-button"
      />
      <br />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
      <BootstrapSwitchButton
        checked={false}
        onlabel=" "
        offlabel=" "
        onstyle="success"
      />
    </div>
  </div>
);

export default Profile_Notifications;
