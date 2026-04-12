import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>SM<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Saad Mustafa.</p>
        <p className="footer-heart">
          Crafted with <span style={{ color: '#e74c3c' }}>♥</span> & <span style={{ color: 'var(--teal)' }}>passion</span>
        </p>
      </div>
    </footer>
  )
}
