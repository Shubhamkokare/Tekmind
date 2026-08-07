import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

//import member1 from "../assets/team/member1.jpg";
//import member2 from "../assets/team/member2.jpg";
//import member3 from "../assets/team/member3.jpg";
//import member4 from "../assets/team/member4.jpg";

function Team() {
  const team = [
    {
      image: member1,
      name: "John Smith",
      role: "CEO & Founder",
    },
    {
      image: member2,
      name: "Emily Johnson",
      role: "Project Manager",
    },
    {
      image: member3,
      name: "David Williams",
      role: "Full Stack Developer",
    },
    {
      image: member4,
      name: "Sophia Brown",
      role: "UI / UX Designer",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">
            OUR TEAM
          </h5>

          <h2 className="fw-bold">
            Meet Our Experts
          </h2>

          <p className="text-muted">
            Our experienced professionals work together to deliver
            high-quality software solutions.
          </p>
        </div>

        <div className="row">

          {team.map((member, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="card border-0 shadow text-center h-100">

                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h4 className="fw-bold">
                    {member.name}
                  </h4>

                  <p className="text-primary">
                    {member.role}
                  </p>

                  <div className="d-flex justify-content-center gap-3 mt-3">

                    <a href="#" className="text-dark fs-5">
                      <FaFacebookF />
                    </a>

                    <a href="#" className="text-dark fs-5">
                      <FaLinkedinIn />
                    </a>

                    <a href="#" className="text-dark fs-5">
                      <FaTwitter />
                    </a>

                    <a href="#" className="text-dark fs-5">
                      <FaInstagram />
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;