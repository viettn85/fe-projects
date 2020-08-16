import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="home">
          <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <a className="navbar-brand" href="#">
              <img src="./images/nest.png" />
            </a>
            <button
              className="toggler-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption center-block text-center">
          <h3>Nest Responsive Bootstrap Theme</h3>
          <a className="btn btn-outline-light" href="#about">
            Get Started
          </a>
        </div>
      </div>
    );
  }
}
