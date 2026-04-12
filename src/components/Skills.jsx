import React, { useState } from 'react'
import { skills } from '../data/index'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

function SkillCard({ skill }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
    >
      <div className="skill-icon">
        <img src={skill.icon} alt={skill.name} loading="lazy" />
      </div>
      {showTooltip && <div className="skill-tooltip">{skill.name}</div>}
    </div>
  )
}

export default function SkillsSection() {
  const titleRef = useReveal()
  const [activeGroup, setActiveGroup] = useState('Frontend')
  const marqueeSkills = [...Object.values(skills).flat(), ...Object.values(skills).flat()]

  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Skills and Tools</div>
          <h2 className="section-title">
            My technical
            <br />
            <span style={{ color: 'var(--teal)' }}>arsenal</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to move from product idea to polished deployment.
          </p>
        </div>

        <div className="skills-tabs">
          {Object.keys(skills).map(group => (
            <button
              key={group}
              className={`skills-tab ${activeGroup === group ? 'active' : ''}`}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeGroup].map((skill, index) => (
            <div key={skill.name} style={{ transitionDelay: `${index * 0.05}s` }}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        <div className="skills-marquee-wrap">
          <div className="skills-marquee">
            {marqueeSkills.map((skill, index) => (
              <span key={`${skill.name}-${index}`} className="marquee-item">
                <span className="marquee-dot" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
