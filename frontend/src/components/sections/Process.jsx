import React from 'react';

export default function Process({ steps }) {
  return (
    <section id="process" className="mf-process">
      <div className="mf-container">
        <h2 className="mf-section-display">Cómo funciona?</h2>
        <p className="mf-section-lead" style={{maxWidth: 720}}>
          Elaboramos cuadros personalizados de tus pasiones, recuerdos y objetos nostálgicos, cada cuadro convertido en arte con alma y utilizando acabados premium.
        </p>
        <p className="mf-process-tag mf-accent-text">Proceso Rápido y seguro</p>

        <ol className="mf-steps">
          {steps.map((s, i) => (
            <li className="mf-step" key={s.n}>
              <span className="mf-step-num">{s.n}</span>
              <div className="mf-step-body">
                <h3 className="mf-step-title">{s.title}</h3>
                <p className="mf-step-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
