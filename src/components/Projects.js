import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/projects.css";
import "../App.css";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      project: ""
    };
  }

  render() {
    return (
      <div className="projects z-depth-5">
        <h2 className="headings">Projects</h2>
        <div id="proj-grid">
          <Link to="/Tile1">
            <div id="proj-1" className="project-tile" />
          </Link>

          <Link to="/Tile2">
            <div id="proj-2" className="project-tile" />
          </Link>

          <Link to="/Tile3">
            <div id="proj-3" className="project-tile" />
          </Link>

          <Link to="/Tile4">
            <div id="proj-4" className="project-tile" />
          </Link>

          <Link to="/Tile5">
            <div id="proj-5" className="project-tile" />
          </Link>

          <Link to="/Tile6">
            <div id="proj-6" className="project-tile" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;
