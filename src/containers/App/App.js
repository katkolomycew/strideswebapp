import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/signup" />
            <Route path="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
