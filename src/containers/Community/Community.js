import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo/Logo";
import ReturnIcon from "../../components/ReturnIcon/ReturnIcon";
import "./Community.css";

const Community = (props) => {
  const communityData = [
    { id: "1", title: "Introductions", url: "#" },
    { id: "2", title: "Motivation", url: "#" },
    { id: "3", title: "Success Stories", url: "/" },
    { id: "4", title: "Struggles", url: "#" },
    { id: "5", title: "Mental Health", url: "#" },
    { id: "6", title: "Fitness", url: "#" },
    { id: "7", title: "Nutrition", url: "#" },
    { id: "8", title: "Feeling Stuck", url: "#" },
  ];

  const handleForum = (title) => {
    if (title.includes("Success Stories")) {
      props.history.push("/community/success");
    }
  };

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
        {communityData.map((forum) => {
          return (
            <Card key={forum.id} onClick={() => handleForum(forum.title)} body>
              {forum.title}
              <i className="fas fa-angle-double-right"></i>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
