import React, { useState } from "react";
import { projects } from "../data";
import { useReveal } from "../hooks/useReveal";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const normalizeTech = (tech) => tech.toLowerCase().replace(/\s|\./g, "");

const filterMap = {
  All: () => true,
  React: (project) =>
    project.tech.some((tech) => normalizeTech(tech).includes("react")),
  "Next.js": (project) =>
    project.tech.some((tech) => normalizeTech(tech).includes("nextjs")),
  JavaScript: (project) =>
    project.tech.some((tech) => {
      const normalizedTech = normalizeTech(tech);
      return normalizedTech.includes("javascript") || normalizedTech === "js";
    }),
};

function ProjectCard({ project, onOpen, index }) {
  const ref = useReveal();

  return (
    <div
      className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
      ref={ref}
      onClick={() => onOpen(project)}
    >
      <div
        className="project-card-glow"
        style={{ "--card-color": project.color }}
      />

      <div className="project-emoji">{project.emoji}</div>

      <div className="project-top">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tagline">{project.tagline}</div>
      </div>

      <p className="project-desc">{project.shortDesc}</p>

      <div className="project-tech">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}

        {project.tech.length > 4 && (
          <span className="tech-badge">+{project.tech.length - 4}</span>
        )}
      </div>

      <div className="project-actions">
        {project.demo && <button
          type="button"
          className="proj-btn proj-btn-primary"
          onClick={(event) => {
            event.stopPropagation();
            if (project.demo) {
              window.open(project.demo, "_blank", "noopener,noreferrer");
            }
          }}
          disabled={!project.demo}
        >
          Live Demo -&gt;
        </button>}

        {project.github && <button
          type="button"
          className="proj-btn proj-btn-ghost"
          onClick={(event) => {
            event.stopPropagation();
            if (project.github) {
              window.open(project.github, "_blank", "noopener,noreferrer");
            }
          }}
          disabled={!project.github}
        >
          GitHub
        </button>}

        <button
          type="button"
          className="proj-btn-arrow"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project);
          }}
        >
          Details -&gt;
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modal, setModal] = useState(null);
  const titleRef = useReveal();

  const filters = ["All", "React", "Next.js", "JavaScript"];
  const filtered = projects.filter(filterMap[activeFilter] ?? filterMap.All);

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Featured Projects</div>

          <h2 className="section-title">
            Work that speaks
            <br />
            <span style={{ color: "var(--teal)" }}>for itself</span>
          </h2>

          <p className="section-subtitle">
            Each project is a story of a problem solved with clean code,
            thoughtful UX, and measurable impact.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setModal}
            />
          ))}
        </div>
      </div>

      {modal && (
        <ProjectModal project={modal} onClose={() => setModal(null)} />
      )}
    </section>
  );
}
