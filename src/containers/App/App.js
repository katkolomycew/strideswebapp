import React, { useState, useEffect, Fragment } from "react";
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
import Profile_Support from "../Profile/Profile_Support/Profile_Support";
import Signup from "../Signup/Signup";
import SuccessStories from "../Community/SuccessStories/SuccessStories";
import UserPlans from "../UserPlans/UserPlans";
import UserPlans_New from "../UserPlans/UserPlans_New/UserPlans_New";
import Welcome_New from "../Welcome/Welcome_New/Welcome_New";
import Welcome_User from "../Welcome/Welcome_User/Welcome_User";
import UserPlansWeek from "../UserPlans/UserPlans_Week/UserPlans_Week";
import UserPlansDay from "../UserPlans/UserPlans_Day/UserPlans_Day";
import SupportTypes from "../Support/Support_Types";
import SupportMood from "../Support/Support_Mood";
import SupportLevels from "../Support/Support_Levels";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    asyncLoadingCall().then(() => setLoading(false));
  }, [loading]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <Fragment>
      <Router>
        <Switch>
          {/* Root screens */}
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />

          {/* Welcome screens */}
          <Route path="/welcome/new" component={Welcome_New} />
          <Route path="/welcome/user" component={Welcome_User} />

          {/* User screens */}
          <Route path="/user/newplan" component={UserPlans_New} />
          <Route path="/user/plans" component={UserPlans} />
          <Route path="/user/week" component={UserPlansWeek} />
          <Route path="/user/day" component={UserPlansDay} />

          {/* Profile screens */}
          <Route path="/profile/account" component={Profile} />
          <Route path="/profile/details" component={Profile_AccountDetails} />
          <Route path="/profile/privacy" component={Profile_PrivacyData} />
          <Route path="/profile/support" component={Profile_Support} />
          <Route
            path="/profile/notifications"
            component={Profile_Notifications}
          />

          {/* Support subpages */}
          <Route path="/support/intensity" component={SupportLevels} />
          <Route path="/support/types" component={SupportTypes} />
          <Route path="/support/mood" component={SupportMood} />

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
    </Fragment>
  );
};

const asyncLoadingCall = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
};

export default App;
