import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-grid"></div>

      <div className="container hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span>HELLO, I'M</span>
          </div>

          <h1 className="hero-title">
            AVINASH <span>K</span>
          </h1>

          <div className="hero-role">
            CYBERSECURITY ENTHUSIAST & WEB DEVELOPER
          </div>

          <p className="hero-description">
            I build secure digital experiences with modern web
            technologies and cybersecurity tools. Focused on
            learning, building and solving real-world problems.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              Explore My Work
              <span>→</span>
            </a>

            <a
              href="#resume"
              className="btn btn-outline"
            >
              View Resume
              <span>↗</span>
            </a>

          </div>

          <div className="hero-social">

            <span>CONNECT WITH ME</span>

            <a href="#" aria-label="GitHub">
              GH
            </a>

            <a href="#" aria-label="LinkedIn">
              IN
            </a>

            <a href="#" aria-label="LeetCode">
              LC
            </a>

            <a href="#" aria-label="Email">
              @
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="hero-visual">

          <div className="portrait-system">

            <div className="portrait-ring ring-one"></div>

            <div className="portrait-ring ring-two"></div>

            <div className="portrait-ring ring-three"></div>

            <div className="portrait">

              <img
                src="/assets/profile.png"
                alt="Avinash K"
              />

            </div>

            <div className="orbit-dot dot-one"></div>
            <div className="orbit-dot dot-two"></div>
            <div className="orbit-dot dot-three"></div>

          </div>

          <div className="availability">
            <span></span>
            OPEN FOR
            <strong>COLLABORATIONS</strong>
          </div>

        </div>

      </div>

      <div className="hero-side-text">
        BUILD • SECURE • SOLVE
      </div>

    </section>
  );
}
