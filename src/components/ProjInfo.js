import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/proj-info.css";
import "../imgs/under-construction.jpg";
import "../imgs/giphy-clone.JPG";

class ProjInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { project } = this.props.location.state;

    return (
      <div className="proj-display ">
        <Link to="/Projects">Back to Projects</Link>
        <h2 className="headings">{project.name}</h2>
        <div className={"proj-image " + project.id} />

        <p className="content z-depth-5">{project.content}</p>
      </div>
    );
  }
}

export default ProjInfo;
