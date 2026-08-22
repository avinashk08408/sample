import "./Journey.css";

const journey = [
  {
    year: "2025 — PRESENT",
    type: "EDUCATION",
    title: "B.E Cybersecurity",
    place: "SRM Valliammai Engineering College",
    description:
      "Currently pursuing a degree with a focus on cybersecurity, software development and practical technical learning.",
  },
  {
    year: "2024",
    type: "EDUCATION",
    title: "Higher Secondary",
    place: "Don Bosco Matric Hr Sec School",
    description:
      "Completed higher secondary education with a strong foundation in computer science and core academic subjects.",
  },
  {
    year: "2022",
    type: "EDUCATION",
    title: "Secondary School",
    place: "Don Bosco Matric Hr Sec School",
    description:
      "Completed secondary education and developed an early interest in computers, technology and problem solving.",
  },
];

const milestones = [
  "Started building web applications",
  "Explored cybersecurity fundamentals",
  "Built security-focused projects",
  "Participated in hackathons",
  "Continuously expanding technical skills",
];

export default function Journey() {
  return (
    <section className="journey section" id="journey">
      <div className="container">

        <div className="journey-heading">

          <div className="section-number">
            04
          </div>

          <div>
            <span className="eyebrow">
              JOURNEY
            </span>

            <h2>
              EDUCATION &
              <br />
              <span>MILESTONES</span>
            </h2>
          </div>

          <p>
            The academic path and technical milestones
            that continue to shape my engineering journey.
          </p>

        </div>


        <div className="journey-layout">

          {/* TIMELINE */}

          <div className="timeline">

            {journey.map((item, index) => (
              <article
                className="timeline-item"
                key={item.title}
              >

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-content">

                  <span className="timeline-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.place}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>


          {/* MILESTONES */}

          <aside className="milestones">

            <span className="milestone-label">
              TECHNICAL MILESTONES
            </span>

            <h3>
              From learning
              <br />
              to building.
            </h3>

            <div className="milestone-list">

              {milestones.map((item, index) => (
                <div
                  className="milestone"
                  key={item}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <p>
                    {item}
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
