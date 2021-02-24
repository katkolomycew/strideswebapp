import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../Profile.css";

class Profile_PrivacyData extends Component {
  render() {
    return (
      <div className="profile_wrapper">
        <ReturnIcon />
        <Logo imgSize="sm" />
        <h1 id="privacy_title">Privacy and Data</h1>
        <Card id="privacy_wrapper">
          <Card.Body>
            <Card.Text id="privacy_wrapper-text">
              <strong>Generic privacy policy template</strong>
              <br />
              This privacy policy (“policy”) will help you understand how [name]
              (“us”, “we”, “our”) uses and protects the data you provide to us
              when you visit and use [website] (“website”, “service”).
              <br />
              <br />
              We reserve the right to change this policy at any given time, of
              which you will be promptly updated. If you want to make sure that
              you are up to date with the latest changes, we advise you to
              frequently visit this page.
              <br />
              <br />
              <strong>What User Data We Collect</strong>
              <br />
              When you visit the website, we may collect the following data:
              <br />
              <br />
              – Your IP address.
              <br />
              – Your contact information and email address.
              <br />
              – Other information such as interests and preferences.
              <br />
              – Data profile regarding your online behavior on our website.
              <br />
              <br />
              <strong>Why We Collect Your Data</strong>
              <br />
              We are collecting your data for several reasons:
              <br />
              <br />
              – To better understand your needs.
              <br />
              – To improve our services and products.
              <br />
              – To send you promotional emails containing the information we
              think you will find interesting.
              <br />
              – To contact you to fill out surveys and participate in other
              types of market research.
              <br />
              – To customize our website according to your online behavior and
              personal preferences.
              <br />
              <br />
              <strong>Safeguarding and Securing the Data</strong>
              <br />
              [name] is committed to securing your data and keeping it
              confidential. [name] has done all in its power to prevent data
              theft, unauthorized access, and disclosure by implementing the
              latest technologies and software, which help us safeguard all the
              information we collect online.
              <br />
              <br />
              <strong>Our Cookie Policy</strong>
              <br />
              Once you agree to allow our website to use cookies, you also agree
              to use the data it collects regarding your online behavior
              (analyze web traffic, web pages you spend the most time on, and
              websites you visit).
              <br />
              <br />
              The data we collect by using cookies is used to customize our
              website to your needs. After we use the data for statistical
              analysis, the data is completely removed from our systems.
              <br />
              <br />
              Please note that cookies don't allow us to gain control of your
              computer in any way. They are strictly used to monitor which pages
              you find useful and which you do not so that we can provide a
              better experience for you.
              <br />
              <br />
              If you want to disable cookies, you can do it by accessing the
              settings of your internet browser. (Provide links for cookie
              settings for major internet browsers).
              <br />
              <br />
              <strong>Links to Other Websites</strong>
              <br />
              Our website contains links that lead to other websites. If you
              click on these links [name] is not held responsible for your data
              and privacy protection. Visiting those websites is not governed by
              this privacy policy agreement. Make sure to read the privacy
              policy documentation of the website you go to from our website.
              <br />
              <br />
              <strong>Restricting the Collection of your Personal Data</strong>
              <br />
              At some point, you might wish to restrict the use and collection
              of your personal data. You can achieve this by doing the
              following:
              <br />
              <br />
              When you are filling the forms on the website, make sure to check
              if there is a box which you can leave unchecked, if you don't want
              to disclose your personal information. If you have already agreed
              to share your information with us, feel free to contact us via
              email and we will be more than happy to change this for you.
              <br />
              <br />
              [name] will not lease, sell or distribute your personal
              information to any third parties, unless we have your permission.
              We might do so if the law forces us. Your personal information
              will be used when we need to send you promotional materials if you
              agree to this privacy policy.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile_PrivacyData;
