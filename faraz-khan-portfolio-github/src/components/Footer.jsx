'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { easeCustom, staggerContainer, staggerItem } from '../utils/animations';

export default function Footer() {
  const { personal, navLinks } = portfolioData;
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/', '');
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="relative bg-[#202020] text-[#FFFFFF] border-t border-[#2F2F2F] pt-16 pb-12 overflow-hidden">
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
        {/* Main Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: easeCustom }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2F2F2F]"
        >
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B9F36A] shadow-[1px_1px_3px_rgba(110,160,30,0.4),-1px_-1px_2px_rgba(255,255,255,0.8)] group-hover:scale-125 transition-transform" />
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#FFFFFF] group-hover:text-[#B9F36A] transition-colors">
                FARAZ KHAN.
              </span>
            </Link>
            <p className="text-sm font-semibold tracking-wider uppercase text-[#B9F36A]">
              Web Developer
            </p>
            <p className="text-xs sm:text-sm text-[#777777] max-w-sm leading-relaxed">
              Focused on modern frontend engineering, building clean, responsive and user-centered web applications with React, Next.js, and modern styling.
            </p>
          </div>

          {/* Navigation Links Col (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#777777] block mb-4">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="inline-block text-xs sm:text-sm font-medium text-[#ECE8DF] hover:text-[#B9F36A] hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back To Top Col (3 cols) with Raised Dark Clay Buttons */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#777777] block mb-4 md:text-right">
                CHANNELS
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${personal.email}`}
                  className="w-9 h-9 rounded-xl bg-[#262626] border border-white/5 flex items-center justify-center text-[#ECE8DF] shadow-[3px_3px_8px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.1)] hover:text-[#171717] hover:bg-[#B9F36A] hover:shadow-[3px_3px_8px_rgba(110,160,30,0.3)] transition-all"
                  aria-label="Email Faraz Khan"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#262626] border border-white/5 flex items-center justify-center text-[#ECE8DF] shadow-[3px_3px_8px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.1)] hover:text-[#171717] hover:bg-[#B9F36A] hover:shadow-[3px_3px_8px_rgba(110,160,30,0.3)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#262626] border border-white/5 flex items-center justify-center text-[#ECE8DF] shadow-[3px_3px_8px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.1)] hover:text-[#171717] hover:bg-[#B9F36A] hover:shadow-[3px_3px_8px_rgba(110,160,30,0.3)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Back to top button with smooth hover */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={scrollToTop}
              className="mt-6 md:mt-0 group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ECE8DF] hover:text-[#B9F36A] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <div className="w-8 h-8 rounded-full bg-[#262626] border border-white/5 flex items-center justify-center shadow-[3px_3px_8px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.1)] group-hover:bg-[#B9F36A] group-hover:text-[#171717] transition-all">
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div>
            © {new Date().getFullYear()} Faraz Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>Soft Claymorphism Design System</span>
            <span>•</span>
            <span className="text-[#B9F36A]">React & Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
