import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
    if (sections.length === 0) return;

    const handleScroll = () => {
      const referenceLine = window.innerHeight * 0.5;
      let current = sections[0].id || "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= referenceLine && rect.bottom > referenceLine) {
          current = section.id;
          break;
        }
      }

      setActive((prev) => (prev === current ? prev : current));

      if (current === "home" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="navbar-wrapper">
      <nav className="custom-navbar" aria-label="Primary navigation">
        <button
          type="button"
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="primary-nav" className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <a href="#home" className={active === "home" ? "active" : ""} onClick={() => setIsOpen(false)}>
              Main
            </a>
          </li>
          <li>
            <a href="#about" className={active === "about" ? "active" : ""} onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
