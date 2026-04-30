import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp, Plus, Minus, Music, Trophy, Clapperboard, Briefcase, BookOpen, Gift, PenTool, Palette, Sparkles, Lightbulb, Zap, Flag, Frame } from 'lucide-react';
import { PROJECTS, TOPICS, PROCESS_STEPS, SIZES, TESTIMONIALS, FAQ, REASONS } from '../data/mock';
import TopBar from './sections/TopBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Sizes from './sections/Sizes';
import Testimonials from './sections/Testimonials';
import FaqSection from './sections/FaqSection';
import Contact from './sections/Contact';
import Marquee from './sections/Marquee';

const ICONS = { Music, Trophy, Clapperboard, Briefcase, BookOpen, Gift, PenTool, Palette, Sparkles, Lightbulb, Zap, Flag, Frame };

export default function MaarFrames() {
  return (
    <div className="mf-root">
      <TopBar />
      <Hero />
      <Marquee />
      <About reasons={REASONS} ICONS={ICONS} />
      <Projects projects={PROJECTS} topics={TOPICS} ICONS={ICONS} />
      <Process steps={PROCESS_STEPS} />
      <Sizes sizes={SIZES} />
      <Testimonials items={TESTIMONIALS} />
      <FaqSection faq={FAQ} />
      <Contact />
    </div>
  );
}
