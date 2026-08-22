import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "AUTHENTICATION / SECURITY",
    title: "AuthShield",
    subtitle: "Role-Based Access Control System",
    description:
      "A secure authentication and authorization system designed around role-based access control, protected routes and user permissions.",
    technologies: ["Python", "Flask", "SQLite", "RBAC"],
    type: "SECURITY SYSTEM",
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    category: "WEB SECURITY",
    title: "Web Vulnerability Scanner",
    subtitle: "Automated Web Security Analysis",
    description:
      "A security-focused tool that analyzes websites for common vulnerabilities and configuration weaknesses.",
    technologies: ["Python", "Security", "Requests", "Web"],
    type: "SECURITY TOOL",
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    category: "CRYPTOGRAPHY / WEB",
    title: "Encrypted File Sharing",
    subtitle: "Temporary Secure File Transfer",
    description:
      "A secure file-sharing concept combining encryption with temporary access links designed to reduce unnecessary exposure of shared files.",
    technologies: ["Python", "Flask", "Cryptography", "Web"],
    type: "SECURE APPLICATION",
    github: "#",
    demo: "#",
  },
  {
    number: "04",
    category: "API / CLI",
    title: "Weather Forecast CLI",
    subtitle: "Command-Line Weather Application",
    description:
      "A lightweight command-line application that consumes a weather API and presents current weather information through a simple developer-focused interface.",
    technologies: ["Python", "REST API", "CLI"],
    type: "API APPLICATION",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="projects-top">
          <div className="section-number">03</div>

          <div>
            <span className="eyebrow">SELECTED WORK</span>

            <h2>
              THINGS I'VE
              <br />
              <span>BUILT.</span>
            </h2>
          </div>

          <p>
            A selection of projects where software development,
            security and problem solving come together.
          </p>
        </div>

        <div className="project-showcase">

          {/* PROJECT VISUAL */}

          <div className="project-visual">

            <div className="visual-top">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>

            <div className="visual-center">

              <div className="visual-grid"></div>

              <div className="project-symbol">
                {activeProject === 0 && "◈"}
                {activeProject === 1 && "</>"}
                {activeProject === 2 && "⌑"}
                {activeProject === 3 && "☁"}
              </div>

              <span className="visual-label">
                PROJECT_{project.number}
              </span>

            </div>

            <div className="visual-bottom">
              <span>AVINASH K</span>
              <span>2026</span>
            </div>

          </div>


          {/* PROJECT INFORMATION */}

          <div className="project-information">

            <div className="project-category">
              {project.category}
            </div>

            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

            <p className="project-description">
              {project.description}
            </p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github}>
                GitHub
                <span>↗</span>
              </a>

              <a href={project.demo}>
                Live View
                <span>↗</span>
              </a>
            </div>

          </div>

        </div>


        {/* PROJECT NAVIGATION */}

        <div className="project-navigation">

          <div className="project-counter">
            <strong>
              {String(activeProject + 1).padStart(2, "0")}
            </strong>

            <span>/</span>

            <span>
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="project-progress">
            <span
              style={{
                width: `${((activeProject + 1) / projects.length) * 100}%`,
              }}
            ></span>
          </div>

          <div className="project-arrows">
            <button
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              onClick={nextProject}
              aria-label="Next project"
            >
              →
            </button>
          </div>

        </div>


        {/* PROJECT INDEX */}

        <div className="project-index">

          {projects.map((item, index) => (
            <button
              key={item.number}
              className={
                activeProject === index ? "selected" : ""
              }
              onClick={() => setActiveProject(index)}
            >
              <span>{item.number}</span>
              {item.title}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
