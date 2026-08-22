import "./Footer.css";

const footerLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#projects" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <button
              className="footer-name"
              onClick={scrollToTop}
            >
              AVINASH<span>.</span>
            </button>

            <p>
              Cybersecurity student & developer
              building secure digital experiences.
            </p>

          </div>


          <nav className="footer-navigation">

            <span className="footer-label">
              NAVIGATE
            </span>

            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}

          </nav>


          <div className="footer-social">

            <span className="footer-label">
              CONNECT
            </span>

            <a href="#" target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>

            <a href="mailto:your.email@example.com">
              EMAIL ↗
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 AVINASH K
          </span>

          <span>
            CYBERSECURITY × DEVELOPMENT
          </span>

          <button onClick={scrollToTop}>
            BACK TO TOP ↑
          </button>

        </div>

      </div>

    </footer>
  );
}
