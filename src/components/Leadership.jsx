import React from 'react'
import { leadership } from '../data'
import { useReveal } from '../hooks/useReveal'
import './Leadership.css'

function LeadershipCard({ item, index }) {
  const ref = useReveal()
  return (
    <div className={`leadership-card reveal reveal-delay-${index + 1}`} ref={ref}>
      <div className="lcard-accent" />
      <div className="lcard-header">
        <div className="lcard-icon">{item.icon}</div>
        <div className="lcard-meta">
          <span className="lcard-period">{item.period}</span>
          <div className="lcard-org">{item.org}</div>
        </div>
      </div>
      <h3 className="lcard-role">{item.role}</h3>
      <ul className="lcard-points">
        {item.points.map((p, i) => (
          <li key={i}>
            <span className="lcard-dot" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Leadership() {
  const titleRef = useReveal()

  return (
    <section id="leadership" className="section-pad leadership-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Leadership</div>
          <h2 className="section-title">
            Building teams,<br />
            <span style={{ color: 'var(--teal)' }}>not just products</span>
          </h2>
          <p className="section-subtitle">
            Great software starts with great people. I've invested in building communities and mentoring the next wave of developers.
          </p>
        </div>

        <div className="leadership-timeline">
          <div className="timeline-line" />
          {leadership.map((item, i) => (
            <div key={item.role} className="timeline-item">
              <div className="timeline-dot">
                <span>{item.icon}</span>
              </div>
              <LeadershipCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
