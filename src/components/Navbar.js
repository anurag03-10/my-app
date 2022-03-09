import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Connect us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://anurag0310.netlify.app/"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://tinyurl.com/anurag0310-linked"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/anurag_singh0310/"
                  >
                    Insta
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/anurag_singh0310/"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://twitter.com/AnuragSingh0310"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://tinyurl.com/anuragsingh-resume"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4` }>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextEnhancer",
  aboutText: "Hello",
};
