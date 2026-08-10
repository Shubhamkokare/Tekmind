import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">
            CONTACT US
          </h5>

          <h2 className="fw-bold">
            Get In Touch With Us
          </h2>

          <p className="text-muted">
            We'd love to hear from you. Send us your enquiry and we'll respond as soon as possible.
          </p>
        </div>

        <div className="row">

          {/* Contact Details */}
          <div className="col-lg-4 mb-4">

            <div className="card border-0 shadow p-4 h-100">

              <h4 className="fw-bold mb-4">
                Contact Information
              </h4>

              <div className="d-flex mb-4">
                <FaMapMarkerAlt
                  size={25}
                  className="text-primary me-3 mt-1"
                />

                <div>
                  <h6>Address</h6>
                  <p className="text-muted">
                    Cen 114/86, SN 72/5 Dighi, Sai Park, Bhosari Road, Dighi Camp, Pune, Maharashtra, India, 411015
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <FaPhoneAlt
                  size={22}
                  className="text-success me-3 mt-1"
                />

                <div>
                  <h6>Phone</h6>
                  <p className="text-muted">
                    +91 8999011583
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <FaEnvelope
                  size={22}
                  className="text-danger me-3 mt-1"
                />

                <div>
                  <h6>Email</h6>
                  <p className="text-muted">
                    hr@tekmindsoft.in
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-8">

            <div className="card border-0 shadow p-4">

              <h4 className="fw-bold mb-4">
                Send Message
              </h4>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;