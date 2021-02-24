import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import UserIcon from "../../../components/UserIcon/UserIcon";
import "../Profile.css";

class Profile_AccountDetails extends Component {
  render() {
    return (
      <div className="profile_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <UserIcon iconSize="lg" />
        <small id="profile_username-change">Change Photo</small>
        <div id="details-btn_wrapper">
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                First Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Email"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Rachel"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Last Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Password"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Brown"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Email
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Confirm Password"
              aria-describedby="inputGroup-sizing-default"
              placeholder="rachel.m.brown@okstate.edu"
            />
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Profile_AccountDetails;
