import './Home.css';
import ParticlesBackground from '../ParticlesBackground';

export default function Home() {
  const scrolltoabout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const scrolltocontact = () => {
    const section = document.getElementById("contact");
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
          Hello! I'm <span className="green-name">Mark Louie Jamco</span>
          <br />Graduate in Bachelor of Science in
          <br />Computer Engineering
        </h1>

        <button className="custom-btn slide-left" onClick={scrolltoabout}>Know Me ↓</button>

        <div className="button-row slide-left">
          <button
            className="cv-btn"
            onClick={() =>
            window.open(
             "https://drive.google.com/drive/folders/1uL1MoYqcf_iJ-2OXK1FiQ3PdshMiR0Ce?usp=sharing",
             "_blank"
              )   
             }
              >
               Download CV
           </button>
          <button className="contact-btn" onClick={scrolltocontact}>Contact Me</button>
        </div>

      </div>
    </section>
  );
}
