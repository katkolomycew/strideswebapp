import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Achievements_All from "../Achievements/Achievements_All/Achievements_All";
import Achievements_Share from "../Achievements/Achievements_Share/Achievements_Share";
import Achievements_Timeline from "../Achievements/Achievements_Timeline/Achievements_Timeline";
import Community from "../Community/Community";
import Home from "../Home/Home";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Profile_AccountDetails from "../Profile/Profile_AccountDetails/Profile_AccountDetails";
import Profile_Notifications from "../Profile/Profile_Notifications/Profile_Notifications";
import Profile_PrivacyData from "../Profile/Profile_PrivacyData/Profile_PrivacyData";
import Signup from "../Signup/Signup";
import SuccessStories from "../Community/SuccessStories/SuccessStories";
import Welcome_New from "../Welcome/Welcome_New/Welcome_New";
import Welcome_User from "../Welcome/Welcome_User/Welcome_User";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <div>
        <Router>
          <Switch>
            {/* Root menus nav */}
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />

            {/* Welcome screens nav */}
            <Route path="/welcome/new" component={Welcome_New} />
            <Route path="/welcome/user" component={Welcome_User} />

            {/* Profile nav screens*/}
            <Route path="/profile/account" component={Profile} />
            <Route path="/profile/details" component={Profile_AccountDetails} />
            <Route path="/profile/privacy" component={Profile_PrivacyData} />
            <Route
              path="/profile/notifications"
              component={Profile_Notifications}
            />

            {/* Achievements screens */}
            <Route path="/achievements/all" component={Achievements_All} />
            <Route path="/achievements/share" component={Achievements_Share} />
            <Route
              path={["/achievements/timeline", "/achievements/continue"]}
              component={Achievements_Timeline}
            />

            {/* Community screens */}
            <Route path="/community/forums" component={Community} />
            <Route path="/community/success" component={SuccessStories} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

export default App;
