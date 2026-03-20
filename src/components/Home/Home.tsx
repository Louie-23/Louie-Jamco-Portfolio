import "./Home.css";
import ParticlesBackground from "../ParticlesBackground";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="custom-title-container">
      <div className="particles-wrapper">
        <ParticlesBackground />
      </div>

      <div className="home-content">
        <h1 className="custom-title slide-right">
          Hello! I&apos;m <span className="green-name">Mark Louie Jamco</span>
          <br />
          Graduate in Bachelor of Science in
          <br />
          Computer Engineering
        </h1>

        <button className="custom-btn slide-left" onClick={() => scrollToSection("about")}>
          Know Me ↓
        </button>

        <div className="button-row slide-left">
          <button
            type="button"
            className="cv-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1uL1MoYqcf_iJ-2OXK1FiQ3PdshMiR0Ce?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Download CV
          </button>
          <button type="button" className="contact-btn" onClick={() => scrollToSection("contact")}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
