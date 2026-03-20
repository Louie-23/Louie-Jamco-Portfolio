import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Louie-23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/mark-louie-jamco-aa7029381"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href="mailto:marklouiejamco23@gmail.com" aria-label="Email">
          <FaEnvelope aria-hidden="true" />
        </a>
        <a
          href="https://facebook.com/marklouieabellon.jamco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook aria-hidden="true" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mark Louie Jamco</p>
    </footer>
  );
}
