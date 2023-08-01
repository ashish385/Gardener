import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../../css/style.css";
import "../../css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white text-black sticky-top p-0">
        <NavLink
          to="index-2.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">Gardener</h1>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="about.html" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="service.html" className="nav-item nav-link">
              Services
            </NavLink>
            <NavLink to="project.html" className="nav-item nav-link">
              Projects
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu bg-light m-0">
                <Link to="feature.html" className="dropdown-item">
                  Features
                </Link>
                <Link to="quote.html" className="dropdown-item">
                  Free Quote
                </Link>
                <Link to="team.html" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="testimonial.html" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="404.html" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>
            <NavLink to="contact.html" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <NavLink
            to="#"
            className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
          >
            Get A Quote
            <i className="fa fa-arrow-right ms-3" />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar