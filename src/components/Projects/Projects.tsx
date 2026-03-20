import { useState } from "react";
import "./Projects.css";
import { projects } from "../../data/projectsData";
import type { Project } from "../../data/projectsData"; 
import ProjectModal from "./ProjectModal";
import AnimatedProjectCard from "./AnimatedProjectCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTotalSlides = (project: Project) =>
    (project.images?.length || 0) + (project.videos?.length || 0);

  const handleNext = (project: Project) => {
    const total = getTotalSlides(project);
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = (project: Project) => {
    const total = getTotalSlides(project);
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDotClick = (index: number) => setCurrentIndex(index);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title slide-right animate-on-scroll">PROJECTS</h2>

      <div className="projects-categories">
        {["Prototypes", "Software"].map((category) => (
          <div key={category} className="category-wrapper">
            <h3 className="category-title">{category.toUpperCase()}</h3>
            <div className="projects-grid">
              {projects
                .filter((p) => p.category === category)
                .map((project) => (
                  <AnimatedProjectCard
                    key={project.id}
                    project={project}
                    onOpen={() => {
                      setSelectedProject(project);
                      setCurrentIndex(0);
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
