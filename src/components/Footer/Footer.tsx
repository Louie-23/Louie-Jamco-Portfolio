import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Louie-23" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/mark-louie-jamco-aa7029381" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:marklouiejamco23@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://facebook.com/marklouieabellon.jamco" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <p>© {new Date().getFullYear()} Mark Louie Jamco</p>
    </footer>
  );
}
