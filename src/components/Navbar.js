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
    // console.log(e.target);
    // this.setState({ active: true });
    // e.current.className = "active";
    // if (e.target === this.projects.current) {
    //   this.projects.current.add.className = "active";
    // }
  }
  render() {
    return (
      <header>
        <nav className="nav">
          <ul className="row nav-links">
            <li
              className="four columns"
              onClick={this.handleClick}
              ref={this.home}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li ref={this.projects}>
              <Link className="nav-link" to="/Projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
