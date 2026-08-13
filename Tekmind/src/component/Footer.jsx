import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="fw-bold text-warning">Tekmind</h3>

            <p className="mt-3">
              We build modern websites, web applications, mobile applications,
              and digital solutions to help businesses grow.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>

              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>

              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>

              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled mt-3">

              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/careers" className="text-white text-decoration-none">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Services</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Mobile App Development</li>
              <li className="mb-2">UI/UX Design</li>
              <li className="mb-2">Digital Marketing</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Contact</h5>

            <p className="mt-3">
              <FaMapMarkerAlt className="me-2 text-warning" />
              Cen 114/86, SN 72/5 Dighi, Sai Park, Bhosari Road, Dighi Camp, Pune, Maharashtra, India, 411015
            </p>
 
            <p>
              <FaPhoneAlt className="me-2 text-warning" />
              +91 8999011583 
            </p>
            <p>
              <FaEnvelope className="me-2 text-warning" />
              hr@tekmindsoft.in
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} Tekmind. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;  