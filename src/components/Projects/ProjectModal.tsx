import { useEffect } from "react";
import type { Project } from "../../data/projectsData";
import Slider from "./Slider";

type Props = {
  project: Project;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
};

export default function ProjectModal({
  project,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onDotClick,
}: Props) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="modal-close"
          aria-label="Close project details"
        >
          ×
        </button>

        <Slider
          project={project}
          currentIndex={currentIndex}
          onNext={onNext}
          onPrev={onPrev}
          onDotClick={onDotClick}
        />

        <h3 id="project-modal-title" className="modal-title">
          {project.title}
        </h3>
        <p className="modal-description">{project.description}</p>

        <div className="modal-footer">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Project
            </a>
          )}
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
