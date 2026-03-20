import { useEffect, useRef, useState } from "react";
import {
  FaAtom,
  FaBootstrap,
  FaCode,
  FaCodeBranch,
  FaCss3Alt,
  FaCube,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaMicrochip,
  FaMicrosoft,
  FaNodeJs,
  FaPenNib,
  FaPython,
  FaRaspberryPi,
  FaReact,
  FaRobot,
  FaUnity,
  FaWifi,
} from "react-icons/fa";
import {
  SiArduino,
  SiBlender,
  SiPhpmyadmin,
  SiTypescript,
} from "react-icons/si";
import "./About.css";
import image from "../../assets/JAMCO.png";
import StaticBackground from "../StaticBackground";

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
            <img src={image} alt="Mark Louie Jamco" loading="lazy" />
            <p><strong>Mark Louie Jamco</strong></p>
            <p>Bachelor of Science in Computer Engineering</p>
          </div>

          <p>SUMMARY</p>
          <ul>
            <li>
              Fresh Computer Engineering graduate, Cum Laude, with foundations in
              programming, software and web development, and embedded systems.
              Experienced in C, C++, Python, C#, JavaScript/TypeScript, IoT,
              robotics, and web applications.
            </li>
          </ul>

          <p>ACHIEVEMENTS</p>
          <ul>
            <li>Cum Laude (1 of 2 Latin Honors)</li>
            <li>Arduino Programming Graduate</li>
            <li>TESDA NCII Passer</li>
            <li>2 Consecutive Year Top Student Performer (2nd and 3rd Year)</li>
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
            <li>Focused on programming, circuitry, and component integration</li>
          </ul>
          <p>OJT ICT Technical Staff (Aug 2024 - Oct 2024)</p>
          <ul>
            <li>Assisted in information dissemination, documentation, and records management</li>
            <li>Operated computer systems and designed public documents</li>
            <li>Maintained ICT equipment through troubleshooting, repairs, and preventive maintenance</li>
          </ul>
          <p>TESDA NCIII Computer Systems Servicing (Jul 2024 - Sep 2024)</p>
          <ul>
            <li>Basic Competencies - communication, teamwork, professionalism, safety</li>
            <li>Common Competencies - quality standards, computer operations, technical drawings, electronics handling</li>
            <li>Core Competencies - installation, networking/server setup, maintenance/repair</li>
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
            <li><FaHtml5 aria-hidden="true" /> HTML 5</li>
            <li><FaCss3Alt aria-hidden="true" /> CSS</li>
            <li><FaReact aria-hidden="true" /> React.js</li>
            <li><FaBootstrap aria-hidden="true" /> Bootstrap</li>
            <li><FaJs aria-hidden="true" /> JavaScript</li>
            <li><SiTypescript aria-hidden="true" /> TypeScript</li>
            <li><FaNodeJs aria-hidden="true" /> Node.js</li>
            <li><FaCode aria-hidden="true" /> C</li>
            <li><FaCode aria-hidden="true" /> C++</li>
            <li><FaPython aria-hidden="true" /> Python</li>
            <li><SiPhpmyadmin aria-hidden="true" /> phpMyAdmin</li>
          </ul>

          <p>Prototyping</p>
          <ul className="skills-grid">
            <li><FaRaspberryPi aria-hidden="true" /> Raspberry Pi</li>
            <li><SiArduino aria-hidden="true" /> Arduino</li>
            <li><FaMicrochip aria-hidden="true" /> Integrated Circuits</li>
            <li><FaRobot aria-hidden="true" /> Robotics</li>
            <li><FaWifi aria-hidden="true" /> IoT Development</li>
            <li><FaCodeBranch aria-hidden="true" /> Embedded Systems</li>
          </ul>

          <p>Visualization and 3D Design</p>
          <ul className="skills-grid">
            <li><FaFigma aria-hidden="true" /> Figma</li>
            <li><FaPenNib aria-hidden="true" /> Canva</li>
            <li><FaCube aria-hidden="true" /> Solidworks</li>
            <li><SiBlender aria-hidden="true" /> Blender</li>
          </ul>

          <p>Productivity and Standards</p>
          <ul className="skills-grid">
            <li><FaMicrosoft aria-hidden="true" /> Microsoft 365</li>
            <li><FaCode aria-hidden="true" /> VS Code</li>
            <li><FaUnity aria-hidden="true" /> Unity</li>
            <li><FaAtom aria-hidden="true" /> Proteus</li>
            <li><FaGithub aria-hidden="true" /> GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
