import React from 'react'
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div>
        <div
          className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Our Office</h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +012 345 67890
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <div className="d-flex pt-2">
                  <Link
                    className="btn btn-square btn-outline-light rounded-circle me-2"
                    to="#"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link
                    className="btn btn-square btn-outline-light rounded-circle me-2"
                    to="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    className="btn btn-square btn-outline-light rounded-circle me-2"
                    to="#"
                  >
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link
                    className="btn btn-square btn-outline-light rounded-circle me-2"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Services</h4>
                <Link className="btn btn-link" to="#">
                  Landscaping
                </Link>
                <Link className="btn btn-link" to="#">
                  Pruning plants
                </Link>
                <Link className="btn btn-link" to="#">
                  Urban Gardening
                </Link>
                <Link className="btn btn-link" to="#">
                  Garden Maintenance
                </Link>
                <Link className="btn btn-link" to="#">
                  Green Technology
                </Link>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link className="btn btn-link" to="#">
                  About Us
                </Link>
                <Link className="btn btn-link" to="#">
                  Contact Us
                </Link>
                <Link className="btn btn-link" to="#">
                  Our Services
                </Link>
                <Link className="btn btn-link" to="#">
                  Terms &amp; Condition
                </Link>
                <Link className="btn btn-link" to="#">
                  Support
                </Link>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative w-100">
                  <input
                    className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <Link className="border-bottom" to="#">
                  Your Site Name
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <Link className="border-bottom" to="https://htmlcodex.com/">
                  HTML Codex
                </Link>{" "}
                Distributed By <Link to="https://themewagon.com/">ThemeWagon</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <Link
        to="/"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
    </>
  );
}

export default Footer