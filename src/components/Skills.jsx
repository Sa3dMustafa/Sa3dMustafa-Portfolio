import React, { useState } from "react";
import { skills } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

function SkillCard({ skill }) {
  const [tooltip, setTooltip] = useState(false);

  const isImage =
    typeof skill.icon === "string" && skill.icon.startsWith("http");

  console.log(skills["Frontend"][0].icon, isImage);
  return (
    <div
      className="skill-card"
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <div className="skill-icon">
        {isImage ? (
          <img
            src={skill.icon}
            alt={skill.name}
            style={{ width: 50, height: 50, border: "1px solid red" }}
          />
        ) : (
          <span className="skill-fallback">{skill.name.charAt(0)}</span>
        )}
      </div>

      {tooltip && <div className="skill-tooltip">{skill.name}</div>}
    </div>
  );
}

export default function Skills() {
  const titleRef = useReveal();
  const [activeGroup, setActiveGroup] = useState("Frontend");

  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Skills & Tools</div>
          <h2 className="section-title">
            My technical
            <br />
            <span style={{ color: "var(--teal)" }}>arsenal</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life — from design to
            deployment.
          </p>
        </div>

        <div className="skills-tabs">
          {Object.keys(skills).map((group) => (
            <button
              key={group}
              className={`skills-tab ${activeGroup === group ? "active" : ""}`}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeGroup].map((skill, i) => (
            <div
              key={skill.name}
              className="reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="skills-marquee-wrap">
          <div className="skills-marquee">
            {[
              ...Object.values(skills).flat(),
              ...Object.values(skills).flat(),
            ].map((s, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
