import './About.css';
import image from '/src/assets/JAMCO.png';
import StaticBackground from '../StaticBackground';

export default function About() {
  return (
    <section id="about" className="about-container">
      <StaticBackground />

      <h2 className="about-title">ABOUT</h2>

      <div className="container">
        {/* LEFT COLUMN */}
        <div className="left">
          <div className="centered">
            <img src={image} alt="Mark Louie Jamco" />
            <p><strong>Mark Louie Jamco</strong></p>
            <p>Bachelor of Science in Computer Engineering</p>
          </div>

          <p>SUMMARY</p>
          <ul>
            <li>
              Fresh Computer Engineering graduate, Cum Laude, with foundations in programming,
              software and web development, and embedded systems. Experienced in developing
              applications using C, C++, Python, C#, and JavaScript/TypeScript, as well as
              hardware/software projects including IoT monitoring systems, robotics, and web
              applications.
            </li>
          </ul>

          <p>ACHIEVEMENTS</p>
          <ul>
            <li>Cum Laude (1 of 2 Latin Honors in College of Engineering)</li>
            <li>Special Opportunity Program Graduate: Arduino Programming</li>
            <li>TESDA NCII Computer Systems Servicing Passer</li>
            <li>
              2 Consecutive Year Top Student Performer Awardee
              (2nd Year and 3rd Year College)
            </li>
          </ul>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="middle">
          <p>EXPERIENCE</p>

          <p>Special Opportunity Program - Arduino Programming (Jan 2025 - Jun 2025)</p>
          <ul>
            <li>Developed various prototype projects integrating sensors, motors, and other components</li>
            <li>Focused on programming, circuitry, and components integration</li>
          </ul>

          <p>240hrs On-The-Job Training (OJT) ICT Technical Staff (Aug 2024 - Oct 2024)</p>
          <ul>
            <li>Assisted in information dissemination, documentation, and records management</li>
            <li>Operated computer systems and designed public documents for communication</li>
            <li>Maintained ICT equipment through troubleshooting, repairs, and preventive maintenance</li>
          </ul>

          <p>TESDA NCIII Computer Systems Servicing (Jul 2024 - Sep 2024)</p>
          <ul>
            <li>Basic Competencies – workplace communication, teamwork, professionalism, safety</li>
            <li>Common Competencies – quality standards, computer operations, technical drawings, calculations, electronics handling</li>
            <li>Core Competencies – computer system installation, networking/server setup, maintenance/repair</li>
          </ul>
        </div>

{/* RIGHT COLUMN */}
<div className="right">
  <p>SKILLS AND TOOLS EXPERIENCED</p>

  <p>Software Development</p>
  <ul className="skills-grid">
    <li><i className="fa-brands fa-html5"></i> HTML 5</li>
    <li><i className="fa-brands fa-css3"></i> CSS</li>
    <li><i className="fa-brands fa-react"></i> React.JS</li>
    <li><i className="fa-brands fa-bootstrap"></i> Bootstrap</li>
    <li><i className="fa-brands fa-js"></i> JavaScript</li>
    <li><i className="fa-solid fa-code"></i>TypeScript</li> 
    <li><i className="fa-brands fa-node"></i> Node</li>
    <li><i className="fa-solid fa-c"></i> C</li>
    <li><i className="fa-solid fa-plus"></i>C++</li> 
    <li><i className="fa-brands fa-python"></i> Python</li>
    <li><i className="fa-brands fa-php"></i> phpMyAdmin</li>
  </ul>

  <p>Prototyping</p>
  <ul className="skills-grid">
    <li><i className="fa-brands fa-raspberry-pi"></i> Raspberry Pi</li>
    <li><i className="fa-solid fa-a"></i>Arduino</li> 
    <li><i className="fa-solid fa-microchip"></i> Integrated Circuits</li>
    <li><i className="fa-solid fa-robot"></i> Robotics</li>
    <li><i className="fa-solid fa-wifi"></i> IoT Development</li>
    <li><i className="fa-solid fa-code-branch"></i> Embedded Systems</li>
  </ul>

  <p>Visualization and 3D Design</p>
  <ul className="skills-grid">
    <li><i className="fa-brands fa-figma"></i> Figma</li>
    <li><i className="fa-solid fa-pen-nib"></i> Canva</li>
    <li><i className="fa-solid fa-cube"></i> Solidworks</li>
    <li><i className="fa-solid fa-b"></i>Blender</li> 
  </ul>

  <p>Productivity and Standards</p>
  <ul className="skills-grid">
    <li><i className="fa-brands fa-microsoft"></i> Microsoft 365</li>
    <li><i className="fa-solid fa-infinity"></i>VS Code</li> 
    <li><i className="fa-brands fa-unity"></i> Unity</li>
    <li><i className="fa-solid fa-atom"></i> Proteus</li>
    <li><i className="fa-brands fa-github"></i> GitHub</li>
  </ul>
</div>
      </div>
    </section>
  );
}
