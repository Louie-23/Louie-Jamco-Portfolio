import { useState } from "react";
import type { Project } from "../../data/projectsData";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  // pick the last video if available
  const lastVideo =
    project.videos && project.videos.length > 0
      ? project.videos[project.videos.length - 1]
      : null;

  return (
    <div
      className="project-card"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Show last video on hover if available */}
      {isHovered && lastVideo ? (
        <video
          src={lastVideo}
          className="project-image"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}

      <div className="project-overlay">{project.title}</div>
    </div>
  );
}
