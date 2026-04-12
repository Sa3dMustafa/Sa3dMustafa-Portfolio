import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollToTop, ThemeToggle } from './components/UIControls'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggle } = useTheme()

  // Initialise reveal observer for dynamically added elements
  useEffect(() => {
    if (loading) return
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [loading])

  if (loading) {
    return <LoadingScreen onDone={() => setLoading(false)} />
  }

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle theme={theme} onToggle={toggle} />
    </>
  )
}
