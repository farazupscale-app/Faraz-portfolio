'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';
import MagneticButton from './MagneticButton';

export default function Projects() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="work" className="relative bg-[#F3F0E8] py-20 sm:py-28 md:py-32 border-b border-[#E2DDD2] overflow-hidden">
      {/* Background Architectural Grid Subtlety */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2DDD2 1px, transparent 1px), linear-gradient(to bottom, #E2DDD2 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Snappy Text Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: easeCustom }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#171717]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777]">
                04 / SELECTED WORK
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: easeCustom }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#171717]"
            >
              FEATURED PROJECTS.
            </motion.h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            A selection of live client websites and digital experiences built with frontend precision, responsive layouts, and performance.
          </p>
        </motion.div>

        {/* 3 Cards in One Row on Desktop */}
        <motion.div
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.28, ease: easeCustom },
              }}
              className="group relative clay-card clay-card-hover rounded-3xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Container with Soft Inset Frame */}
                <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-6 bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_5px_rgba(70,60,45,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.85)]">
                  <Image
                    src={project.image}
                    alt={`${project.name} Screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top-Right Circular Launch Icon */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#F8F6EF] text-[#171717] flex items-center justify-center shadow-[2px_2px_6px_rgba(70,60,45,0.12),-2px_-2px_6px_rgba(255,255,255,0.95)] border border-white/70 transition-all duration-200 group-hover:bg-[#B9F36A]"
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Bottom-Left Category Pill Badge */}
                  <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full clay-pill-dark text-white text-[10px] font-mono tracking-wider font-semibold uppercase">
                    {project.badge}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-black text-xl text-[#171717] mb-3 group-hover:text-black tracking-tight uppercase leading-snug">
                  {project.name}
                </h3>

                {/* Tags Underneath */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono text-[#555555] bg-[#ECE8DF] rounded-lg border border-white/50 shadow-[1px_1px_3px_rgba(70,60,45,0.05),-1px_-1px_3px_rgba(255,255,255,0.8)] group-hover:text-[#171717] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="pt-4 border-t border-[#ECE8DF] flex items-center justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold tracking-wider uppercase text-[#ED6B38] hover:text-[#d45524] inline-flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>LAUNCH PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                <span className="font-mono text-xs text-gray-400 font-semibold select-none">
                  {project.number}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Centered VIEW MORE PROJECTS Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.15, ease: easeCustom }}
          className="mt-14 sm:mt-16 flex justify-center"
        >
          <MagneticButton strength={0.3}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 clay-btn-dark text-white rounded-full font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#B9F36A] hover:text-[#171717] transition-all duration-300"
            >
              <span>VIEW MORE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
