import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Contact() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section id="contact" className="mf-contact">
      <div className="mf-container">
        <h2 className="mf-section-display mf-contact-head">Contacto</h2>
        <p className="mf-contact-lead">¿Estás listo para crear algo extraordinario juntos?</p>
        <a href="mailto:andrea@maarframes.com" className="mf-contact-mail">andrea@maarframes.com</a>
      </div>

      <div className="mf-arte-wrap">
        <h3 className="mf-arte">ARTE<br/>EMOCIONAL</h3>
      </div>

      <div className="mf-container">
        <div className="mf-foot-card">
          <div className="mf-foot-left">
            <div className="mf-foot-logo">
              <span className="mf-fl-1">MA<span className="mf-lm-dot">·</span>AR</span>
              <span className="mf-fl-2">F R A M E S®</span>
            </div>
            <p className="mf-foot-tel">+506 6100-4033</p>
            <p className="mf-foot-loc">Heredia, Costa Rica</p>
            <a href="https://wa.link/2uykxl" target="_blank" rel="noreferrer" className="mf-foot-link">WhatsApp <ArrowUpRight size={14}/></a>
          </div>
          <div className="mf-foot-right">
            <a href="https://www.instagram.com/maarframes/" target="_blank" rel="noreferrer" className="mf-foot-link">Instagram <ArrowUpRight size={14}/></a>
            <a href="https://www.tiktok.com/@maarframes" target="_blank" rel="noreferrer" className="mf-foot-link">TikTok <ArrowUpRight size={14}/></a>
            <a href="https://www.facebook.com/profile.php?id=61551587326936" target="_blank" rel="noreferrer" className="mf-foot-link">Facebook <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="mf-foot-bottom">
          <button onClick={scrollTop} className="mf-back-top">Volver arriba <ArrowUp size={14}/></button>
          <span className="mf-copy">Copyright © 2025 Maar Frames®</span>
        </div>
      </div>
    </section>
  );
}
