import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="particles-canvas"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 200 } },
          color: { value: ["#FFFFFF", "#2ecc71"] },
          shape: { type: "circle" },
          opacity: { value: 0.1, random: true },
          size: { value: 2, random: true },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["connect"] },
            resize: true,
          },
          modes: {
            connect: { distance: 100, radius: 300, links: { opacity: 0.1 } }
          },
        },
        detectRetina: true,
      }}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesBackground;
