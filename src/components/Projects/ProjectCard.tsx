import { useState } from "react";
import type { Project } from "../../data/projectsData";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);

  const lastVideo =
    project.videos && project.videos.length > 0
      ? project.videos[project.videos.length - 1]
      : null;

  return (
    <div
      className="project-card relative overflow-hidden"
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
        if (!hasVideoLoaded) setIsVideoLoading(true); // only reset before first load
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fallback image */}
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        style={{ display: isHovered && lastVideo && hasVideoLoaded ? "none" : "block" }}
      />

      {/* Video */}
      {isHovered && lastVideo && (
        <video
          src={lastVideo}
          className="project-image"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => {
            setIsVideoLoading(false);
            setHasVideoLoaded(true);
          }}
          style={{ display: isVideoLoading ? "none" : "block" }}
        />
      )}

      {/* Loader (spinner) */}
      {isHovered && lastVideo && isVideoLoading && !hasVideoLoaded && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {/* Overlay title */}
      <div className="project-overlay">{project.title}</div>
    </div>
  );
}
