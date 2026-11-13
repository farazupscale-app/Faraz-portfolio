'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Boxes, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';

export default function Services() {
  const { services } = portfolioData;

  const serviceIcons = [Globe, Smartphone, Code, Boxes];

  return (
    <section id="services" className="relative bg-[#F3F0E8] py-20 sm:py-28 md:py-32 border-b border-[#E2DDD2] overflow-hidden">
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
                03 / SERVICES & EXPERTISE
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: easeCustom }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#171717]"
            >
              WHAT I BRING TO THE TABLE.
            </motion.h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            Focused, dependable frontend engineering services geared toward turning design concepts into fast, maintainable digital reality.
          </p>
        </motion.div>

        {/* 4 Service Cards Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index] || Globe;
            return (
              <motion.div
                key={service.number}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: easeCustom },
                }}
                className="group relative p-7 clay-card clay-card-hover rounded-3xl flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Card Top: Number & Accent Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#777777] group-hover:text-[#171717] transition-colors">
                      /{service.number}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      className="w-10 h-10 rounded-xl bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_4px_rgba(70,60,45,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#171717] group-hover:bg-[#B9F36A] group-hover:shadow-[3px_3px_8px_rgba(110,160,30,0.25),-2px_-2px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span className="inline-block text-[10px] font-mono tracking-wider uppercase text-[#777777] px-2.5 py-1 bg-[#ECE8DF] rounded-lg border border-white/50 shadow-[1px_1px_3px_rgba(70,60,45,0.06),-1px_-1px_3px_rgba(255,255,255,0.8)] group-hover:text-[#171717] transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-xl text-[#171717] mb-3 leading-snug group-hover:text-black">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Card Footer with Animated Arrow */}
                <div className="mt-8 pt-4 border-t border-[#ECE8DF] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-[#777777] group-hover:text-[#171717] transition-colors">
                    Standard Production
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#ECE8DF] border border-white/60 shadow-[2px_2px_5px_rgba(70,60,45,0.08),-2px_-2px_5px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#171717] group-hover:bg-[#B9F36A] group-hover:shadow-[inset_1px_1px_2px_rgba(90,140,20,0.3)] transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
