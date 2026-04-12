import React from 'react'
import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

function ExpCard({ exp }) {
  const ref = useReveal()
  return (
    <div className="exp-card reveal" ref={ref}>
      <div className="exp-left">
        <div className="exp-icon">{exp.icon}</div>
        <div className="exp-line" />
      </div>
      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3 className="exp-title">{exp.title}</h3>
            <div className="exp-company">{exp.company}</div>
          </div>
          <div className="exp-right">
            <span className="exp-type">{exp.type}</span>
            <span className="exp-period">{exp.period}</span>
          </div>
        </div>
        <ul className="exp-points">
          {exp.points.map((p, j) => (
            <li key={j}><span className="exp-dot" />{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EducationCard() {
  const ref = useReveal()
  return (
    <div className="exp-card reveal" ref={ref}>
      <div className="exp-left">
        <div className="exp-icon">🎓</div>
      </div>
      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3 className="exp-title">B.Sc. Computer Science</h3>
            <div className="exp-company">MET Academy — Modern Education Technologies</div>
          </div>
          <div className="exp-right">
            <span className="exp-type">Education</span>
            <span className="exp-period">2022 – Present</span>
          </div>
        </div>
        <ul className="exp-points">
          <li><span className="exp-dot" />Active member of IEEE and Google Developer Student Club</li>
          <li><span className="exp-dot" />Led frontend development initiatives in student organizations</li>
          <li><span className="exp-dot" />Focused on algorithms, data structures, and software engineering</li>
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const titleRef = useReveal()

  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Experience</div>
          <h2 className="section-title">
            Where I've been<br />
            <span style={{ color: 'var(--teal)' }}>sharpening my craft</span>
          </h2>
        </div>
        <div className="experience-list">
          {experience.map((exp) => (
            <ExpCard key={exp.title} exp={exp} />
          ))}
          <EducationCard />
        </div>
      </div>
    </section>
  )
}
