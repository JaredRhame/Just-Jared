import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/proj-info.css";

class ProjInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { project } = this.props.location.state;

    return (
      <div className="proj-display">
        <Link to="/Projects">Back to Projects</Link>
        <h2 className="headings">{project.name}</h2>
        <img className="proj-image" src={project.picUrl} />

        <p className="about-para">{project.content}</p>
      </div>
    );
  }
}

export default ProjInfo;
