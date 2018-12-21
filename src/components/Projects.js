import React, { Component } from "react";
import "../styles/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects z-depth-5">
        <h2 className="headings">Projects</h2>
        <div id="proj-grid">
          <div id="proj-1" className="project-tile" />
          <div id="proj-2" className="project-tile" />
          <div id="proj-3" className="project-tile" />
          <div id="proj-4" className="project-tile" />
          <div id="proj-5" className="project-tile" />
          <div id="proj-6" className="project-tile" />
        </div>
      </div>
    );
  }
}

export default Projects;
