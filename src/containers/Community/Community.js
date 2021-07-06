import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "./Community.css";

class Community extends Component {
  state = {
    forums: [
      { id: "1", title: "Introductions", url: "#" },
      { id: "2", title: "Motivation", url: "#" },
      { id: "3", title: "Success Stories", url: "/" },
      { id: "4", title: "Struggles", url: "#" },
      { id: "5", title: "Mental Health", url: "#" },
      { id: "6", title: "Fitness", url: "#" },
      { id: "7", title: "Nutrition", url: "#" },
      { id: "8", title: "Feeling Stuck", url: "#" },
    ],
  };

  handleForum = (title) => {
    if (title.includes("Success Stories")) {
      this.props.history.push("/community/success");
    }
  };

  render() {
    return (
      <div className="community_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <i className="fas fa-users community-icon"></i>
        <h1 className="community-title">Community</h1>
        <div className="community-message_wrapper">
          <Card body>You're not in this alone.</Card>
        </div>
        <h1 className="community-subtitle">Forums</h1>
        <div className="community-forums_wrapper">
          {this.state.forums.map((forum) => {
            return (
              <Card
                key={forum.id}
                onClick={() => this.handleForum(forum.title)}
                body
              >
                {forum.title}
                <i className="fas fa-angle-double-right"></i>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Community;
