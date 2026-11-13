'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, ShieldCheck, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';

export default function Process() {
  const { processStages } = portfolioData;
  const [activeHover, setActiveHover] = useState(null);

  const stageIcons = [Search, Compass, Code, ShieldCheck, Rocket];

  return (
    <section id="process" className="relative bg-[#F3F0E8] py-20 sm:py-28 md:py-32 border-b border-[#E2DDD2] overflow-hidden">
      {/* Background Architectural Grid Subtlety */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2DDD2 1px, transparent 1px), linear-gradient(to bottom, #E2DDD2 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: easeCustom }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#171717]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777]">
                05 / WORK METHODOLOGY
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#171717]">
              HOW I MAKE THINGS HAPPEN.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            A disciplined, five-stage workflow ensuring every project is delivered with structural clarity, responsive precision, and clean code.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline (5 steps) */}
        <div className="hidden lg:block">
          {/* Continuous Connecting Line */}
          <div className="relative mb-10">
            {/* Animated horizontal connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="absolute top-1/2 left-4 right-4 h-[2px] bg-[#E2DDD2] -translate-y-1/2 z-0 origin-left"
            />

            <div className="grid grid-cols-5 gap-6 relative z-10">
              {processStages.map((stage, idx) => {
                const IconComponent = stageIcons[idx] || Search;
                const isActive = activeHover === idx;

                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + idx * 0.06,
                      ease: easeCustom,
                    }}
                    onMouseEnter={() => setActiveHover(idx)}
                    onMouseLeave={() => setActiveHover(null)}
                    className="flex flex-col items-center cursor-default group"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isActive ? '#B9F36A' : '#F8F6EF',
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-14 h-14 rounded-full border border-white/80 flex items-center justify-center text-[#171717] shadow-[5px_5px_14px_rgba(70,60,45,0.1),-5px_-5px_14px_rgba(255,255,255,0.95)] transition-colors duration-200"
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </motion.div>
                    <span className="mt-3 text-xs font-mono font-bold tracking-widest text-[#171717]">
                      PHASE {stage.step}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 5 Cards Grid beneath the timeline */}
          <motion.div
            variants={staggerContainer(0.08, 0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-5 gap-5"
          >
            {processStages.map((stage, idx) => {
              const isActive = activeHover === idx;

              return (
                <motion.div
                  key={stage.step}
                  variants={staggerItem}
                  onMouseEnter={() => setActiveHover(idx)}
                  onMouseLeave={() => setActiveHover(null)}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: easeCustom },
                  }}
                  className={`group p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-default clay-card ${
                    isActive
                      ? 'shadow-[12px_14px_28px_rgba(70,60,45,0.14),-10px_-10px_24px_rgba(255,255,255,0.98)] -translate-y-1'
                      : 'clay-card-hover'
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono text-[#777777] mb-2 group-hover:text-[#171717] transition-colors">
                      0{idx + 1} //
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-[#171717] mb-3 group-hover:text-black">
                      {stage.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#171717] mb-2 leading-snug">
                      {stage.summary}
                    </p>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {stage.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (visible below lg) */}
        <div className="lg:hidden relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="absolute left-6 top-4 bottom-4 w-[2px] bg-[#E2DDD2] z-0 origin-top"
          />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {processStages.map((stage, idx) => {
              const IconComponent = stageIcons[idx] || Search;
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: easeCustom }}
                  className="flex items-start gap-4 sm:gap-6 pl-1"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full bg-[#F8F6EF] border border-white/80 flex items-center justify-center text-[#171717] shadow-[3px_3px_8px_rgba(70,60,45,0.1),-3px_-3px_8px_rgba(255,255,255,0.95)]">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <div className="grow p-5 sm:p-6 clay-card rounded-2xl transition-all">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#777777] mb-1">
                      <span>PHASE {stage.step}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-[#171717] mb-2">
                      {stage.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#171717] mb-1">
                      {stage.summary}
                    </p>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {stage.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
