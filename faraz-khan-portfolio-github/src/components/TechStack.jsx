'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  FileCode,
  Atom,
  Globe2,
  Wind,
  GitBranch,
  MonitorCheck,
  CheckCircle,
  Layers,
  Wrench,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';

export default function TechStack() {
  const { techStack } = portfolioData;

  const frontendIcons = {
    HTML: Code2,
    CSS: Palette,
    JavaScript: FileCode,
    React: Atom,
    'Next.js': Globe2,
    'Tailwind CSS': Wind,
  };

  const toolsIcons = {
    Git: GitBranch,
    GitHub: GithubIcon,
    'VS Code': MonitorCheck,
  };

  return (
    <section id="stack" className="relative bg-[#F3F0E8] py-20 sm:py-28 md:py-32 border-b border-[#E2DDD2] overflow-hidden">
      {/* Background Architectural Grid Subtlety */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#171717]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777]">
                02 / CORE CAPABILITIES
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: easeCustom }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#171717]"
            >
              TOOLS I WORK WITH.
            </motion.h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            The core frameworks, technologies, and tooling I use daily to build modern, responsive, and maintainable digital products.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {/* Group 1: FRONTEND */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="flex items-center gap-2.5 mb-6"
            >
              <Layers className="w-4 h-4 text-[#171717]" />
              <h3 className="font-heading font-bold text-lg sm:text-xl tracking-wider uppercase text-[#171717]">
                FRONTEND TECHNOLOGIES
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 clay-pill-dark text-[#FFFFFF] rounded-md ml-2">
                06
              </span>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08, 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {techStack.frontend.map((item, index) => {
                const IconComponent = frontendIcons[item.name] || Code2;
                return (
                  <motion.div
                    key={item.name}
                    variants={staggerItem}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25, ease: easeCustom },
                    }}
                    className="group relative p-6 clay-card clay-card-hover rounded-2xl cursor-default"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="w-12 h-12 rounded-xl bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_4px_rgba(70,60,45,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#171717] group-hover:bg-[#B9F36A] group-hover:shadow-[3px_3px_8px_rgba(110,160,30,0.25),-2px_-2px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
                      >
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </motion.div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#777777] px-2.5 py-1 bg-[#ECE8DF] rounded-lg border border-white/50 shadow-[1px_1px_3px_rgba(70,60,45,0.06),-1px_-1px_3px_rgba(255,255,255,0.8)] group-hover:text-[#171717] transition-colors">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-xl text-[#171717] group-hover:text-black mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#ECE8DF] flex items-center justify-between text-[11px] font-medium text-[#777777]">
                      <span className="flex items-center gap-1.5 text-[#171717]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#171717]" />
                        Active Production
                      </span>
                      <span className="font-mono text-gray-400">0{index + 1}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Group 2: TOOLS & ENVIRONMENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="flex items-center gap-2.5 mb-6"
            >
              <Wrench className="w-4 h-4 text-[#171717]" />
              <h3 className="font-heading font-bold text-lg sm:text-xl tracking-wider uppercase text-[#171717]">
                TOOLS & WORKFLOW
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 clay-pill-dark text-[#FFFFFF] rounded-md ml-2">
                03
              </span>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08, 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {techStack.tools.map((item, index) => {
                const IconComponent = toolsIcons[item.name] || Wrench;
                return (
                  <motion.div
                    key={item.name}
                    variants={staggerItem}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25, ease: easeCustom },
                    }}
                    className="group relative p-6 clay-card clay-card-hover rounded-2xl cursor-default"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="w-12 h-12 rounded-xl bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_4px_rgba(70,60,45,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#171717] group-hover:bg-[#B9F36A] group-hover:shadow-[3px_3px_8px_rgba(110,160,30,0.25),-2px_-2px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
                      >
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </motion.div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#777777] px-2.5 py-1 bg-[#ECE8DF] rounded-lg border border-white/50 shadow-[1px_1px_3px_rgba(70,60,45,0.06),-1px_-1px_3px_rgba(255,255,255,0.8)] group-hover:text-[#171717] transition-colors">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-xl text-[#171717] group-hover:text-black mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#ECE8DF] flex items-center justify-between text-[11px] font-medium text-[#777777]">
                      <span className="flex items-center gap-1.5 text-[#171717]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#171717]" />
                        Workflow Essential
                      </span>
                      <span className="font-mono text-gray-400">0{index + 1}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
