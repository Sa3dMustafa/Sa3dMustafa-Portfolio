import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const SOCIALS = [
  {
    name: 'GitHub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
      </svg>
    ),
    href: 'https://github.com/Sa3dMustafa',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/saad-mustafa/',
  },
]

export default function Contact() {
  const titleRef = useReveal()
  const formRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal" ref={titleRef}>
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Let's build<br />
              <span style={{ color: 'var(--teal)' }}>something great</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Whether you have a project idea, an open role, or just want to connect — my inbox is always open.
            </p>

            <div className="contact-info">
              <a href="mailto:saad.abdo01212@gmail.com" className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">saad.abdo01212@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/saad-mustafa/" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon">💼</div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">https://www.linkedin.com/in/saad-mustafa/</div>
                </div>
              </a>
            </div>

            <div className="social-links">
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label={s.name}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'sending' ? (
                  <>Sending <span className="sending-dots">...</span></>
                ) : status === 'sent' ? (
                  <>Message Sent ✓</>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              {status === 'sent' && (
                <p className="form-success">
                  ✅ Thanks! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
