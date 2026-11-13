'use client';

import React, { useEffect, useRef } from 'react';
import { startSwarm, isSwarmRunning, stopSwarm } from './swarmEngine';
import SwarmCursorLayer from './SwarmCursorLayer';
import { SwarmAnimationController } from './SwarmAnimationController';
import { setupAudioUnlock, prefersReducedMotion } from './SwarmEffects';

/**
 * SwarmMainCursor — Automatic Multiplayer Cursor Engine Integration
 *
 * Automatically initializes the Swarm cursors for every visitor:
 * - On initial homepage load & page refresh
 * - In new browser tabs
 * - On direct subpage visits
 * - On return visits
 *
 * Zero dependencies on Chrome extensions or local extensions.
 */
export default function SwarmMainCursor({ autoStart = true, showPill = true }) {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Respect user's accessibility reduced motion setting
    if (prefersReducedMotion()) {
      return;
    }

    // Modern browsers require gesture to unlock Web Audio API
    const audioCleanup = setupAudioUnlock(() => {
      // Audio context is seamlessly unlocked on first pointer/key touch
    });

    let timer = null;

    const launch = () => {
      if (!isSwarmRunning()) {
        startSwarm({ speed: 1, tour: true });
      }
    };

    // Launch swarm rebuild immediately on preloader completion or fast fallback
    const onPreloaderDone = () => {
      window.removeEventListener('preloader:complete', onPreloaderDone);
      if (timer) clearTimeout(timer);
      launch();
    };
    window.addEventListener('preloader:complete', onPreloaderDone);

    // Fast fallback timeout (instant for nopreload, aligned with preloader end)
    const delay = window.location.search.includes('nopreload=true') ? 50 : 1250;
    timer = setTimeout(launch, delay);

    return () => {
      audioCleanup();
      if (timer) clearTimeout(timer);
    };
  }, [autoStart]);

  return (
    <>
      <SwarmCursorLayer />
      <SwarmAnimationController showPill={showPill} />
    </>
  );
}
