import "./About.css";

const profileDetails = [
  {
    label: "NAME",
    value: "Avinash K",
  },
  {
    label: "COLLEGE",
    value: "SRM Valliammai Engineering College",
  },
  {
    label: "COURSE",
    value: "B.E Cybersecurity",
  },
  {
    label: "FOCUS",
    value: "Web Development & Cybersecurity",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-heading">
          <div className="section-number">01</div>

          <div>
            <span className="eyebrow">PROFILE</span>
            <h2>
              WHO <span>I AM</span>
            </h2>
          </div>
        </div>

        <div className="about-layout">

          {/* LEFT */}

          <div className="about-intro">

            <p className="about-lead">
              I'm Avinash K, a Cybersecurity student at
              <strong> SRM Valliammai Engineering College.</strong>
            </p>

            <p>
              I enjoy building modern web applications while
              exploring cybersecurity tools, security concepts
              and practical ways to solve real-world problems.
            </p>

            <p>
              My interests sit at the intersection of
              <strong> software development, web security and
              continuous learning.</strong>
            </p>

            <div className="about-principle">
              <span>ENGINEERING PRINCIPLE</span>

              <h3>
                Build with curiosity.
                <br />
                Secure with intention.
              </h3>
            </div>

          </div>


          {/* RIGHT */}

          <div className="about-details">

            {profileDetails.map((item, index) => (
              <div
                className="profile-row"
                key={item.label}
              >
                <span className="profile-index">
                  0{index + 1}
                </span>

                <span className="profile-label">
                  {item.label}
                </span>

                <span className="profile-value">
                  {item.value}
                </span>
              </div>
            ))}

          </div>

        </div>


        {/* STATS */}

        <div className="about-stats">

          <div className="stat">
            <strong>04+</strong>
            <span>PROJECTS</span>
          </div>

          <div className="stat">
            <strong>01+</strong>
            <span>HACKATHONS</span>
          </div>

          <div className="stat">
            <strong>03+</strong>
            <span>CERTIFICATIONS</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>LEARNING</span>
          </div>

        </div>

      </div>
    </section>
  );
}
