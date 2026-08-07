import {
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaGlobe,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers size={45} />,
      number: "250+",
      title: "Happy Clients",
    },
    {
      icon: <FaProjectDiagram size={45} />,
      number: "500+",
      title: "Projects Completed",
    },
    {
      icon: <FaAward size={45} />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <FaGlobe size={45} />,
      number: "20+",
      title: "Countries Served",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg,#0d6efd,#0b5ed7)",
      }}
    >
      <div className="container">

        <div className="row text-center">

          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="text-white">

                <div className="mb-3">
                  {item.icon}
                </div>

                <h2 className="fw-bold display-5">
                  {item.number}
                </h2>

                <h5>{item.title}</h5>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;