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
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          ✕
        </button>

        {/* Pass onDotClick down to Slider */}
        <Slider
          project={project}
          currentIndex={currentIndex}
          onNext={onNext}
          onPrev={onPrev}
          onDotClick={onDotClick} 
        />

        <h3 className="modal-title">{project.title}</h3>
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
         <button className="btn-secondary" onClick={onClose}>
           Close
         </button>
        </div>

      </div>
    </div>
  );
}
