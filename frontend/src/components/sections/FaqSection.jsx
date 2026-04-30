import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ faq }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mf-faq">
      <div className="mf-container">
        <h2 className="mf-section-display">preguntas<br/>frecuentes</h2>
        <p className="mf-section-lead">
          Como artista visual, recibimos con frecuencia consultas de clientes sobre cuadros personalizados, precios o cómo agendar una llamada. Para responder a estas preguntas frecuentes, hemos recopilado una lista de preguntas frecuentes. Si tienes alguna otra pregunta, no dudes en <a href="#contact" className="mf-link">contactarnos ↓</a>
        </p>
        <div className="mf-faq-list">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`mf-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button className="mf-faq-q" onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="mf-faq-icon">{isOpen ? <Minus size={18}/> : <Plus size={18}/>}</span>
                </button>
                <div className="mf-faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
