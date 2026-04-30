import React from 'react';

export default function Projects({ projects, topics, ICONS }) {
  return (
    <section id="projects" className="mf-projects">
      <div className="mf-container">
        <h2 className="mf-section-display">Proyectos<br/>destacados</h2>
        <p className="mf-section-lead">Temáticas frecuentes para cuadros personalizados por Maar Frames®</p>

        <div className="mf-topics">
          {topics.map((t, i) => {
            const Icon = ICONS[t.icon];
            return (
              <span key={i} className="mf-topic">
                <Icon size={14} className="mf-topic-icon" />
                {t.label}
              </span>
            );
          })}
        </div>

        <div className="mf-projects-grid">
          {projects.map((p) => (
            <a key={p.id} href="https://www.instagram.com/maarframes/" target="_blank" rel="noreferrer" className="mf-project-card">
              <div className="mf-project-image">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="mf-project-overlay">
                  <span className="mf-project-title">{p.title}</span>
                </div>
              </div>
              <div className="mf-project-caption">
                <span>{p.title}</span>
                <span className="mf-project-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
