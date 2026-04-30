import React from 'react';

export default function Hero() {
  return (
    <section id="intro" className="mf-hero">
      <div className="mf-hero-grid" aria-hidden="true" />
      <div className="mf-hero-inner">
        <div className="mf-hero-row mf-hero-row--top">
          <div className="mf-hero-left">
            <p className="mf-eyebrow">cuadros personalizados por</p>
            <h2 className="mf-hero-name">
              Andrea<br />Roj@s
            </h2>
          </div>
          <div className="mf-hero-right">
            <div className="mf-logomark" aria-hidden="true">
              <div className="mf-logomark-box">
                <span className="mf-logomark-dot" />
              </div>
              <div className="mf-logomark-text">
                <span className="mf-lm-1">MA<span className="mf-lm-dot">·</span>AR</span>
                <span className="mf-lm-2">F R A M E S®</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mf-hero-display">
          <h1 className="mf-display">MAAR&nbsp;&nbsp;FRAMES<sup>®</sup></h1>
          <p className="mf-tag">HECHO EN COSTA RICA</p>
        </div>

        <div className="mf-hero-images">
          <div className="mf-himg mf-himg--a">
            <img src="https://framerusercontent.com/images/p8t6TQfync9zaOEkvR1yBn7dGVU.jpg" alt="Andrea Rojas" />
          </div>
          <div className="mf-himg mf-himg--b">
            <img src="https://framerusercontent.com/images/2oh1Ol0Jrei0XYDcHd3nSaqE.jpg" alt="Detalle cuadro" />
          </div>
          <div className="mf-himg mf-himg--c">
            <img src="https://framerusercontent.com/images/wjZjKRbkKoN3zPbObbAXZ6jcl0.jpg" alt="Detalle cuadro" />
          </div>
          <div className="mf-himg mf-himg--d">
            <span className="mf-himg-label">CUADROS&nbsp;&nbsp;Personalizados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
