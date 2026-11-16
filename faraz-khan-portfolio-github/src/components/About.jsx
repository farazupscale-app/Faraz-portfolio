'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Layout, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';
import MagneticButton from './MagneticButton';

export default function About() {
  const { personal } = portfolioData;

  const corePillars = [
    { icon: Layout, label: 'Responsive Interfaces', desc: 'Crafting pixel-perfect layouts adapted to every screen size.' },
    { icon: Code2, label: 'Clean Code Architecture', desc: 'Writing modular, readable and maintainable React & Next.js code.' },
    { icon: Zap, label: 'User-Focused Performance', desc: 'Prioritizing smooth interactions, fast loading, and accessibility.' },
  ];

  return (
    <section id="about" className="relative bg-[#202020] text-[#FFFFFF] py-20 sm:py-28 md:py-32 border-b border-[#2F2F2F] overflow-hidden">
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Identifier Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <span className="w-8 h-[2px] bg-[#B9F36A]" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#B9F36A]">
            01 / A LITTLE ABOUT ME.
          </span>
        </motion.div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading & Pillars (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: easeCustom }}
            className="lg:col-span-5"
          >
            {/* Editorial Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: easeCustom }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.08] text-[#FFFFFF] mb-6"
            >
              I TURN IDEAS INTO{' '}
              <span className="text-[#B9F36A] underline decoration-[#B9F36A]/40 decoration-4 underline-offset-8">
                DIGITAL
              </span>{' '}
              EXPERIENCES.
            </motion.h2>

            <p className="text-sm sm:text-base text-[#777777] mb-8 leading-relaxed">
              Merging visual sensitivity with solid frontend logic. Striving for interfaces that look crisp and behave effortlessly.
            </p>

            {/* Quick Pillars Grid with Tactile Dark Clay Panels */}
            <motion.div
              variants={staggerContainer(0.08, 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="space-y-4 pt-4 border-t border-[#2F2F2F]"
            >
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{
                      y: -4,
                      borderColor: '#B9F36A',
                      transition: { duration: 0.2, ease: easeCustom },
                    }}
                    className="group flex items-start gap-3.5 p-4 rounded-xl clay-dark-card border border-white/5 hover:border-[#B9F36A]/40 transition-colors cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2.5 bg-[#171717] rounded-lg text-[#B9F36A] border border-white/5 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.06)] group-hover:border-[#B9F36A]/40 transition-colors"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF] tracking-wide group-hover:text-[#B9F36A] transition-colors">
                        {pillar.label}
                      </h4>
                      <p className="text-xs text-[#777777] mt-0.5 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: In-depth Narrative & CTAs (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeCustom }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <motion.div
              variants={staggerContainer(0.08, 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="space-y-6 text-base sm:text-lg text-[#ECE8DF] font-normal leading-relaxed"
            >
              <motion.p variants={staggerItem}>
                Hello, I'm <strong className="text-[#FFFFFF] font-bold">Faraz Khan</strong>. I am an intermediate web developer dedicated to building responsive, accessible, and user-friendly digital experiences that bridge design and engineering.
              </motion.p>

              <motion.p variants={staggerItem}>
                My core strength lies in modern frontend development, particularly leveraging <span className="text-[#B9F36A] font-semibold">React</span>, <span className="text-[#B9F36A] font-semibold">Next.js</span>, and utility-driven styling with <span className="text-[#B9F36A] font-semibold">Tailwind CSS</span>. I focus on developing clean, well-structured components that maintain their integrity across different viewports and interaction states.
              </motion.p>

              <motion.p variants={staggerItem}>
                I believe that good web development is about more than making things look appealing—it's about writing clean, maintainable code, adhering to semantic HTML standards, ensuring fast load times, and delivering an experience that feels intuitive to the person using it.
              </motion.p>

              <motion.p variants={staggerItem}>
                As the frontend ecosystem evolves, I am continually learning, expanding my knowledge of modern JavaScript paradigms, exploring modern design systems, and improving my development methodologies on every project I undertake.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.15, ease: easeCustom }}
              className="pt-8 sm:pt-10 mt-8 border-t border-[#2F2F2F] flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <MagneticButton strength={0.25}>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 clay-btn-lime text-[#171717] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl focus:outline-hidden"
                  >
                    <span>MORE ABOUT MY WORK</span>
                    <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 px-5 py-3.5 clay-btn-dark text-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl border border-white/10"
                  >
                    <span>READ FULL BIO</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
              </div>

              <div className="text-xs font-mono text-[#777777] uppercase tracking-wider">
                Faraz Khan • Web Developer Portfolio
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
