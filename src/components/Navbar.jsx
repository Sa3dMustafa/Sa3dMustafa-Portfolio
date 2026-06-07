import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../data/index";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const observerRef = useRef(null);
  const tickingRef = useRef(false);

  // Scroll effect (optimized with rAF)
  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize > desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Active section observer
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));

    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    observerRef.current = observers;

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Smooth scroll handler (safe)
  const handleNav = (href) => {
    setMenuOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a
          className="nav-logo"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
        >
          <span className="logo-bracket">&lt;</span>SM
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Overlay */}
        <div
          className={`nav-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Links */}
        <ul
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {/* Mobile header */}
          <li className="nav-mobile-head">
            <div className="nav-mobile-brand">
              <span className="logo-bracket">&lt;</span>SM
              <span className="logo-bracket">/&gt;</span>
            </div>
          </li>

          {/* Navigation links */}
          {navLinks.map((link) => {
            const id = link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    active === id ? "nav-link active" : "nav-link"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
            >
              Hire Me
            </a>
          </li>

          {/* Social + CV */}
          <li>
            <div className="nav-actions">
              <a
                href="https://www.linkedin.com/in/saad-mustafa/"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1mRNQZNpWnv1odLLKhxSyFReAcHPPbsHB"
                className="nav-icon"
                aria-label="Download CV"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15zm-2 4H8v2h5v-2zm-5 4h8v2H8v-2z" />
                </svg>
              </a>
            </div>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={menuOpen ? "line open1" : "line"} />
          <span className={menuOpen ? "line open2" : "line"} />
          <span className={menuOpen ? "line open3" : "line"} />
        </button>
      </div>
    </nav>
  );
}