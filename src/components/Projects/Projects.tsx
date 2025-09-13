import { useState } from "react";
import "./Projects.css";
import { projects } from "../../data/projectsData";
import type { Project } from "../../data/projectsData"; 
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Helper to get total slides (images + videos)
  const getTotalSlides = (project: Project) => {
    return (project.images?.length || 0) + (project.videos?.length || 0);
  };

  const handleNext = (project: Project) => {
    const total = getTotalSlides(project);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = (project: Project) => {
    const total = getTotalSlides(project);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-categories">
        {["Prototypes", "Software"].map((category) => (
          <div key={category}>
            <h3 className="category-title">{category.toUpperCase()}</h3>
            <div className="projects-grid">
              {projects.filter((p) => p.category === category).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentIndex(0); // Reset when opening modal
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          onClose={() => setSelectedProject(null)}
          onNext={() => handleNext(selectedProject)}
          onPrev={() => handlePrev(selectedProject)}
          onDotClick={handleDotClick}
        />
      )}
    </section>
  );
}
