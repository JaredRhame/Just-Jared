import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
