import "./Contact.css";

const contactLinks = [
  {
    label: "EMAIL",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/yourusername",
    href: "#",
  },
  {
    label: "GITHUB",
    value: "github.com/yourusername",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-header">

          <div className="section-number">
            09
          </div>

          <div>
            <span className="eyebrow">
              CONTACT & COLLABORATION
            </span>

            <h2>
              LET'S CREATE
              <br />
              <span>SOMETHING USEFUL.</span>
            </h2>
          </div>

        </div>


        <div className="contact-main">

          {/* LEFT */}

          <div className="contact-intro">

            <span className="contact-index">
              AVAILABLE FOR
            </span>

            <h3>
              Projects.
              <br />
              Hackathons.
              <br />
              Opportunities.
            </h3>

            <p>
              I'm interested in opportunities where development,
              cybersecurity and problem solving come together.
            </p>

          </div>


          {/* RIGHT */}

          <div className="contact-links">

            {contactLinks.map((item, index) => (
              <a
                href={item.href}
                className="contact-link"
                key={item.label}
              >

                <div className="contact-link-number">
                  0{index + 1}
                </div>

                <div className="contact-link-content">

                  <span>
                    {item.label}
                  </span>

                  <strong>
                    {item.value}
                  </strong>

                </div>

                <div className="contact-arrow">
                  ↗
                </div>

              </a>
            ))}

          </div>

        </div>


        {/* FINAL STATEMENT */}

        <div className="contact-statement">

          <span>
            AVINASH K
          </span>

          <div className="statement-divider"></div>

          <strong>
            BUILD WITH INTENT.
          </strong>

          <span>
            2026
          </span>

        </div>

      </div>
    </section>
  );
}
