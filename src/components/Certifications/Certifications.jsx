import { useState } from "react";
import "./Certifications.css";

const certifications = [
  {
    number: "01",
    title: "Cybersecurity Fundamentals",
    issuer: "Certification Provider",
    date: "2026",
    category: "CYBERSECURITY",
    credential: "CREDENTIAL_01",
    image: "/assets/certificates/cybersecurity.png",
    verification: "#",
  },
  {
    number: "02",
    title: "Web Development",
    issuer: "Certification Provider",
    date: "2026",
    category: "WEB DEVELOPMENT",
    credential: "CREDENTIAL_02",
    image: "/assets/certificates/web-development.png",
    verification: "#",
  },
  {
    number: "03",
    title: "Python Programming",
    issuer: "Certification Provider",
    date: "2026",
    category: "PROGRAMMING",
    credential: "CREDENTIAL_03",
    image: "/assets/certificates/python.png",
    verification: "#",
  },
];

export default function Certifications() {
  const [active, setActive] = useState(0);

  const certificate = certifications[active];

  return (
    <section
      className="certifications section"
      id="certifications"
    >
      <div className="container">

        <div className="cert-header">

          <div className="section-number">
            05
          </div>

          <div>
            <span className="eyebrow">
              CREDENTIALS
            </span>

            <h2>
              CERTIFIED
              <br />
              <span>KNOWLEDGE.</span>
            </h2>
          </div>

          <p>
            A growing collection of certifications and
            credentials supporting my technical journey.
          </p>

        </div>


        <div className="cert-layout">

          {/* CERTIFICATE PREVIEW */}

          <div className="cert-preview">

            <div className="cert-preview-top">
              <span>{certificate.credential}</span>

              <span>
                {String(active + 1).padStart(2, "0")} /
                {String(certifications.length).padStart(2, "0")}
              </span>
            </div>

            <div className="certificate-paper">

              <div className="certificate-inner">

                <span className="certificate-small">
                  CERTIFICATE OF COMPLETION
                </span>

                <div className="certificate-line"></div>

                <span className="certificate-label">
                  THIS CREDENTIAL RECOGNIZES
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.issuer}
                </p>

                <div className="certificate-footer">
                  <span>{certificate.date}</span>

                  <span className="certificate-seal">
                    AK
                  </span>

                  <span>
                    {certificate.category}
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* CERTIFICATION INFORMATION */}

          <div className="cert-information">

            <span className="cert-category">
              {certificate.category}
            </span>

            <h3>
              {certificate.title}
            </h3>

            <div className="cert-meta">

              <div>
                <span>ISSUED BY</span>
                <strong>{certificate.issuer}</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>{certificate.date}</strong>
              </div>

            </div>

            <p>
              This credential represents a milestone in my
              continuous learning journey and demonstrates
              practical interest in the subject area.
            </p>

            <a
              href={certificate.verification}
              className="verify-button"
            >
              VERIFY CREDENTIAL
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* CERTIFICATE INDEX */}

        <div className="cert-index">

          {certifications.map((item, index) => (
            <button
              key={item.number}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >

              <span>
                {item.number}
              </span>

              <strong>
                {item.title}
              </strong>

              <small>
                {item.date}
              </small>

              <i>
                →
              </i>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
