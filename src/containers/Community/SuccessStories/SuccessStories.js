import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../Community.css";

class SuccessStories extends Component {
  state = {
    messages: [
      {
        id: "1",
        text:
          "Hi everyone, I've been battling with mild depression for years. I know exercise helps but I. Could. Not. Motivate myself. I've been able to exercise and am feeling SO MUCH BETTER!!!",
      },
      {
        id: "2",
        text:
          "New to Strides, but I needed some accountability. Now I've checked off each of my activities for 3 weeks! I really didn't think I could do it, but here I am.",
      },
      {
        id: "3",
        text:
          "Let's talk social anxiety... I've always had it... BAD. Recently I've been going for a walk and doing yoga before I have to go to a party, meet newp ople, or even talk on the phone with the cable guy... haha! It's been so heplful, and with Strides I can track everything! Seeing the progress is really motivating.",
      },
    ],
  };

  render() {
    return (
      <div className="community_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <i className="fas fa-users community-icon"></i>
        <h1 className="community-title">Success Stories</h1>
        <div className="success-messages_wrapper">
          {this.state.messages.map((message) => {
            return (
              <Card key={message.id} body>
                {message.text}
              </Card>
            );
          })}
          <Card body className="success-message_right">
            Who knew getting active would help me feel more stable all day... oh
            wait...
          </Card>
          <Card body className="success-message_left">
            I went from not being able to get out of bed... to getting up to
            doing the dishes... to walking out to get the mail... to walking the
            block... to signing up for my first 5k yesterday! It's all about
            baby steps people!
          </Card>
        </div>
      </div>
    );
  }
}

export default SuccessStories;
