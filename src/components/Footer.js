import React, { Component } from "react";
import "../styles/footer.css";
class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 footer-content">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12 links">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    href="https://github.com/JaredRhame?tab=repositories"
                  >
                    <i className="fab fa-github fa-4x" />
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    href="https://twitter.com/jaredMakes"
                  >
                    <i className="fab fa-twitter fa-4x" />
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    href="https://codepen.io/JaredRhame/"
                  >
                    <i className="fab fa-codepen fa-4x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2019 Copyright Text</div>
        </div>
      </footer>
    );
  }
}
export default Footer;
