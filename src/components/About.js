import React, { Component } from "react";
import "../styles/about.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div id="about-content" className="z-depth-5 content">
          <h2 className="headings">Jared</h2>
          <p className="about-para">
            I'm a self-taught Front End Developer from Jersey. JS is my favorite
            language so far. I love being able to create something from just an
            idea. Working through the problems and getting frustrated until you
            have the "ah ha!" moment, is one of the most satisfying feelings for
            me.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
