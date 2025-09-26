import { useRef, useState, useEffect } from "react";
import "./Projects.css";
import { projects } from "../../data/projectsData";
import type { Project } from "../../data/projectsData"; 
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTotalSlides = (project: Project) =>
    (project.images?.length || 0) + (project.videos?.length || 0);

  const handleNext = (project: Project) => {
    const total = getTotalSlides(project);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = (project: Project) => {
    const total = getTotalSlides(project);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDotClick = (index: number) => setCurrentIndex(index);

  // State to track visibility of each card
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

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
                .map((project) => {
                  const cardRef = useRef<HTMLDivElement | null>(null);

                  // Observe each card
                  useEffect(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting && !visibleCards.includes(project.id)) {
                          setVisibleCards((prev) => [...prev, project.id]);
                          observer.disconnect();
                        }
                      },
                      { threshold: 0.3 }
                    );

                    if (cardRef.current) observer.observe(cardRef.current);

                    return () => observer.disconnect();
                  }, [project.id, visibleCards]);

                  return (
                    <div
                      key={project.id}
                      ref={cardRef}
                      className={`project-card-wrapper slide-up ${
                        visibleCards.includes(project.id) ? "animate" : ""
                      }`}
                    >
                      <ProjectCard
                        project={project}
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentIndex(0);
                        }}
                      />
                    </div>
                  );
                })}
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
