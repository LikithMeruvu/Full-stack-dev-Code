import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand br" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link non-active" aria-current="page" href="/">{props.navlink1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link non-active" href="/">{props.navlink2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link non-active" href="/">{props.navlink3}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
}

Navbar.propTypes = {
    title: PropTypes.string,
    navlink1: PropTypes.string,
    navlink2: PropTypes.string,
    navlink3: PropTypes.string,
}

Navbar.defaultProps = {
    title: "SciTech",
    navlink1: "link-here",
    navlink2: "link-here",
    navlink3: "link-here"
}