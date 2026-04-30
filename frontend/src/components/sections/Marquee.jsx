import React from 'react';
import { Diamond } from 'lucide-react';

export default function Marquee() {
  const items = Array.from({ length: 14 });
  return (
    <div className="mf-marquee" aria-hidden="true">
      <div className="mf-marquee-track">
        {items.map((_, i) => (
          <span className="mf-marquee-item" key={i}>
            EST. 2023
            <Diamond size={10} className="mf-marquee-dot" />
            Costa Rica
            <Diamond size={10} className="mf-marquee-dot" />
          </span>
        ))}
        {items.map((_, i) => (
          <span className="mf-marquee-item" key={`b-${i}`}>
            EST. 2023
            <Diamond size={10} className="mf-marquee-dot" />
            Costa Rica
            <Diamond size={10} className="mf-marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
