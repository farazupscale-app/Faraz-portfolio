'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfiniteTechMarquee from '../components/InfiniteTechMarquee';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    const handleSwarmReset = () => {
      // Swarm finished rebuilding and scrolled to hero section (top: 0).
      // Incrementing contentKey remounts the section tree fresh at top: 0,
      // resetting all Framer Motion whileInView observers so that all entrance
      // animations trigger smoothly in slow-motion when the user scrolls down!
      setContentKey((prev) => prev + 1);
    };

    window.addEventListener('swarm:complete', handleSwarmReset);
    window.addEventListener('swarm:reset', handleSwarmReset);

    return () => {
      window.removeEventListener('swarm:complete', handleSwarmReset);
      window.removeEventListener('swarm:reset', handleSwarmReset);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F3F0E8] text-[#171717] selection:bg-[#B9F36A] selection:text-[#171717]">
      {/* SECTION 01: NAVIGATION */}
      <Navbar />

      <main key={contentKey} className="w-full">
        {/* SECTION 02: HERO */}
        <Hero />

        {/* SECTION 03: TECHNOLOGY MARQUEE */}
        <InfiniteTechMarquee />

        {/* SECTION 04: ABOUT ME */}
        <About />

        {/* SECTION 05: TECH STACK */}
        <TechStack />

        {/* SECTION 06: SERVICES */}
        <Services />

        {/* SECTION 07: SELECTED PROJECTS */}
        <Projects />

        {/* SECTION 08: WORK PROCESS */}
        <Process />

        {/* SECTION 09: FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* SECTION 10: CONTACT */}
        <Contact />
      </main>

      {/* SECTION 11: FOOTER */}
      <Footer key={`footer-${contentKey}`} />
    </div>
  );
}
