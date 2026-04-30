import React, { useState, useEffect } from 'react';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`mf-topbar ${scrolled ? 'mf-topbar--scrolled' : ''}`}>
      <a href="#intro" className="mf-avatar-link" aria-label="Andrea Rojas">
        <img
          src="https://framerusercontent.com/images/p8t6TQfync9zaOEkvR1yBn7dGVU.jpg"
          alt="Andrea Rojas"
          className="mf-avatar"
        />
      </a>
      <a href="https://wa.link/2uykxl" target="_blank" rel="noreferrer" className="mf-status-pill">
        <span className="mf-status-dot">
          <span className="mf-status-dot-inner" />
        </span>
        <span className="mf-status-text">Disponible</span>
        <span className="mf-status-cta">COTIZAR</span>
      </a>
    </div>
  );
}
