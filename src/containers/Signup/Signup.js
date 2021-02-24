import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Signup.css";

class Signup extends Component {
  handleSubmit = () => this.props.history.push("/welcome/new");

  render() {
    return (
      <div>
        <div id="input-btn_wrapper">
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Email
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Email"
              aria-describedby="inputGroup-sizing-default"
              placeholder="rachel.m.brown@okstate.edu"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Password
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Password"
              aria-describedby="inputGroup-sizing-default"
              placeholder="**********"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Confirm Password
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Confirm Password"
              aria-describedby="inputGroup-sizing-default"
              placeholder="**********"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                First Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="First Name"
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
              aria-label="Last Name"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Brown"
            />
          </InputGroup>
        </div>
        <div className="mb-2 centered-button home-button">
          <Button variant="primary" size="lg" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Signup;
