import React, { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  const previewUrl = project.demo || 'Live demo link coming soon'
  const hasDemo = Boolean(project.demo)
  const hasGithub = Boolean(project.github)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header">
          <span className="modal-emoji">{project.emoji}</span>
          <div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4>🔍 The Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="modal-section">
            <h4>⚡ The Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div className="modal-section">
            <h4>📈 Impact & Results</h4>
            <p>{project.impact}</p>
          </div>

          <div className="modal-section">
            <h4>✅ Key Achievements</h4>
            <ul className="modal-achievements">
              {project.achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="ach-dot" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4>🛠 Tech Stack</h4>
            <div className="modal-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-screenshot">
            <div className="screenshot-bar">
              <span />
              <span />
              <span />
              <div className="url-bar">
                <span>🔒</span> {previewUrl}
              </div>
            </div>
            <div className="screenshot-body">
              <div className="screenshot-grid">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="screenshot-block"
                    style={{ opacity: 0.4 + (index % 3) * 0.2 }}
                  />
                ))}
              </div>
              <div className="screenshot-label">Preview Placeholder</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Live Demo -&gt;
            </a>
          )}
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
