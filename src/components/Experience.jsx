import React from "react";
import { timeline } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

function TimelineCard({ item }) {
  const ref = useReveal();

  return (
    <div className="exp-card reveal" ref={ref}>
      <div className="exp-left">
        <div className="exp-icon">{item.icon}</div>
        <div className="exp-line" />
      </div>

      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3 className="exp-title">{item.title}</h3>
            <div className="exp-company">{item.company}</div>
          </div>

          <div className="exp-right">
            <span className="exp-type">{item.type}</span>
            <span className="exp-period">{item.period}</span>
          </div>
        </div>

        <ul className="exp-points">
          {item.points.map((point, index) => (
            <li key={index}>
              <span className="exp-dot" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useReveal();

  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <div className="section-tag">Experience</div>

          <h2 className="section-title">
            Where I've been
            <br />
            <span style={{ color: "var(--teal)" }}>
              sharpening my craft
            </span>
          </h2>
        </div>

        <div className="experience-list">
          {timeline.map((item) => (
            <TimelineCard
              key={`${item.title}-${item.period}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}