import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

//Maybe instead of having the projects be a separate page, have eachh proj appear as a separate page after clicking. Explaining what I learned from the proj etc.

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <ul className="row">
            <li className="four columns active">
              <Link to="/">Home</Link>
            </li>
            <li className="four columns">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="four columns">
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
