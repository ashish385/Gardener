import React from 'react'
import {Link} from "react-router-dom"
import "../../css/style.css"
import "../../css/bootstrap.min.css"

const Topbar = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2 rotate-90" />
              <span>+012 345 6789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <Link className="btn btn-link text-light" to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-link text-light" to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-link text-light" to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link className="btn btn-link text-light " to="#">
                <i className="fab fa-instagram " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar