import "./Activity.css";

const activityItems = [
  {
    number: "01",
    platform: "GITHUB",
    title: "BUILDING IN PUBLIC",
    description:
      "Projects, experiments and development work documented through repositories and commits.",
    metric: "ACTIVE",
    action: "VIEW GITHUB",
    link: "#",
  },
  {
    number: "02",
    platform: "LEETCODE",
    title: "PROBLEM SOLVING",
    description:
      "Practising programming fundamentals, logical thinking and algorithmic problem solving.",
    metric: "LEARNING",
    action: "VIEW PROFILE",
    link: "#",
  },
  {
    number: "03",
    platform: "LINKEDIN",
    title: "PROFESSIONAL GROWTH",
    description:
      "Sharing technical learning, projects, certifications and professional milestones.",
    metric: "GROWING",
    action: "CONNECT",
    link: "#",
  },
  {
    number: "04",
    platform: "HACKATHONS",
    title: "BUILDING UNDER PRESSURE",
    description:
      "Collaborating with teams to turn ideas into working technical solutions within limited time.",
    metric: "PARTICIPATING",
    action: "EXPLORE",
    link: "#",
  },
];

const metrics = [
  {
    value: "04+",
    label: "PROJECTS",
  },
  {
    value: "01+",
    label: "HACKATHONS",
  },
  {
    value: "03+",
    label: "CERTIFICATIONS",
  },
  {
    value: "∞",
    label: "LEARNING MODE",
  },
];

export default function Activity() {
  return (
    <section className="activity section" id="activity">
      <div className="container">

        {/* HEADER */}

        <div className="activity-header">

          <div className="section-number">
            06
          </div>

          <div>
            <span className="eyebrow">
              PROOF OF WORK
            </span>

            <h2>
              ACTIVITY &
              <br />
              <span>PROGRESS.</span>
            </h2>
          </div>

          <p>
            Beyond a list of skills — a record of learning,
            building, solving and participating.
          </p>

        </div>


        {/* METRICS */}

        <div className="activity-metrics">

          {metrics.map((metric) => (
            <div
              className="activity-metric"
              key={metric.label}
            >
              <strong>
                {metric.value}
              </strong>

              <span>
                {metric.label}
              </span>
            </div>
          ))}

        </div>


        {/* ACTIVITY LIST */}

        <div className="activity-list">

          {activityItems.map((item) => (
            <article
              className="activity-item"
              key={item.number}
            >

              <div className="activity-number">
                {item.number}
              </div>

              <div className="activity-platform">
                {item.platform}
              </div>

              <div className="activity-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="activity-status">
                <span></span>
                {item.metric}
              </div>

              <a
                href={item.link}
                className="activity-action"
              >
                {item.action}
                <span>↗</span>
              </a>

            </article>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="activity-statement">

          <span className="mono">
            CURRENT APPROACH
          </span>

          <h3>
            Learn → Build → Test → Improve
          </h3>

          <span className="statement-line"></span>

          <span className="mono">
            REPEAT
          </span>

        </div>

      </div>
    </section>
  );
}
