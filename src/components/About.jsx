import React from 'react'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <div className="about-grid">
          <div className="reveal" ref={ref1}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              Crafting digital
              <br />
              experiences <span style={{ color: 'var(--teal)' }}>with purpose</span>
            </h2>
            <p className="about-text">
              I'm <strong>Saad Mustafa</strong>, a passionate Frontend Developer from Egypt specializing in building
              high-performance, visually engaging web applications. I obsess over clean code, pixel-perfect
              UI, and delivering experiences that feel effortless to users.
            </p>
            <p className="about-text">
              Beyond code, I've led technical circles, mentored developers, and driven community growth
              through IEEE and Google Developer Student Clubs - because great software is built by
              great teams.
            </p>
            <div className="about-values">
              {['Performance First', 'Clean Architecture', 'User-Centric Design', 'Continuous Learning'].map((value) => (
                <div key={value} className="value-chip">
                  <span className="value-dot" />
                  {value}
                </div>
              ))}
            </div>
            <div className="about-ctas">
              <a
                href="#contact"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Let's Talk
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://github.com/Sa3dMustafa"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="about-right reveal reveal-delay-2" ref={ref2}>
            <div className="about-card">
              <div className="about-card-header">
                <span>~/saad-mustafa</span>
                <div className="card-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="about-code">
                <div className="code-line"><span className="kw">const</span> <span className="var">developer</span> = {'{'}</div>
                <div className="code-line indent"><span className="key">name</span>: <span className="str">"Saad Mustafa"</span>,</div>
                <div className="code-line indent"><span className="key">role</span>: <span className="str">"Frontend Developer"</span>,</div>
                <div className="code-line indent"><span className="key">location</span>: <span className="str">"Egypt 🇪🇬"</span>,</div>
                <div className="code-line indent"><span className="key">focus</span>: [</div>
                <div className="code-line indent2"><span className="str">"React"</span>, <span className="str">"Next.js"</span>,</div>
                <div className="code-line indent2"><span className="str">"Performance"</span>, <span className="str">"UX"</span></div>
                <div className="code-line indent">],</div>
                <div className="code-line indent"><span className="key">available</span>: <span className="bool">true</span>,</div>
                <div className="code-line indent"><span className="key">passion</span>: <span className="str">"Crafting the web"</span></div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>

            <div className="about-badges">
              {[
                { icon: '🎓', title: 'CS Student', sub: 'MET Academy' },
                { icon: '⚡', title: 'IEEE', sub: 'Vice Head - Frontend' },
                { icon: '🌐', title: 'GDSC', sub: 'Head of PR' },
                { icon: '🏛️', title: 'NTI', sub: 'Intern' },
              ].map((badge) => (
                <div key={badge.title} className="about-badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <div>
                    <div className="badge-title">{badge.title}</div>
                    <div className="badge-sub">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
