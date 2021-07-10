import React from "react";
import { Button, Card, InputGroup, Form, FormControl } from "react-bootstrap";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../../Login/Login.css";
import "../Achievements_All/Achievements_All.css";
import "./Achievements_Share.css";
import "../Achievements_Timeline/Achievements_Timeline.css";

const Achievements_Share = () => (
  <div className="achievements_wrapper">
    <ReturnIcon />
    <Logo imgSize="sm" />
    <i className="fas fa-chart-line achievements-icon"></i>
    <h1 id="achievements-title">Achievements</h1>
    <h2 id="awards-subtitle">Who are you sharing your progress with?</h2>
    <div id="input-share_wrapper">
      <InputGroup size="lg" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Name"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Dr. Linda Smith"
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
          aria-label="Email"
          aria-describedby="inputGroup-sizing-default"
          placeholder="linda@smithcounselling.com"
        />
      </InputGroup>
    </div>
    <h1 id="share-title">Relation</h1>
    <Form id="share-form_wrapper">
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Family"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            defaultChecked
            label="Mental Health Professional"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Friend"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="Other _____________________"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}
    </Form>
    <h1 id="share-message">Message (optional)</h1>
    <div id="share-message_wrapper">
      <Card body>
        Linda, here's my Strides report this week. I've been feeling so much
        better after my activities. I'm glad you suggested this app.
      </Card>
    </div>
    <div className="mb-2 centered-button">
      <Button
        variant="primary"
        size="lg"
        className="share-button"
        href="/achievements/continue"
      >
        Continue
      </Button>
    </div>
  </div>
);

export default Achievements_Share;
