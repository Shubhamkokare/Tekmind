import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7">

            <h1 className="display-3 fw-bold text-white">
              Empowering Your Business
              <span className="text-warning"> With Smart IT Solutions</span>
            </h1>

            <p className="lead text-light mt-4">
              We design and develop modern websites, web applications,
              mobile apps, and digital solutions that help businesses
              grow faster.
            </p>

            <div className="mt-4">

              <Link
                to="/services"
                className="btn btn-warning btn-lg me-3"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;