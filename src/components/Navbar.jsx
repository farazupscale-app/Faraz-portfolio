'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easeCustom } from '../utils/animations';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { label: 'HOME', href: '/', isRoute: true },
    { label: 'ABOUT', href: '/about', isRoute: true },
    { label: 'STACK', href: '/#stack', isRoute: false },
    { label: 'PROJECTS', href: '/projects', isRoute: true },
    { label: 'CONTACT', href: '/contact', isRoute: true },
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'stack', 'services', 'work', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          if (sections[i] === 'services') setActiveSection('services');
          else if (sections[i] === 'process') setActiveSection('work');
          else setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, link) => {
    setIsOpen(false);
    if (isHomePage && !link.isRoute && link.href.startsWith('/#')) {
      e.preventDefault();
      const id = link.href.replace('/', '');
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#F3F0E8]/90 backdrop-blur-md border-white/60 py-3.5 shadow-[0_10px_25px_-5px_rgba(70,60,45,0.08),inset_0_-1px_0_rgba(255,255,255,0.7)]'
          : 'bg-[#F3F0E8]/80 backdrop-blur-sm border-white/40 py-4 shadow-[0_4px_16px_rgba(70,60,45,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand with pulse and hover micro-interaction */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-hidden"
          >
            <span className="w-2.5 h-2.5 bg-[#B9F36A] rounded-full inline-block shadow-[1px_1px_3px_rgba(110,160,30,0.4),-1px_-1px_2px_rgba(255,255,255,0.8),inset_0.5px_0.5px_1px_rgba(255,255,255,0.6)]" />
            <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-[#171717] group-hover:text-black transition-colors">
              FARAZ KHAN<span className="text-[#171717]">.</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links with Stagger and LayoutId Active Pill (Claymorphism Surface) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 bg-[#ECE8DF] p-1.5 rounded-full border border-white/60 shadow-[inset_2px_2px_5px_rgba(70,60,45,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">
          {navLinks.map((link) => {
            const isCurrentPage =
              link.isRoute &&
              (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href));
            const isAnchorActive =
              isHomePage &&
              !link.isRoute &&
              activeSection === link.href.replace('/#', '');

            const isActive = isCurrentPage || isAnchorActive;

            return (
              <div
                key={link.label}
                className="relative"
              >
                {/* Smooth sliding active indicator: Lime Clay Surface (rendered first so background sits behind text) */}
                {isActive && (
                  <motion.div
                    layoutId="navbarActivePill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#B9F36A] rounded-full shadow-[2px_2px_8px_rgba(110,160,30,0.3),-2px_-2px_6px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)] border border-white/40 z-0 pointer-events-none"
                  />
                )}

                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative z-20 px-4 py-1.5 text-xs font-bold tracking-wider transition-colors duration-200 rounded-full block ${
                    isActive ? 'text-[#171717]' : 'text-[#777777] hover:text-[#171717]'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: Desktop CTA button with Tactile Lime Clay Feel */}
        <div className="hidden md:block">
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#B9F36A] text-[#171717] font-semibold text-xs tracking-wider transition-all duration-200 border border-white/50 shadow-[4px_4px_12px_rgba(110,160,30,0.3),-2px_-2px_8px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.7)] hover:bg-[#cbf880] hover:shadow-[6px_6px_16px_rgba(110,160,30,0.4),-3px_-3px_10px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.8)] active:translate-y-0.5"
            >
              LET'S TALK
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Animated Hamburger Button with Soft Clay styling */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl text-[#171717] bg-[#ECE8DF] shadow-[3px_3px_6px_rgba(70,60,45,0.08),-3px_-3px_6px_rgba(255,255,255,0.9)] border border-white/50 focus:outline-hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-[2px] bg-[#171717] rounded-full block origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-[2px] bg-[#171717] rounded-full block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-[2px] bg-[#171717] rounded-full block origin-center"
          />
        </button>
      </div>

      {/* Mobile Animated Drawer Menu with Clay Depth */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeCustom }}
            className="md:hidden overflow-hidden bg-[#F3F0E8] border-b border-[#E2DDD2] shadow-[0_12px_28px_rgba(70,60,45,0.1)]"
          >
            <nav className="flex flex-col gap-2 px-4 pt-3 pb-6">
              {navLinks.map((link, idx) => {
                const isActive =
                  (link.isRoute &&
                    (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))) ||
                  (isHomePage && !link.isRoute && activeSection === link.href.replace('/#', ''));

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`px-4 py-3 text-sm font-semibold tracking-wider rounded-xl flex items-center justify-between transition-all ${
                        isActive
                          ? 'clay-btn-lime text-[#171717]'
                          : 'text-[#171717] hover:bg-black/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#171717]" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="pt-2 mt-2 border-t border-[#E2DDD2]"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold tracking-wider uppercase text-[#171717] clay-btn-lime rounded-xl"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
