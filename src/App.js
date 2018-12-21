import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
