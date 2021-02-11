import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
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
