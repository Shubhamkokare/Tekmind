import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={aboutImage}
              alt="About Tekmind"
              className="img-fluid rounded shadow"
            />
          </div>
 
          {/* Right Content */} 
          <div className="col-lg-6">
 
            <h5 className="text-primary fw-bold">
              ABOUT US
            </h5>

            <h2 className="fw-bold mb-4">
              We Build Digital Solutions For Modern Businesses
            </h2>

            <p className="text-muted">
              Tekmind is an IT company focused on delivering high-quality web
              applications, mobile apps, UI/UX design, cloud solutions, and
              software development services. We help businesses transform their
              ideas into successful digital products.
            </p>

            <div className="row mt-4">

              <div className="col-6">
                <div className="border rounded p-3 text-center shadow-sm">
                  <h3 className="text-primary fw-bold">5+</h3>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>

              <div className="col-6">
                <div className="border rounded p-3 text-center shadow-sm">
                  <h3 className="text-success fw-bold">100+</h3>
                  <p className="mb-0">Projects Completed</p>
                </div>
              </div>

            </div>

            <div className="row mt-3">

              <div className="col-6">
                <div className="border rounded p-3 text-center shadow-sm">
                  <h3 className="text-warning fw-bold">50+</h3>
                  <p className="mb-0">Happy Clients</p>
                </div>
              </div>

              <div className="col-6">
                <div className="border rounded p-3 text-center shadow-sm">
                  <h3 className="text-danger fw-bold">24/7</h3>
                  <p className="mb-0">Support</p>
                </div>
              </div>

            </div>

            <Link
              to="/about"
              className="btn btn-primary btn-lg mt-4"
            >
              Learn More
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;