'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for nopreload query param (for testing)
    if (typeof window !== 'undefined' && window.location.search.includes('nopreload=true')) {
      setLoading(false);
      return;
    }

    // Scroll to top on fresh load so user starts at the Hero
    if (typeof window !== 'undefined' && window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }

    // Lock body scroll only while preloading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const duration = 1100; // 1.1s fast, elegant sequence
    const startTime = performance.now();
    let animId;

    const update = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        animId = requestAnimationFrame(update);
      } else {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = originalOverflow || '';
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('preloader:complete'));
          }
        }, 120);
      }
    };

    animId = requestAnimationFrame(update);

    // Hard fallback safety timeout (never stay blocked)
    const timeout = setTimeout(() => {
      setProgress(100);
      setLoading(false);
      document.body.style.overflow = originalOverflow || '';
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('preloader:complete'));
      }
    }, 1800);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeout);
      document.body.style.overflow = originalOverflow || '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="cinematic-preloader"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // Smooth upward curtain reveal
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#202020] text-[#FFFFFF] select-none"
        >
          {/* Subtle architectural background grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2F2F2F 1px, transparent 1px), linear-gradient(to bottom, #2F2F2F 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
            {/* Top Indicator: Solid Clean Dot */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B9F36A] shadow-[0_0_4px_rgba(185,243,106,0.8)]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#777777]">
                INITIALIZING PORTFOLIO
              </span>
            </div>

            {/* FARAZ KHAN Wordmark with smooth reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#FFFFFF]"
              >
                FARAZ KHAN<span className="text-[#B9F36A]">.</span>
              </motion.h1>
            </div>

            {/* Subtitle: CREATIVE DEVELOPER */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#B9F36A] font-medium"
              >
                CREATIVE DEVELOPER
              </motion.p>
            </div>

            {/* Thin Lime Progress Line with Inset Clay Track */}
            <div className="w-full bg-[#171717] h-[3px] rounded-full overflow-hidden mb-4 relative shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6)]">
              <motion.div
                className="h-full bg-[#B9F36A] shadow-[0_0_8px_rgba(185,243,106,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>

            {/* Progress Percentage Counter */}
            <div className="flex items-center justify-between w-full text-xs font-mono text-[#777777]">
              <span className="tracking-wider">SYSTEM READY</span>
              <span className="text-[#B9F36A] font-bold text-sm tracking-widest font-mono">
                {progress < 10 ? `0${progress}` : progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
