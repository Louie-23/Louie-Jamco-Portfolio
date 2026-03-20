import { useEffect, useRef, useState } from "react";
import type { Project } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

type Props = {
  project: Project;
  onOpen: () => void;
};

export default function AnimatedProjectCard({ project, onOpen }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card-wrapper slide-up ${isVisible ? "animate" : ""}`}
    >
      <ProjectCard project={project} onClick={onOpen} />
    </div>
  );
}
