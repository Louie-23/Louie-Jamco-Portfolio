import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StaticBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-static"
      init={particlesInit}
      options={{
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 200 } },
          color: { value: ["#FFFFFF", "#3BFF00"] },
          shape: { type: "circle" },
          opacity: { value: 0.2, random: true },
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
            onHover: { enable: false },
            onClick: { enable: false },
            resize: false,
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

export default StaticBackground;
