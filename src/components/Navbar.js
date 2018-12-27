import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ""
    };
    this.home = React.createRef();
    this.projects = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // this.setState({ active: true });
    // e.current.className = "active";
    if (e.target === this.projects.current) {
      this.projects.current.add.className = "active";
    }
  }
  render() {
    return (
      <header>
        <nav className="">
          <ul className="row">
            <li
              className="four columns active"
              onClick={this.handleClick}
              ref={this.home}
            >
              <Link to="/">Home</Link>
            </li>
            <li ref={this.projects}>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
