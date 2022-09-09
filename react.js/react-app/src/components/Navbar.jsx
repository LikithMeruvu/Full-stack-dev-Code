import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.modeType === 'dark' ? 'dark is-bg-active' : 'light is-active'}  text-${props.modeType === 'light' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand br text-${props.modeType === 'dark' ? 'light' : 'dark'}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link is-active" href="/">{props.navlink1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link non-active" href="/components/About.jsx">{props.navlink2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link non-active" href="/">{props.navlink3}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.modeType === 'dark' ? 'light' : 'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleDM} id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">Enable DM for Navbar</label>
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
  title: "NONE",
  navlink1: "link-here",
  navlink2: "link-here",
  navlink3: "link-here"
}