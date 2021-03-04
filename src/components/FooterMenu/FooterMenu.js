import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "./FooterMenu.css";

class FooterMenu extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <i className="far fa-calendar-alt footer-icon"></i>
            <Nav.Link href="/">My Plans</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/achievements/timeline" eventKey="link-1">
              <i className="fas fa-chart-line footer-icon"></i>
              Achievements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/community/forums" eventKey="link-2">
              <i className="fas fa-users footer-icon"></i>
              Community
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default FooterMenu;
