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
    const projOne = {
      name: "Giphy Clone",
      picUrl: "../imgs/giphy-clone.JPG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue massa risus, vitae eleifend eros ullamcorper ornare. Nulla facilisi. Maecenas et nunc a massa lacinia tincidunt. Mauris tincidunt vestibulum lacus, eget posuere felis dictum in. Suspendisse ac semper odio. Duis lorem erat, imperdiet quis convallis eget, gravida vel massa. Vivamus condimentum non lacus non vehicula. Fusce eget vulputate erat, sit amet varius eros. Curabitur pretium magna nec purus pretium, ut vestibulum est mattis. Morbi risus enim, consectetur et consequat nec, ultrices sit amet sapien. Sed a elit quis nisi suscipit pharetra quis at velit. Duis commodo in erat at tincidunt. Nulla scelerisque massa et arcu hendrerit egestas. Suspendisse potenti. Maecenas eleifend libero erat, sed condimentum velit viverra in. Vivamus felis tellus, elementum non dolor porta, commodo ultricies purus. Praesent eget tellus turpis. Etiam nisi metus, elementum sit amet libero eu, porta maximus elit."
    };
    const projTwo = {
      name: "Snapple Facts",
      picUrl: "/imgs/giphy-clone.JPG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue massa risus, vitae eleifend eros ullamcorper ornare. Nulla facilisi. Maecenas et nunc a massa lacinia tincidunt. Mauris tincidunt vestibulum lacus, eget posuere felis dictum in. Suspendisse ac semper odio. Duis lorem erat, imperdiet quis convallis eget, gravida vel massa. Vivamus condimentum non lacus non vehicula. Fusce eget vulputate erat, sit amet varius eros. Curabitur pretium magna nec purus pretium, ut vestibulum est mattis. Morbi risus enim, consectetur et consequat nec, ultrices sit amet sapien. Sed a elit quis nisi suscipit pharetra quis at velit. Duis commodo in erat at tincidunt. Nulla scelerisque massa et arcu hendrerit egestas. Suspendisse potenti. Maecenas eleifend libero erat, sed condimentum velit viverra in. Vivamus felis tellus, elementum non dolor porta, commodo ultricies purus. Praesent eget tellus turpis. Etiam nisi metus, elementum sit amet libero eu, porta maximus elit."
    };
    const projThree = {
      name: "Something Awesome",
      picUrl: "./imgs/giphy-clone.JPG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue massa risus, vitae eleifend eros ullamcorper ornare. Nulla facilisi. Maecenas et nunc a massa lacinia tincidunt. Mauris tincidunt vestibulum lacus, eget posuere felis dictum in. Suspendisse ac semper odio. Duis lorem erat, imperdiet quis convallis eget, gravida vel massa. Vivamus condimentum non lacus non vehicula. Fusce eget vulputate erat, sit amet varius eros. Curabitur pretium magna nec purus pretium, ut vestibulum est mattis. Morbi risus enim, consectetur et consequat nec, ultrices sit amet sapien. Sed a elit quis nisi suscipit pharetra quis at velit. Duis commodo in erat at tincidunt. Nulla scelerisque massa et arcu hendrerit egestas. Suspendisse potenti. Maecenas eleifend libero erat, sed condimentum velit viverra in. Vivamus felis tellus, elementum non dolor porta, commodo ultricies purus. Praesent eget tellus turpis. Etiam nisi metus, elementum sit amet libero eu, porta maximus elit."
    };
    const projFour = {
      name: "Eventually Something Amazing",
      picUrl: "./imgs/giphy-clone.JPG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue massa risus, vitae eleifend eros ullamcorper ornare. Nulla facilisi. Maecenas et nunc a massa lacinia tincidunt. Mauris tincidunt vestibulum lacus, eget posuere felis dictum in. Suspendisse ac semper odio. Duis lorem erat, imperdiet quis convallis eget, gravida vel massa. Vivamus condimentum non lacus non vehicula. Fusce eget vulputate erat, sit amet varius eros. Curabitur pretium magna nec purus pretium, ut vestibulum est mattis. Morbi risus enim, consectetur et consequat nec, ultrices sit amet sapien. Sed a elit quis nisi suscipit pharetra quis at velit. Duis commodo in erat at tincidunt. Nulla scelerisque massa et arcu hendrerit egestas. Suspendisse potenti. Maecenas eleifend libero erat, sed condimentum velit viverra in. Vivamus felis tellus, elementum non dolor porta, commodo ultricies purus. Praesent eget tellus turpis. Etiam nisi metus, elementum sit amet libero eu, porta maximus elit."
    };

    return (
      <div className="projects z-depth-5">
        <h2 className="headings">Projects</h2>
        <div id="proj-grid">
          <Link
            to={{
              pathname: "/proj-info",
              state: {
                project: projOne
              }
            }}
          >
            <div id="proj-1" className="project-tile" />
          </Link>
          <Link
            to={{
              pathname: "/proj-info",
              state: {
                project: projTwo
              }
            }}
          >
            <div id="proj-2" className="project-tile" />
          </Link>
          <Link
            to={{
              pathname: "/proj-info",
              state: {
                project: projThree
              }
            }}
          >
            <div id="proj-3" className="project-tile" />
          </Link>
          <Link
            to={{
              pathname: "/proj-info",
              state: {
                project: projFour
              }
            }}
          >
            <div id="proj-4" className="project-tile" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;

const projOne = {
  name: "Giphy Clone",
  picUrl: "./imgs/giphy-clone.JPG",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue massa risus, vitae eleifend eros ullamcorper ornare. Nulla facilisi. Maecenas et nunc a massa lacinia tincidunt. Mauris tincidunt vestibulum lacus, eget posuere felis dictum in. Suspendisse ac semper odio. Duis lorem erat, imperdiet quis convallis eget, gravida vel massa. Vivamus condimentum non lacus non vehicula. Fusce eget vulputate erat, sit amet varius eros. Curabitur pretium magna nec purus pretium, ut vestibulum est mattis. Morbi risus enim, consectetur et consequat nec, ultrices sit amet sapien. Sed a elit quis nisi suscipit pharetra quis at velit. Duis commodo in erat at tincidunt. Nulla scelerisque massa et arcu hendrerit egestas. Suspendisse potenti. Maecenas eleifend libero erat, sed condimentum velit viverra in. Vivamus felis tellus, elementum non dolor porta, commodo ultricies purus. Praesent eget tellus turpis. Etiam nisi metus, elementum sit amet libero eu, porta maximus elit."
};
