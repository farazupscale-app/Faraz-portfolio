'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Filter, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MagneticButton from '../../components/MagneticButton';
import { GithubIcon } from '../../components/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function ProjectsPage() {
  const { allProjects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Healthcare',
    'E-Commerce',
    'Hospitality',
    'Creative Dev',
    'Corporate & Real Estate',
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#F3F0E8] text-[#171717] selection:bg-[#B9F36A] selection:text-[#171717]">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          {/* Breadcrumb / Back Navigation */}
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
              ARCHIVE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E2DDD2]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#171717]" />
                <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777]">
                  FULL WORK ARCHIVE
                </span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#171717]">
                SELECTED WORK.
              </h1>
            </div>
            <p className="text-sm sm:text-base text-[#777777] max-w-lg font-normal leading-relaxed">
              Explore the complete directory of websites, client platforms, and custom digital experiences engineered with modern frontend standards.
            </p>
          </div>

          {/* Category Filter Pills with Tactile Clay Styling */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#777777] mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'ALL'
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'clay-btn-dark text-[#FFFFFF]'
                      : 'clay-btn-white text-[#777777] hover:text-[#171717]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-[#B9F36A]' : 'text-gray-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Projects Grid: 3 Cards Per Row */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative clay-card clay-card-hover rounded-3xl p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Screenshot Container with Rounded Corners & Badges */}
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
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      {/* Bottom-Left Category Pill Badge */}
                      <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full clay-pill-dark text-white text-[10px] font-mono tracking-wider font-semibold uppercase">
                        {project.badge}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h2 className="font-heading font-black text-xl text-[#171717] mb-2 group-hover:text-black tracking-tight uppercase leading-snug">
                      {project.name}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#777777] line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags Underneath */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono text-[#555555] bg-[#ECE8DF] rounded-lg border border-white/50 shadow-[1px_1px_3px_rgba(70,60,45,0.05),-1px_-1px_3px_rgba(255,255,255,0.8)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="pt-4 border-t border-[#ECE8DF] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold tracking-wider uppercase text-[#ED6B38] hover:text-[#d45524] inline-flex items-center gap-1.5 transition-colors group/link"
                      >
                        <span>LAUNCH PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#777777] hover:text-[#171717] transition-colors"
                          title="View Repository"
                          aria-label="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-xs text-gray-400 font-semibold select-none">
                      {project.number}
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Call to Action Banner */}
          <div className="mt-20 p-8 sm:p-12 clay-dark-card text-[#FFFFFF] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#B9F36A] tracking-wider uppercase">
                READY TO COLLABORATE?
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Have a new project or custom build in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] max-w-md">
                Let's discuss how we can turn your ideas into responsive, high-performance web experiences.
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
