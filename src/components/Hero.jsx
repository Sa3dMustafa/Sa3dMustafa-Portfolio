import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";
import avatar from "../../public/assets/myphoto.png";

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

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return undefined;

    const handleMouse = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    element.addEventListener("mousemove", handleMouse);
    return () => element.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-grid" />
      <div className="hero-radial" />

      {FLOATING_SHAPES.map((shape) => (
        <div
          key={`${shape.type}-${shape.x}-${shape.y}`}
          className={`float-shape float-shape-${shape.type}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
            border: "1px solid rgba(26,188,156,0.2)",
            animationDelay: `${shape.delay}s`,
            transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)`,
            transition: "transform 0.8s ease",
          }}
        />
      ))}

      {CODE_SNIPPETS.map((snippet, index) => (
        <div
          key={snippet.text}
          className="code-snippet"
          style={{
            left: snippet.x,
            top: snippet.y,
            animationDelay: `${snippet.delay}s`,
            transform: `translate(${mousePos.x * 10 * (index % 2 === 0 ? 1 : -1)}px, ${mousePos.y * 8}px)`,
            transition: "transform 1s ease",
          }}
        >
          <span className="code-dot" />
          {snippet.text}
        </div>
      ))}

      <div className="hero-inner">
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
                "UI Engineer",
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
            <span className="highlight">polished</span> web experiences that
            feel effortless to use.
          </p>

          <div className="hero-stats">
            {[
              { num: "10+", label: "Projects Shipped" },
              { num: "1+", label: "Years Building" },
              { num: "98+", label: "Lighthouse Score" },
            ].map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-ctas">
            <a className="btn-primary" href="/cv.pdf" download>
              Download My Resume 📩
            </a>
            <button
              className="btn-outline"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="hero-image-wrap"
          style={{
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
            transition: "transform 0.6s ease",
          }}
        >
          <div className="hero-image-ring" />
          <div className="hero-image-glow" />
          <div className="hero-avatar">
            <img src={avatar} alt="Saad Mustafa" className="avatar-photo" />
            <div className="avatar-badge">
              <span>🔥</span> Frontend Dev
            </div>
          </div>

          <div className="tech-chip chip-1">React</div>
          <div className="tech-chip chip-2">Next.js</div>
          <div className="tech-chip chip-3">TypeScript</div>
          <div className="tech-chip chip-4">UI / UX</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
