import "./Resume.css";

const focusAreas = [
  "Web Application Security",
  "Security Automation",
  "Full-Stack Development",
  "Python Development",
  "Network Security",
  "Secure Software Design",
];

const resumeDetails = [
  {
    label: "ROLE",
    value: "Cybersecurity Student · Developer",
  },
  {
    label: "EDUCATION",
    value: "B.E Cybersecurity",
  },
  {
    label: "INSTITUTION",
    value: "SRM Valliammai Engineering College",
  },
  {
    label: "INTEREST",
    value: "Security × Development",
  },
];

export default function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="container">

        <div className="resume-header">

          <div className="section-number">
            08
          </div>

          <div>
            <span className="eyebrow">
              PROFESSIONAL PROFILE
            </span>

            <h2>
              THE SHORT
              <br />
              <span>VERSION.</span>
            </h2>
          </div>

          <p>
            A concise overview of my technical direction,
            education and areas of interest.
          </p>

        </div>


        <div className="resume-layout">

          {/* PROFILE */}

          <div className="resume-profile">

            <div className="resume-profile-top">

              <span className="resume-code">
                PROFILE_01
              </span>

              <span className="resume-status">
                AVAILABLE FOR OPPORTUNITIES
              </span>

            </div>


            <h3>
              Avinash K
            </h3>

            <p className="resume-role">
              CYBERSECURITY STUDENT / DEVELOPER
            </p>

            <p className="resume-summary">
              I am a cybersecurity student with a strong
              interest in web development and security
              engineering. I enjoy turning technical concepts
              into practical projects and continuously
              exploring how software can be built more
              securely.
            </p>


            <div className="resume-details">

              {resumeDetails.map((detail) => (
                <div
                  className="resume-detail"
                  key={detail.label}
                >
                  <span>
                    {detail.label}
                  </span>

                  <strong>
                    {detail.value}
                  </strong>
                </div>
              ))}

            </div>


            <div className="resume-actions">

              <a
                href="/assets/Avinash-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-primary"
              >
                VIEW RESUME
                <span>↗</span>
              </a>

              <a
                href="/assets/Avinash-Resume.pdf"
                download
                className="resume-secondary"
              >
                DOWNLOAD PDF
                <span>↓</span>
              </a>

            </div>

          </div>


          {/* CURRENTLY EXPLORING */}

          <aside className="exploring">

            <span className="exploring-label">
              CURRENTLY EXPLORING
            </span>

            <h3>
              Where I'm
              <br />
              going next.
            </h3>

            <div className="focus-list">

              {focusAreas.map((area, index) => (
                <div
                  className="focus-item"
                  key={area}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <p>
                    {area}
                  </p>

                </div>
              ))}

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}
