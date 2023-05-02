import React from 'react';
import img from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-expand-md bg-primary">
      <div className="container-fluid">
        <img className="nav-item" src={img} alt="Logo" width="70" />
        <div className="container-fluid.right">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
