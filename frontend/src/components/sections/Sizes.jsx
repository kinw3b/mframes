import React from 'react';

export default function Sizes({ sizes }) {
  return (
    <section id="sizes" className="mf-sizes">
      <div className="mf-container">
        <h2 className="mf-sizes-title">Tamaños disponibles</h2>
        <div className="mf-sizes-table">
          {sizes.map((s, i) => (
            <div key={i} className="mf-size-row">
              <span className="mf-size-name">{s.size}</span>
              <span className="mf-size-price">{s.price}</span>
            </div>
          ))}
          <div className="mf-size-row mf-size-row--cta">
            <span className="mf-size-name">Tamaño personalizado</span>
            <a href="https://wa.link/2uykxl" target="_blank" rel="noreferrer" className="mf-pill-btn">COTIZAR</a>
          </div>
        </div>
      </div>
    </section>
  );
}
