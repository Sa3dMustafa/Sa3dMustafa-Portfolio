import React, { useState, useEffect } from 'react'
import { navLinks } from '../data/index'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero') }}>
          <span className="logo-bracket">&lt;</span>SM<span className="logo-bracket">/&gt;</span>
        </a>

        <div
          className={`nav-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />

        <ul
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <li className="nav-mobile-head">
            <div className="nav-mobile-brand">
              <span className="logo-bracket">&lt;</span>SM<span className="logo-bracket">/&gt;</span>
            </div>
            {/* <button
              type="button"
              className="nav-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span />
              <span />
            </button> */}
          </li>

          {/* <li className="nav-mobile-copy">
            Frontend developer crafting polished, high-performance web experiences.
          </li> */}

          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'nav-link active' : 'nav-link'}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={menuOpen ? 'line open1' : 'line'} />
          <span className={menuOpen ? 'line open2' : 'line'} />
          <span className={menuOpen ? 'line open3' : 'line'} />
        </button>
      </div>
    </nav>
  )
}
