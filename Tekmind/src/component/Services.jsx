import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={45} className="text-primary" />,
      title: "Web Development",
      description:
        "We build fast, secure and responsive websites using modern technologies.",
    },
    {
      icon: <FaMobileAlt size={45} className="text-success" />,
      title: "Mobile App Development",
      description:
        "Android and iOS applications with excellent performance and user experience.",
    },
    {
      icon: <FaPaintBrush size={45} className="text-danger" />,
      title: "UI / UX Design",
      description:
        "Creative and user-friendly designs that improve customer engagement.",
    },
    {
      icon: <FaBullhorn size={45} className="text-warning" />,
      title: "Digital Marketing",
      description:
        "SEO, social media marketing and online campaigns to grow your business.",
    },
    {
      icon: <FaCloud size={45} className="text-info" />,
      title: "Cloud Solutions",
      description:
        "Cloud hosting, deployment and infrastructure management services.",
    },
    {
      icon: <FaDatabase size={45} className="text-secondary" />,
      title: "Database Management",
      description:
        "Secure database design, optimization, backup and maintenance.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            We provide complete IT solutions to help your business grow.
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow h-100 text-center p-4">

                <div className="mb-3">
                  {service.icon}
                </div>

                <h4 className="fw-bold">
                  {service.title} 
                </h4>

                <p className="text-muted mt-3">
                  {service.description}
                </p>

                <button className="btn btn-primary mt-3">
                  Read More
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section> 
  );
}

export default Services; 