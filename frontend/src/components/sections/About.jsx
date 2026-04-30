import React from 'react';

export default function About({ reasons, ICONS }) {
  return (
    <section id="about" className="mf-about">
      <div className="mf-bg-watermark">PERSONALIZADOS</div>
      <div className="mf-container mf-about-grid">
        <div className="mf-about-left">
          <h2 className="mf-section-title mf-accent-text">maarframes<sup>®</sup></h2>
          <p className="mf-lede">
            MAAR Frames® nació del deseo profundo de capturar lo que realmente importa, el enfoque emocional, artesanal y profundo respeto por las historias reales de cada persona. Dirigido por Andrea Rojas, una artista costarricense.
          </p>
          <p className="mf-paragraph">
            Somos un estudio creativo que transforma objetos, pasiones e historias en cuadros únicos con alma.
          </p>
          <h3 className="mf-sub-title">¿Por Qué NOSOTROS?</h3>
          <ul className="mf-reasons">
            {reasons.map((r, i) => {
              const Icon = ICONS[r.icon];
              return (
                <li key={i} className="mf-reason">
                  <span className="mf-reason-icon"><Icon size={16} /></span>
                  <span>{r.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mf-about-right">
          <div className="mf-about-photo">
            <img src="https://framerusercontent.com/images/p8t6TQfync9zaOEkvR1yBn7dGVU.jpg" alt="Andrea Rojas - estudio" />
            <div className="mf-tape mf-tape--1">EST. 2023 · COSTA RICA · EST. 2023 · COSTA RICA</div>
            <div className="mf-tape mf-tape--2">EST. 2023 · COSTA RICA · EST. 2023 · COSTA RICA</div>
            <span className="mf-photo-credit">Foto: David Chacón</span>
          </div>
        </div>
      </div>
    </section>
  );
}
