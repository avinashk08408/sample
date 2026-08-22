import "./Stack.css";

const stackGroups = [
  {
    number: "01",
    title: "FRONTEND",
    description: "Interfaces & experiences",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "BACKEND & APIs",
    description: "Application logic",
    skills: ["Python", "Flask", "REST APIs", "FastAPI"],
  },
  {
    number: "03",
    title: "CYBERSECURITY",
    description: "Security & analysis",
    skills: ["Linux", "Nmap", "Wireshark", "Burp Suite"],
  },
  {
    number: "04",
    title: "LANGUAGES",
    description: "Programming foundations",
    skills: ["Python", "C", "C++", "Go"],
  },
  {
    number: "05",
    title: "TOOLS & INFRA",
    description: "Development environment",
    skills: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

export default function Stack() {
  return (
    <section className="stack section" id="stack">
      <div className="container">

        <div className="stack-header">

          <div className="section-number">
            02
          </div>

          <div>
            <span className="eyebrow">
              ENGINEERING STACK
            </span>

            <h2>
              TOOLS I
              <br />
              <span>WORK WITH</span>
            </h2>
          </div>

          <p>
            A practical technology stack built around
            modern web development and cybersecurity.
          </p>

        </div>


        <div className="stack-list">

          {stackGroups.map((group) => (
            <article
              className="stack-item"
              key={group.number}
            >

              <div className="stack-number">
                {group.number}
              </div>

              <div className="stack-title">
                <h3>{group.title}</h3>
                <span>{group.description}</span>
              </div>

              <div className="stack-skills">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

              <div className="stack-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        <div className="stack-footer">
          <span className="mono">
            CONTINUOUSLY EXPANDING
          </span>

          <span className="stack-line"></span>

          <span className="mono">
            2026 →
          </span>
        </div>

      </div>
    </section>
  );
}
