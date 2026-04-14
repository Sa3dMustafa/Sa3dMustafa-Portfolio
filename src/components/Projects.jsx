import React, { useState, useMemo } from "react";
import { projects } from "../data";
import { useReveal } from "../hooks/useReveal";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const normalizeTech = (tech) =>
  tech.toLowerCase().replace(/\s|\./g, "");

const FILTERS = ["All", "React", "Next.js", "JavaScript", "HTML&CSS"];

function ProjectCard({ project, onOpen, index }) {
  const ref = useReveal();

  return (
    <div
      className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
      ref={ref}
      onClick={() => onOpen(project)}
    >
      <div className="project-image">
        <img src={project.images?.[0]} alt={project.title} />
        <div className="project-image-overlay" />
      </div>

      <div className="project-content">
        <div className="project-top">
          <div className="project-emoji">
            {project.emoji}
            <h3 className="project-title">{project.title}</h3>
          </div>
          <div className="project-tagline">{project.tagline}</div>
        </div>

        <p className="project-desc">{project.shortDesc}</p>

        <div className="project-tech">
          {project.tech.slice(0, 6).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Live Demo →
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modal, setModal] = useState(null);

  const [visibleCount, setVisibleCount] = useState(4);

  const titleRef = useReveal();

  const filterMap = useMemo(
    () => ({
      All: () => true,

      React: (project) =>
        normalizeTech(project.primaryTech || "") === "react",

      "Next.js": (project) =>
        normalizeTech(project.primaryTech || "") === "nextjs",

      JavaScript: (project) => {
        const tech = normalizeTech(project.primaryTech || "");
        return ["javascript", "js"].includes(tech);
      },

      "HTML&CSS": (project) => {
        const tech = normalizeTech(project.primaryTech || "");
        return ["html", "css"].includes(tech);
      },
    }),
    []
  );

  const filtered = useMemo(() => {
    const fn = filterMap[activeFilter] || filterMap.All;
    return projects.filter(fn);
  }, [activeFilter, filterMap]);

  const visibleProjects = filtered.slice(0, visibleCount);

  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const toggleAll = () => {
    setVisibleCount(hasMore ? filtered.length : 5);
  };

  return (
    <section id="projects" className="section-pad">
      <div className="projects-container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Featured Projects</div>

          <h2 className="section-title">
            Work that speaks <br />
            <span style={{ color: "var(--teal)" }}>for itself</span>
          </h2>

          <p className="section-subtitle">
            Each project is a story of a problem solved with clean code,
            thoughtful UX, and measurable impact.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(4);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setModal}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="projects-controls">
          {hasMore && (
            <button className="btn-primary" onClick={loadMore}>
              Load More ↓
            </button>
          )}

          {!hasMore && filtered.length > 4 && (
            <button className="btn-outline" onClick={toggleAll}>
              Show Less ↑
            </button>
          )}
        </div>
      </div>

      {modal && (
        <ProjectModal project={modal} onClose={() => setModal(null)} />
      )}
    </section>
  );
}