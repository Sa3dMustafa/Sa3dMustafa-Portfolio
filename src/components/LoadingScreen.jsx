import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1500)
    const t2 = setTimeout(() => onDone(), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div className="loading-logo">
        <span>Saad </span>Mustafa
      </div>
      <div className="loading-bar-wrap">
        <div className="loading-bar-fill" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
        FRONTEND DEVELOPER
      </p>
    </div>
  )
}
