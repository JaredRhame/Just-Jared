import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Tile1 from "./components/proj-tiles/Tile1";
import Tile2 from "./components/proj-tiles/Tile2";
import Tile3 from "./components/proj-tiles/Tile3";
import Tile4 from "./components/proj-tiles/Tile4";
import Tile5 from "./components/proj-tiles/Tile5";
import Tile6 from "./components/proj-tiles/Tile6";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/tile1" component={Tile1} />
          <Route path="/tile2" component={Tile2} />
          <Route path="/tile3" component={Tile3} />
          <Route path="/tile4" component={Tile4} />
          <Route path="/tile5" component={Tile5} />
          <Route path="/tile6" component={Tile6} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
