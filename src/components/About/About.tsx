import { useRef, useState, useEffect } from "react";
import './About.css';
import image from '/src/assets/JAMCO.png';
import StaticBackground from '../StaticBackground';

export default function About() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState({
    title: false,
    left: false,
    middle: false,
    right: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && id) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (leftRef.current) observer.observe(leftRef.current);
    if (middleRef.current) observer.observe(middleRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-container">
      <StaticBackground />

      <h2
        ref={titleRef}
        data-id="title"
        className={`about-title slide-right ${visible.title ? "animate" : ""}`}
      >
        ABOUT
      </h2>

      <div className="container">
        <div
          ref={leftRef}
          data-id="left"
          className={`left slide-up ${visible.left ? "animate" : ""}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="centered">
            <img src={image} alt="Mark Louie Jamco" />
            <p><strong>Mark Louie Jamco</strong></p>
            <p>Bachelor of Science in Computer Engineering</p>
          </div>

          <p>SUMMARY</p>
          <ul>
            <li>Fresh Computer Engineering graduate, Cum Laude, with foundations in programming, software and web development, and embedded systems. Experienced in C, C++, Python, C#, JavaScript/TypeScript, IoT, robotics, and web apps.</li>
          </ul>

          <p>ACHIEVEMENTS</p>
          <ul>
            <li>Cum Laude (1 of 2 Latin Honors)</li>
            <li>Arduino Programming Graduate</li>
            <li>TESDA NCII Passer</li>
            <li>2 Consecutive Year Top Student Performer (2nd & 3rd Year)</li>
          </ul>
        </div>

        <div
          ref={middleRef}
          data-id="middle"
          className={`middle slide-up ${visible.middle ? "animate" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <p>EXPERIENCE</p>
          <p>Arduino Programming (Jan 2025 - Jun 2025)</p>
          <ul>
            <li>Developed prototype projects integrating sensors, motors, and components</li>
            <li>Focused on programming, circuitry, and components integration</li>
          </ul>
          <p>OJT ICT Technical Staff (Aug 2024 - Oct 2024)</p>
          <ul>
            <li>Assisted in information dissemination, documentation, and records management</li>
            <li>Operated computer systems and designed public documents</li>
            <li>Maintained ICT equipment through troubleshooting, repairs, and preventive maintenance</li>
          </ul>
          <p>TESDA NCIII Computer Systems Servicing (Jul 2024 - Sep 2024)</p>
          <ul>
            <li>Basic Competencies – communication, teamwork, professionalism, safety</li>
            <li>Common Competencies – quality standards, computer operations, technical drawings, electronics handling</li>
            <li>Core Competencies – installation, networking/server setup, maintenance/repair</li>
          </ul>
        </div>

        <div
          ref={rightRef}
          data-id="right"
          className={`right slide-up ${visible.right ? "animate" : ""}`}
          style={{ animationDelay: "0.9s" }}
        >
          <p>SKILLS AND TOOLS</p>

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
            <li><i className="fa-solid fa-plus"></i> C++</li>
            <li><i className="fa-brands fa-python"></i> Python</li>
            <li><i className="fa-brands fa-php"></i> phpMyAdmin</li>
          </ul>

          <p>Prototyping</p>
          <ul className="skills-grid">
            <li><i className="fa-brands fa-raspberry-pi"></i> Raspberry Pi</li>
            <li><i className="fa-solid fa-a"></i> Arduino</li>
            <li><i className="fa-solid fa-microchip"></i> Integrated Circuits</li>
            <li><i className="fa-solid fa-robot"></i> Robotics</li>
            <li><i className="fa-solid fa-wifi"></i> IoT Development</li>
            <li><i className="fa-solid fa-code-branch"></i> Embedded Systems</li>
          </ul>

          <p>Visualization & 3D Design</p>
          <ul className="skills-grid">
            <li><i className="fa-brands fa-figma"></i> Figma</li>
            <li><i className="fa-solid fa-pen-nib"></i> Canva</li>
            <li><i className="fa-solid fa-cube"></i> Solidworks</li>
            <li><i className="fa-solid fa-b"></i> Blender</li>
          </ul>

          <p>Productivity & Standards</p>
          <ul className="skills-grid">
            <li><i className="fa-brands fa-microsoft"></i> Microsoft 365</li>
            <li><i className="fa-solid fa-infinity"></i> VS Code</li>
            <li><i className="fa-brands fa-unity"></i> Unity</li>
            <li><i className="fa-solid fa-atom"></i> Proteus</li>
            <li><i className="fa-brands fa-github"></i> GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
