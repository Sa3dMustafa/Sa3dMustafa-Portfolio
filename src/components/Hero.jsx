import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const CODE_SNIPPETS = [
  { text: "const ui = build(vision)", x: "5%", y: "18%", delay: 0 },
  { text: "npm run dev", x: "2%", y: "70%", delay: 0.5 },
  { text: "export default App", x: "8%", y: "88%", delay: 1 },
  { text: "<Component />", x: "78%", y: "12%", delay: 0.3 },
  { text: "useState([])", x: "82%", y: "78%", delay: 0.8 },
  { text: 'git commit -m "ship"', x: "72%", y: "90%", delay: 1.2 },
];

const FLOATING_SHAPES = [
  {
    size: 60,
    x: "88%",
    y: "20%",
    color: "rgba(26,188,156,0.08)",
    type: "circle",
    delay: 0,
  },
  {
    size: 40,
    x: "3%",
    y: "40%",
    color: "rgba(26,188,156,0.06)",
    type: "square",
    delay: 0.5,
  },
  {
    size: 24,
    x: "91%",
    y: "55%",
    color: "rgba(26,188,156,0.12)",
    type: "circle",
    delay: 1,
  },
  {
    size: 16,
    x: "14%",
    y: "85%",
    color: "rgba(26,188,156,0.15)",
    type: "diamond",
    delay: 1.5,
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated grid background */}
      <div className="hero-grid" />
      <div className="hero-radial" />

      {/* Floating shapes */}
      {FLOATING_SHAPES.map((s, i) => (
        <div
          key={i}
          className={`float-shape float-shape-${s.type}`}
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            background: s.color,
            border: `1px solid rgba(26,188,156,0.2)`,
            animationDelay: `${s.delay}s`,
            transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)`,
            transition: "transform 0.8s ease",
          }}
        />
      ))}

      {/* Code snippets */}
      {CODE_SNIPPETS.map((s, i) => (
        <div
          key={i}
          className="code-snippet"
          style={{
            left: s.x,
            top: s.y,
            animationDelay: `${s.delay}s`,
            transform: `translate(${mousePos.x * 10 * (i % 2 === 0 ? 1 : -1)}px, ${mousePos.y * 8}px)`,
            transition: "transform 1s ease",
          }}
        >
          <span className="code-dot" />
          {s.text}
        </div>
      ))}

      <div className="container hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <div
            className="hero-available"
            style={{
              transform: `translate(${mousePos.x * -4}px, ${mousePos.y * -4}px)`,
            }}
          >
            <span className="available-dot" />
            Available for opportunities
          </div>

          <h1
            className="hero-name"
            style={{
              transform: `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px)`,
            }}
          >
            Saad
            <br />
            <span className="name-accent">Mustafa</span>
          </h1>

          <div className="hero-role">
            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Next.js Engineer",
                2000,
                "UI/UX Craftsman",
                2000,
                "Performance Optimizer",
                2000,
                "Frontend Architect",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </div>

          <p className="hero-tagline">
            I build <span className="highlight">fast</span>, scalable, and{" "}
            <span className="highlight">visually engaging</span> web experiences
            that users love.
          </p>

          <div className="hero-stats">
            {[
              { num: "10+", label: "Projects Shipped" },
              { num: "2+", label: "Years Building" },
              { num: "98+", label: "Lighthouse Score" },
            ].map((s) => (
              <div key={s.num} className="stat">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-ctas">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right — image */}
        <div
          className="hero-image-wrap"
          ref={imageRef}
          style={{
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
            transition: "transform 0.6s ease",
          }}
        >
          <div className="hero-image-ring" />
          <div className="hero-image-glow" />
          <div className="hero-avatar">
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="avatar-svg"
            >
              <rect width="300" height="300" rx="32" fill="#111918" />
              {/* Developer illustration */}
              <rect
                x="40"
                y="60"
                width="220"
                height="140"
                rx="8"
                fill="#0d1614"
                stroke="rgba(26,188,156,0.3)"
                strokeWidth="1.5"
              />
              <rect
                x="40"
                y="60"
                width="220"
                height="28"
                rx="8"
                fill="#0a1210"
              />
              <circle cx="58" cy="74" r="5" fill="#ff5f57" />
              <circle cx="76" cy="74" r="5" fill="#ffbd2e" />
              <circle cx="94" cy="74" r="5" fill="#28c840" />
              {/* Code lines */}
              <rect
                x="55"
                y="106"
                width="60"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.6)"
              />
              <rect
                x="125"
                y="106"
                width="40"
                height="6"
                rx="3"
                fill="rgba(255,255,255,0.2)"
              />
              <rect
                x="175"
                y="106"
                width="50"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.3)"
              />
              <rect
                x="70"
                y="122"
                width="80"
                height="6"
                rx="3"
                fill="rgba(255,255,255,0.15)"
              />
              <rect
                x="160"
                y="122"
                width="55"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.4)"
              />
              <rect
                x="55"
                y="138"
                width="45"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.5)"
              />
              <rect
                x="110"
                y="138"
                width="90"
                height="6"
                rx="3"
                fill="rgba(255,255,255,0.1)"
              />
              <rect
                x="70"
                y="154"
                width="100"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.25)"
              />
              <rect
                x="55"
                y="170"
                width="70"
                height="6"
                rx="3"
                fill="rgba(255,255,255,0.18)"
              />
              <rect
                x="135"
                y="170"
                width="60"
                height="6"
                rx="3"
                fill="rgba(26,188,156,0.45)"
              />
              {/* Person silhouette */}
              <circle
                cx="150"
                cy="230"
                r="32"
                fill="rgba(26,188,156,0.15)"
                stroke="rgba(26,188,156,0.3)"
                strokeWidth="2"
              />
              <circle cx="150" cy="218" r="14" fill="rgba(26,188,156,0.3)" />
              <path
                d="M118 260 Q135 245 150 248 Q165 245 182 260"
                stroke="rgba(26,188,156,0.4)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="avatar-badge">
              <span>⚛️</span> React Dev
            </div>
          </div>

          {/* Floating tech chips */}
          <div className="tech-chip chip-1">Next.js ▲</div>
          <div className="tech-chip chip-2">TypeScript TS</div>
          <div className="tech-chip chip-3">⚡ 98 Perf</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
