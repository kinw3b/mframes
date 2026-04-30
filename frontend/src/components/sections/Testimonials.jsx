import React from 'react';

export default function Testimonials({ items }) {
  return (
    <section id="clients" className="mf-testi">
      <div className="mf-container">
        <h2 className="mf-section-display">nuestros clientes</h2>
        <div className="mf-testi-grid">
          {items.map((t, i) => (
            <article key={i} className="mf-testi-card">
              <div className="mf-testi-head">
                <img src={t.avatar} alt={t.name} className="mf-testi-avatar" />
                <span className="mf-testi-name">{t.name}</span>
              </div>
              <p className="mf-testi-text">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
