import React, { useEffect, useState } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const previewUrl = project.demo || "Live demo link coming soon";
  const hasDemo = Boolean(project.demo);
  const hasGithub = Boolean(project.github);

  const [current, setCurrent] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="modal-header">
          <span className="modal-emoji">{project.emoji}</span>
          <div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        {/* ✅ IMAGE GALLERY */}
        {images.length > 0 && (
          <div className="modal-gallery">
            <img
              src={images[current]}
              alt="project preview"
              className="gallery-main-img"
            />

            {images.length > 1 && (
              <div className="gallery-controls">
                <button
                  onClick={() =>
                    setCurrent(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                >
                  ←
                </button>

                <button
                  onClick={() =>
                    setCurrent((prev) => (prev + 1) % images.length)
                  }
                >
                  →
                </button>
              </div>
            )}

            {/* Thumbnails */}
            <div className="gallery-thumbs">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrent(i)}
                  className={current === i ? "active" : ""}
                />
              ))}
            </div>
          </div>
        )}

        {/* Body */}
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
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {hasDemo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
              Live Demo →
            </a>
          )}

          {hasGithub && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}