'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { easeCustom } from '../utils/animations';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const line1Words = ['BUILDING', 'FOR', 'THE', 'WEB.'];
  const line2Words = ['DESIGNED', 'TO', 'STAND', 'OUT.'];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 flex items-center bg-[#F3F0E8] overflow-hidden border-b border-[#E2DDD2]"
    >
      {/* 1. Subtle Architectural Grid Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2DDD2 1px, transparent 1px), linear-gradient(to bottom, #E2DDD2 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Layered Subtle Depth Accents */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B9F36A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#171717]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 55% (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* 1. Small Label & Availability Indicator (Tactile Clay Pills) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: easeCustom }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-widest uppercase clay-pill-dark text-[#FFFFFF] rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9F36A]" />
                {personal.roleLabel}
              </span>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[11px] sm:text-xs font-medium text-[#171717] bg-[#ECE8DF] border border-white/60 shadow-[3px_3px_7px_rgba(70,60,45,0.08),-3px_-3px_7px_rgba(255,255,255,0.9),inset_1px_1px_1px_rgba(255,255,255,0.7)] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#171717]" />
                <span>Available for projects</span>
              </div>
            </motion.div>

            {/* 2. Display Name Subhead */}
            <div className="mb-2">
              <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#777777] font-mono">
                PORTFOLIO OF
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeCustom }}
                className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#171717]"
              >
                FARAZ KHAN.
              </motion.h2>
            </div>

            {/* 3. Main Heading: Crisp Snappy Entrance with Raised Lime Clay Surface */}
            <div className="my-4">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.03] tracking-tighter text-[#171717]">
                {/* Line 1 words */}
                <span className="block pb-1">
                  {line1Words.map((word, idx) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + idx * 0.05,
                        ease: easeCustom,
                      }}
                      className="inline-block mr-2.5 sm:mr-3.5"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 highlighted words on soft raised lime clay */}
                <span className="block pt-1">
                  <span className="inline-block relative">
                    <span className="absolute inset-0 bg-[#B9F36A] rounded-xl z-0 shadow-[4px_4px_14px_rgba(110,160,30,0.28),-3px_-3px_10px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)] border border-white/40" />
                    <span className="relative z-10 px-2.5 py-0.5 inline-block text-[#171717]">
                      {line2Words.map((word, idx) => (
                        <motion.span
                          key={word}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.35 + idx * 0.05,
                            ease: easeCustom,
                          }}
                          className="inline-block mr-2 sm:mr-3 last:mr-0"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                </span>
              </h1>
            </div>

            {/* 4. Professional Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45, ease: easeCustom }}
              className="text-base sm:text-lg md:text-xl text-[#777777] max-w-2xl font-normal leading-relaxed mt-2 mb-8"
            >
              {personal.shortBio}
            </motion.p>

            {/* 5. Action Buttons with Tactile Clay 3D Touch */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease: easeCustom }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <MagneticButton strength={0.25} className="hero-cta-work">
                <motion.a
                  href="#work"
                  onClick={(e) => scrollTo(e, '#work')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 clay-btn-dark text-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl focus:outline-hidden"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </motion.a>
              </MagneticButton>

              <MagneticButton strength={0.25} className="hero-cta-contact">
                <motion.a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 clay-btn-white text-[#171717] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl focus:outline-hidden"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </MagneticButton>
            </motion.div>

            {/* 6. Minimal Social & Location Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.65, ease: easeCustom }}
              className="pt-6 border-t border-[#E2DDD2] flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-[#777777]">
                <span className="text-[#171717] font-bold">CONNECT:</span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171717] hover:text-black transition-colors group"
                  aria-label="Faraz Khan on GitHub"
                >
                  <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
                <span className="text-[#E2DDD2]">•</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171717] hover:text-black transition-colors group"
                  aria-label="Faraz Khan on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="text-xs font-medium text-[#777777] hidden sm:block font-mono">
                <span>INTERMEDIATE LEVEL • MODERN FRONTEND</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 45% (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] lg:max-w-none flex items-center justify-center">
              {/* Geometric Soft Lime Accent Backdrop with Clay Depth */}
              <div
                className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-[3rem] bg-[#DDF5B5]/60 border border-white/70 shadow-[10px_10px_28px_rgba(70,60,45,0.09),-8px_-8px_24px_rgba(255,255,255,0.95),inset_2px_2px_4px_rgba(255,255,255,0.8)] pointer-events-none -rotate-3"
                aria-hidden="true"
              />

              {/* Secondary architectural dashed outline */}
              <div
                className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-[3rem] border border-dashed border-[#171717]/15 pointer-events-none rotate-3"
                aria-hidden="true"
              />

              {/* Portrait Container - PRESERVES PORTRAIT IDENTITY AND NATURAL PROPORTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeCustom }}
                className="relative z-10 w-full aspect-4/5 max-h-[560px] flex items-end justify-center"
              >
                <div className="w-full h-full flex items-end justify-center">
                  <Image
                    src="/images/faraz-hero.png"
                    alt="Faraz Khan — Web Developer Portrait"
                    width={520}
                    height={780}
                    priority
                    className="object-contain w-auto h-full max-h-[560px] drop-shadow-2xl select-none transition-transform duration-300 hover:scale-[1.01]"
                  />
                </div>

                {/* Floating Meta Tag Pill with Tactile Clay Depth */}
                <div
                  className="absolute bottom-4 right-2 sm:right-4 z-20 clay-pill-dark text-[#FFFFFF] px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#B9F36A] shadow-[0_0_4px_rgba(185,243,106,0.8)]" />
                  <span>Faraz Khan • Web Dev</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
