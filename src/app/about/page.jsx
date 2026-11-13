'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Layout,
  Zap,
  CheckCircle2,
  Terminal,
  Cpu,
  Sparkles,
  Heart
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MagneticButton from '../../components/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function AboutPage() {
  const { personal, techStack } = portfolioData;

  const principles = [
    {
      number: "01",
      title: "Clean Modular Architecture",
      desc: "Writing readable, well-organized React and Next.js code with reusable components and predictable state flows."
    },
    {
      number: "02",
      title: "Responsive Precision",
      desc: "Crafting fluid layouts tailored for touch, keyboard, and mouse interactions across mobile, tablet, and ultra-wide viewports."
    },
    {
      number: "03",
      title: "Performance & Accessibility",
      desc: "Minimizing layout shifts, optimizing assets, adhering to semantic HTML standards, and ensuring accessible navigation."
    },
    {
      number: "04",
      title: "Continuous Refinement",
      desc: "Constantly testing new frontend techniques, adopting modern tooling, and improving developer and user experience."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F3F0E8] text-[#171717] selection:bg-[#B9F36A] selection:text-[#171717]">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-[#777777] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO HOME</span>
            </Link>
            <span className="text-[#E2DDD2]">•</span>
            <span className="text-xs font-mono font-bold tracking-wider text-[#171717]">
              ABOUT ME
            </span>
          </div>

          {/* Page Editorial Title */}
          <div className="pb-10 mb-12 sm:mb-16 border-b border-[#E2DDD2]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#171717]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777]">
                BIOGRAPHY & APPROACH
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04] text-[#171717]">
              TURNING IDEAS INTO{' '}
              <span className="inline-block relative">
                <span className="relative z-10 px-2 py-0.5 bg-[#B9F36A] text-[#171717] rounded-xl shadow-[3px_3px_10px_rgba(110,160,30,0.25),-2px_-2px_6px_rgba(255,255,255,0.8)] border border-white/40">
                  DIGITAL REALITY.
                </span>
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-xl text-[#777777] max-w-2xl font-normal leading-relaxed">
              Intermediate Web Developer crafting modern, responsive, and maintainable user experiences using React, Next.js, and modern styling.
            </p>
          </div>

          {/* Two-Column Split: Portrait & Biography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
            {/* Left Column: Portrait & Highlights (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              {/* Portrait Staging Container */}
              <div className="relative w-full max-w-[420px] lg:max-w-none flex items-center justify-center mb-8">
                {/* Subtle Soft Lime Accent Shape */}
                <div
                  className="absolute inset-0 m-auto w-[88%] h-[88%] rounded-3xl bg-[#DDF5B5]/60 -rotate-2 border border-white/70 shadow-[10px_10px_28px_rgba(70,60,45,0.09),-8px_-8px_24px_rgba(255,255,255,0.95)] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Secondary dashed border */}
                <div
                  className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-3xl border border-dashed border-[#171717]/15 rotate-2 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Portrait Image */}
                <div className="relative z-10 w-full aspect-3/4 max-h-[540px] flex items-end justify-center overflow-hidden pt-4">
                  <Image
                    src="/images/faraz-about.png"
                    alt="Faraz Khan Portrait"
                    width={500}
                    height={720}
                    priority
                    className="object-contain w-auto h-full max-h-[520px] drop-shadow-2xl select-none transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Identifier Tag */}
                  <div className="absolute bottom-4 left-4 z-20 clay-pill-dark text-[#FFFFFF] px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B9F36A] shadow-[0_0_4px_rgba(185,243,106,0.8)]" />
                    <span>Faraz Khan • Web Developer</span>
                  </div>
                </div>
              </div>

              {/* Quick Profile Summary Card */}
              <div className="w-full clay-card p-6 rounded-3xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE8DF] text-xs font-mono">
                  <span className="text-[#777777]">EXPERIENCE</span>
                  <span className="font-bold text-[#171717]">Intermediate Web Developer</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE8DF] text-xs font-mono">
                  <span className="text-[#777777]">CORE TOOLKIT</span>
                  <span className="font-bold text-[#171717]">React • Next.js • Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE8DF] text-xs font-mono">
                  <span className="text-[#777777]">LOCATION</span>
                  <span className="font-bold text-[#171717]">Remote / Worldwide</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#777777]">AVAILABILITY</span>
                  <span className="font-bold text-[#171717] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B9F36A] shadow-[0_0_3px_rgba(185,243,106,0.8)]" />
                    Open to Work
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: In-Depth Narrative (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#171717]/85 font-normal leading-relaxed"
            >
              <div className="p-8 sm:p-10 clay-card rounded-3xl space-y-6">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717] tracking-tight">
                  About Faraz Khan
                </h2>

                <p>
                  I am a passionate <strong className="text-[#171717] font-semibold">Web Developer</strong> with an intermediate level of experience focusing on the modern JavaScript and React ecosystem. My journey in web development is driven by a desire to craft digital interfaces that are not only visually appealing, but also performant, intuitive, and accessible.
                </p>

                <p>
                  My development stack centers around <span className="text-[#171717] font-semibold underline decoration-[#B9F36A] decoration-3 underline-offset-4">React</span>, <span className="text-[#171717] font-semibold underline decoration-[#B9F36A] decoration-3 underline-offset-4">Next.js</span>, and <span className="text-[#171717] font-semibold underline decoration-[#B9F36A] decoration-3 underline-offset-4">Tailwind CSS</span>. I enjoy translating design ideas and prototypes into robust codebases, prioritizing clean component structures, semantic markup, and responsive layouts that look natural across any device.
                </p>

                <p>
                  I believe that the best web experiences are built on discipline: maintaining consistent typography, respecting natural document flow, writing readable code that teammates can maintain effortlessly, and eliminating unnecessary bloat.
                </p>

                <p>
                  As web technologies evolve, I continuously invest time in deepening my understanding of frontend performance, exploring modern design systems, mastering state patterns, and delivering work that stands out.
                </p>

                {/* Direct Action Links */}
                <div className="pt-6 border-t border-[#ECE8DF] flex flex-wrap items-center gap-4">
                  <MagneticButton strength={0.25}>
                    <Link
                      href="/projects"
                      className="group inline-flex items-center gap-2 px-6 py-3.5 clay-btn-dark text-white text-xs font-bold uppercase rounded-xl transition-all"
                    >
                      <span>VIEW MY PROJECTS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3.5 clay-btn-white text-[#171717] text-xs font-bold uppercase rounded-xl transition-all"
                    >
                      <span>LET'S CONNECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Working Principles Section */}
          <section className="mb-20 sm:mb-28">
            <div className="mb-10 sm:mb-14">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#777777] block mb-2">
                HOW I APPROACH FRONTEND
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#171717]">
                CORE DEVELOPMENT PRINCIPLES.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group p-7 clay-card clay-card-hover rounded-3xl flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#777777] group-hover:text-[#171717] transition-colors block mb-4">
                      /{principle.number}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-[#171717] mb-3 leading-snug">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Call to Action Card */}
          <div className="p-8 sm:p-12 clay-dark-card text-[#FFFFFF] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#B9F36A] tracking-wider uppercase">
                LET'S BUILD SOMETHING GREAT
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Interested in working together?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] max-w-md">
                Whether you need a bespoke website, frontend architecture, or design implementation, feel free to reach out.
              </p>
            </div>
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 clay-btn-lime text-[#171717] rounded-full font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white transition-all shrink-0"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
