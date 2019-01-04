import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tile3 extends Component {
  render() {
    return (
      <div className="tile-display">
        <Link to="/Projects">Back to Projects</Link>
        <h2 className="headings">Test 3</h2>
      </div>
    );
  }
}

export default Tile3;
