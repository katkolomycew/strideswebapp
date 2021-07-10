import React, { Fragment } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import Logo from "../../components/Logo/Logo";
import "./Login.css";

const Login = (props) => {
  const handleLogin = () => props.history.push("/welcome/user");

  return (
    <Fragment>
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
      </div>
      <div className="mb-2 centered-button login-button">
        <Button variant="primary" size="lg" onClick={handleLogin}>
          Login
        </Button>
      </div>
      <Logo imgSize="md" />
    </Fragment>
  );
};

export default Login;
