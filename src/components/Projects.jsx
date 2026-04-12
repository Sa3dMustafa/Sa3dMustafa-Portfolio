import React, { useState } from 'react'
import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'
import ProjectModal from './ProjectModal'
import './Projects.css'

function ProjectCard({ project, onOpen, index }) {
  const ref = useReveal()

  return (
    <div
      className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
      ref={ref}
      onClick={() => onOpen(project)}
    >
      <div className="project-card-glow" style={{ '--card-color': project.color }} />
      <div className="project-emoji">{project.emoji}</div>
      <div className="project-top">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tagline">{project.tagline}</div>
      </div>
      <p className="project-desc">{project.shortDesc}</p>
      <div className="project-tech">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="tech-badge">+{project.tech.length - 4}</span>
        )}
      </div>
      <div className="project-actions">
        <button
          className="proj-btn proj-btn-primary"
          onClick={e => { e.stopPropagation(); window.open(project.demo, '_blank') }}
        >
          Live Demo ↗
        </button>
        <button
          className="proj-btn proj-btn-ghost"
          onClick={e => { e.stopPropagation(); window.open(project.github, '_blank') }}
        >
          GitHub
        </button>
        <button className="proj-btn-arrow" onClick={() => onOpen(project)}>
          Details →
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modal, setModal] = useState(null)
  const titleRef = useReveal()
  const filters = ['All', 'React', 'Next.js', 'Node.js']

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(activeFilter))

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Featured Projects</div>
          <h2 className="section-title">
            Work that speaks<br />
            <span style={{ color: 'var(--teal)' }}>for itself</span>
          </h2>
          <p className="section-subtitle">
            Each project is a story of a problem solved with clean code, thoughtful UX, and measurable impact.
          </p>
        </div>

        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setModal}
            />
          ))}
        </div>
      </div>

      {modal && (
        <ProjectModal project={modal} onClose={() => setModal(null)} />
      )}
    </section>
  )
}
