import "./Navbar.css";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Stack", "stack"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Certifications", "certifications"],
  ["Activity", "activity"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="#home" className="brand">
          AK
        </a>

        <nav className="desktop-nav">
          {navItems.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              className={id === "home" ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        <button className="theme-button" aria-label="Theme">
          ◌
        </button>

        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}
